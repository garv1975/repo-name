import { Crown } from "lucide-react";

interface HeaderLogoProps {
  variant?: "light" | "dark";
}

const HeaderLogo = ({ variant = "light" }: HeaderLogoProps) => {
  const textColor = variant === "light" ? "text-cream" : "text-brown";
  const iconColor = variant === "light" ? "text-gold" : "text-gold";
  
  return (
    <div className="flex items-center gap-2">
      {/* Logo Icon */}
      <div className="relative">
        <div className={`flex items-center justify-center ${iconColor}`}>
          <Crown className="w-8 h-8" strokeWidth={1.5} />
        </div>
        {/* Stylized cup beneath crown */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-4">
          <svg viewBox="0 0 24 16" className={iconColor} fill="currentColor">
            <path d="M4 2C4 1 5 0 6 0H18C19 0 20 1 20 2V4C20 8 17 12 12 12C7 12 4 8 4 4V2Z" />
            <path d="M8 14H16V16H8V14Z" />
          </svg>
        </div>
      </div>
      
      {/* Brand Name */}
      <span className={`font-display text-2xl font-semibold ${textColor}`}>
        Chai Culture
      </span>
    </div>
  );
};

export default HeaderLogo;
