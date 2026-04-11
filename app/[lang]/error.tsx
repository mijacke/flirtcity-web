"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
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
        <h1 style={{ margin: 0, fontSize: "2rem", fontWeight: 600 }}>
          Something went wrong
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "1.125rem",
            opacity: 0.7,
            maxWidth: "36ch",
          }}
        >
          An unexpected error occurred. Please try again.
        </p>
        {error.digest && (
          <p
            style={{
              margin: 0,
              fontSize: "0.8rem",
              opacity: 0.35,
              fontFamily: "monospace",
            }}
          >
            Error ID: {error.digest}
          </p>
        )}
      </div>
      <button
        onClick={reset}
        style={{
          justifySelf: "center",
          padding: "0.875rem 2rem",
          borderRadius: "1rem",
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          fontSize: "1rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "background 180ms",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.14)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
        }
      >
        Try again
      </button>
    </div>
  );
}
