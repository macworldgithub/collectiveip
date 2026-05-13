import { useState } from "react";

interface LogoBadgeProps {
  logo: string;
  brand: string;
  gradient?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function LogoBadge({
  logo,
  brand,
  size = "md",
  className = "",
}: LogoBadgeProps) {
  const [failed, setFailed] = useState(false);

  const imgSizes = {
    sm: "h-8 sm:h-10 md:h-12 max-w-[120px] sm:max-w-[160px] md:max-w-[200px]",
    md: "h-16 sm:h-20 md:h-24 max-w-[180px] sm:max-w-[220px] md:max-w-[280px]",
    lg: "h-20 sm:h-24 md:h-28 max-w-[220px] sm:max-w-[280px] md:max-w-[360px]",
  };

  const failSizes = {
    sm: "text-xs sm:text-sm px-2 py-1",
    md: "text-sm sm:text-base px-3 py-1.5",
    lg: "text-base sm:text-lg px-4 py-2",
  };

  if (failed) {
    return (
      <span
        className={`inline-block bg-white/90 text-slate-700 font-semibold rounded shadow-sm whitespace-nowrap ${failSizes[size]} ${className}`}
        title={brand}
      >
        {brand}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={`${brand} logo`}
      className={`${imgSizes[size]} w-auto object-contain drop-shadow-sm ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
