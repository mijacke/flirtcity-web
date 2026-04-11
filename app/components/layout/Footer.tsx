import Image from "next/image";

import SocialIcon from "../icons/SocialIcon";

import type { Dictionary } from "@/app/locales/getDictionary";

type FooterProps = {
  dict: Dictionary["footer"];
};

export default function Footer({ dict }: FooterProps) {
  return (
    <footer>
      <div className="section-shell grid gap-[2.1875rem] pb-[2.8125rem]">
        <div className="section-frame grid justify-items-center gap-[2.1875rem]">
          {/* Top Row */}
          <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-2.5 max-md:grid-cols-1 max-md:justify-items-center max-md:text-center">
            <p className="m-0 text-sm leading-[1.428571] tracking-[-0.5px] text-white/72">
              {dict.copyright}
            </p>

            <div className="w-[clamp(7rem,11vw,8.5rem)] justify-self-center">
              <img
                alt={dict.logoAlt}
                className="w-full h-auto"
                height={31}
                src="/images/design/footer/logo-footer.png"
                width={136}
                loading="lazy"
              />
            </div>

            <div className="flex justify-end items-center gap-3.5 max-md:justify-center">
              {dict.socials.map((item) => (
                <a
                  key={item.label}
                  aria-label={item.label}
                  className="text-white/72 transition-[color,transform] duration-[180ms] ease-out hover:text-[var(--color-accent-pink)] hover:-translate-y-px"
                  href={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <SocialIcon network={item.network as "instagram" | "x" | "facebook" | "tiktok"} />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-center gap-5">
            {dict.links.map((link) => (
              <a
                key={link.label}
                className="text-sm leading-[1.428571] tracking-[-0.5px] text-white/62 transition-colors duration-[180ms] ease-out hover:text-[var(--color-text-primary)]"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
