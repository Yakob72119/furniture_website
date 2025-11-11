import { motion } from "motion/react";

export function EthiopianPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {/* Geometric patterns inspired by Ethiopian traditional art */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="ethiopian-weave"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            {/* Diamond pattern - common in Ethiopian textiles */}
            <path
              d="M50 10 L90 50 L50 90 L10 50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M50 25 L75 50 L50 75 L25 50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.4"
            />
            <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.5" />
            
            {/* Cross pattern - Ethiopian Christian symbolism */}
            <line x1="50" y1="35" x2="50" y2="65" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ethiopian-weave)" className="text-accent" />
      </svg>
    </div>
  );
}

export function EthiopianBorderDecoration() {
  return (
    <div className="relative w-full h-1 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="h-full ethiopian-border origin-left"
      />
    </div>
  );
}

export function EthiopianCornerDecoration() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-accent"
    >
      {/* Ornate corner design inspired by Ethiopian manuscript illuminations */}
      <path
        d="M2 2 L78 2 M2 2 L2 78"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="2" cy="2" r="4" fill="currentColor" />
      <path
        d="M10 2 L20 2 M2 10 L2 20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M25 2 Q30 2 30 7 M2 25 Q2 30 7 30"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}
