import Link from "next/link";
import { Outfit, Montserrat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function NotFound() {
  return (
    <html lang="en" className={`${outfit.variable} ${montserrat.variable}`}>
      <body>
        <div
          style={{
            display: "grid",
            placeContent: "center",
            minHeight: "100vh",
            gap: "2rem",
            textAlign: "center",
            fontFamily: "var(--font-primary, system-ui, sans-serif)",
            color: "white",
            background: "#17072b",
          }}
        >
          <div style={{ display: "grid", gap: "0.75rem" }}>
            <p
              style={{
                margin: 0,
                fontSize: "5rem",
                fontWeight: 700,
                lineHeight: 1,
                background: "linear-gradient(90deg, #ffe02e, #fa8ae5, #0ff2f2)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              404
            </p>
            <h1 style={{ margin: 0, fontSize: "1.75rem", fontWeight: 600 }}>
              Page not found
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: "1.125rem",
                opacity: 0.7,
                maxWidth: "36ch",
              }}
            >
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          <Link
            href="/"
            style={{
              justifySelf: "center",
              padding: "0.875rem 2rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              fontSize: "1rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 180ms",
            }}
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
