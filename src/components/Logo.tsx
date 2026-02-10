import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => (
  <svg
    viewBox="0 0 280 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-14", className)}
    aria-label="Meridian Escapes"
  >
    {/* Lotus flower icon */}
    <g fill="currentColor">
      {/* Center petal */}
      <ellipse cx="40" cy="28" rx="8" ry="22" opacity="0.9" />
      {/* Left petals */}
      <ellipse cx="40" cy="28" rx="8" ry="22" transform="rotate(-30 40 40)" opacity="0.75" />
      <ellipse cx="40" cy="28" rx="8" ry="22" transform="rotate(-60 40 40)" opacity="0.6" />
      {/* Right petals */}
      <ellipse cx="40" cy="28" rx="8" ry="22" transform="rotate(30 40 40)" opacity="0.75" />
      <ellipse cx="40" cy="28" rx="8" ry="22" transform="rotate(60 40 40)" opacity="0.6" />
      {/* Base arc */}
      <path d="M20 50 Q30 42 40 40 Q50 42 60 50 Q50 46 40 45 Q30 46 20 50Z" opacity="0.5" />
    </g>
    {/* Brand text */}
    <text
      x="80"
      y="35"
      fill="currentColor"
      fontFamily="serif"
      fontSize="22"
      fontWeight="700"
      letterSpacing="1"
    >
      MERIDIAN
    </text>
    <text
      x="80"
      y="56"
      fill="currentColor"
      fontFamily="serif"
      fontSize="22"
      fontWeight="700"
      letterSpacing="1"
    >
      ESCAPES
    </text>
  </svg>
);

export default Logo;
