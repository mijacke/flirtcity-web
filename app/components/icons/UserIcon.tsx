import type { SVGProps } from "react";

/**
 * User/person icon used in the Header sign-in button.
 * Decorative by default (`aria-hidden`).
 */
export default function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      className="w-6 h-6 shrink-0"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M12 13.004a4.704 4.704 0 1 0 0-9.408 4.704 4.704 0 0 0 0 9.408Zm7 7.18c-3.931-3.111-10.087-3.111-14 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
