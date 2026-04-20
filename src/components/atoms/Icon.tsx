import { SVGProps } from "react";

type IconName =
  | "search"
  | "cart"
  | "heart"
  | "heart-filled"
  | "menu"
  | "globe"
  | "close"
  | "chevron-left"
  | "chevron-right"
  | "chevron-down"
  | "instagram"
  | "facebook"
  | "eye"
  | "plus"
  | "minus"
  | "trash"
  | "truck";

type Props = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export default function Icon({ name, size = 20, ...rest }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...rest,
  };

  switch (name) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case "cart":
      return (
        <svg {...common}>
          <path d="M3 4h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6" />
          <circle cx="9" cy="21" r="1.4" />
          <circle cx="18" cy="21" r="1.4" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M20.8 6.6a5 5 0 0 0-7.2 0L12 8.3l-1.6-1.7a5 5 0 0 0-7.2 7.2l8.8 8.9 8.8-8.9a5 5 0 0 0 0-7.2z" />
        </svg>
      );
    case "heart-filled":
      return (
        <svg {...common} fill="currentColor" strokeWidth={0}>
          <path d="M20.8 6.6a5 5 0 0 0-7.2 0L12 8.3l-1.6-1.7a5 5 0 0 0-7.2 7.2l8.8 8.9 8.8-8.9a5 5 0 0 0 0-7.2z" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
    case "chevron-left":
      return (
        <svg {...common}>
          <path d="m15 18-6-6 6-6" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg {...common}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common}>
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "minus":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
        </svg>
      );
    case "trash":
      return (
        <svg {...common}>
          <path d="M3 6h18M8 6V4h8v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
          <circle cx="7.5" cy="18" r="1.75" />
          <circle cx="17" cy="18" r="1.75" />
        </svg>
      );
  }
}
