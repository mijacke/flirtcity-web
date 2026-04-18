"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import SocialIcon from "../icons/SocialIcon";
import UserIcon from "../icons/UserIcon";

import type { Dictionary } from "@/app/locales/getDictionary";

type HeaderProps = {
  dict: Dictionary["header"];
  socials: Dictionary["footer"]["socials"];
};

export default function Header({ dict, socials }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
    dialogRef.current?.show();
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    dialogRef.current?.close();
  }, []);

  const toggleMenu = useCallback(() => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [isMenuOpen, openMenu, closeMenu]);

  // Close on Escape key (dialog handles this natively, but sync React state)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      setIsMenuOpen(false);
    };

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,border-color] duration-[220ms] ease-out
        before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:[backdrop-filter:blur(10px)_saturate(140%)] before:[-webkit-backdrop-filter:blur(10px)_saturate(140%)]
        after:content-[''] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2px] after:pointer-events-none after:bg-[image:var(--gradient-pearl)] after:opacity-100
        ${isScrolled
          ? "before:bg-[rgba(23,7,43,0.55)]"
          : "before:bg-[rgba(23,7,43,0.38)]"
        }`}
    >
      <div className="section-shell">
        <div className="section-frame relative z-1 flex items-center justify-between gap-5 min-h-[6.25rem]">
          <a aria-label={dict.homeAriaLabel} className="shrink-0" href="#">
            <Image
              alt={dict.logoAlt}
              className="w-[12.15rem] h-auto max-sm:h-[2.1rem] max-sm:w-auto"
              height={45}
              priority
              src="/images/design/header/logo-header.png"
              width={194}
            />
          </a>

          <nav className="flex items-center justify-end gap-5 flex-1 max-lg:hidden" aria-label="Primary">
            <div className="flex items-center gap-5">
              {dict.nav.map((item) => (
                <a
                  key={item.href}
                  className="relative inline-flex items-center justify-center min-h-8 font-[var(--font-primary)] text-base font-semibold leading-none tracking-[-0.08px] text-white/96 transition-colors duration-[180ms] ease-out hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              className="inline-flex items-center justify-center gap-2 min-h-[2.75rem] px-3.5 border border-white rounded-[1rem] bg-transparent font-[var(--font-primary)] text-sm font-semibold leading-none text-[var(--color-text-primary)] transition-colors duration-[180ms] ease-out hover:bg-[var(--surface-panel-hover)]"
              href="#signin"
            >
              <UserIcon />
              {dict.signIn}
            </a>
          </nav>

          <button
            aria-expanded={isMenuOpen}
            aria-label={dict.toggleMenu}
            className="hidden max-lg:inline-flex items-center justify-center flex-col gap-[0.38rem] w-[2.75rem] h-[2.75rem] p-0 border border-[var(--surface-control-border)] rounded-[1rem] bg-[var(--surface-panel-bg)] text-inherit backdrop-blur-[10px]"
            onClick={toggleMenu}
            type="button"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] rounded-full bg-[image:var(--gradient-pearl)]"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0, x: -18 } : { opacity: 1, x: 0 }}
              className="block w-6 h-[2px] rounded-full bg-[image:var(--gradient-pearl)]"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] rounded-full bg-[image:var(--gradient-pearl)]"
            />
          </button>
        </div>
      </div>

      {/*
       * Native <dialog> element for mobile menu.
       * - Handles Escape key natively
       */}
      <dialog
        ref={dialogRef}
        className="fixed inset-x-0 top-[6.25rem] bottom-0 z-30 w-full h-[calc(100dvh-6.25rem)] max-w-none max-h-none m-0 p-0 border-none bg-transparent backdrop:bg-transparent open:grid"
        aria-label="Navigation menu"
      >
        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="relative grid grid-rows-[1fr_auto] w-full h-full text-white bg-[rgba(23,7,43,0.55)] [backdrop-filter:blur(10px)_saturate(140%)] [-webkit-backdrop-filter:blur(10px)_saturate(140%)]"
              exit={{ opacity: 0, y: -16 }}
              initial={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="grid content-center justify-items-center gap-6 px-6">
                {dict.nav.map((item, index) => (
                  <motion.a
                    key={item.href}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[clamp(1.6rem,6vw,2.25rem)] font-semibold text-white no-underline"
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    onClick={closeMenu}
                    transition={{ delay: index * 0.04 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <a
                  className="mt-3 inline-flex items-center justify-center gap-2 min-h-[2.75rem] px-3.5 border border-white rounded-[1rem] bg-transparent font-[var(--font-primary)] text-sm font-semibold leading-none text-[var(--color-text-primary)] transition-colors duration-[180ms] ease-out hover:bg-[var(--surface-panel-hover)] no-underline"
                  href="#signin"
                  onClick={closeMenu}
                >
                  <UserIcon />
                  {dict.signIn}
                </a>
              </div>

              <div className="flex items-center justify-center gap-5 px-6 pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    aria-label={item.label}
                    className="text-white/72 transition-[color,transform] duration-[180ms] ease-out hover:text-[var(--color-accent-pink)] hover:-translate-y-px"
                    href={item.href}
                    onClick={closeMenu}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <SocialIcon network={item.network as "instagram" | "x" | "facebook" | "tiktok"} />
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </dialog>
    </header>
  );
}
