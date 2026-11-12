import React from "react";

// Subtle arch frame inspired by Indian jali & haveli silhouettes
export function ArchFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-t-[48px] rounded-b-2xl overflow-hidden border border-[#DFD7C2] shadow-sm ${className}`}>
      {children}
    </div>
  );
}

// Minimal decorative botanical lotus motif (subtle and editorial)
export function LotusMotif({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C12 7 8 11 8 16a4 4 0 0 0 8 0c0-5-4-9-4-14z" />
      <path d="M12 9C9.5 12 5 13.5 4 17a4.5 4.5 0 0 0 6 2" />
      <path d="M12 9C14.5 12 19 13.5 20 17a4.5 4.5 0 0 1-6 2" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
    </svg>
  );
}

// Subtle mandala geometric pattern accent
export function MandalaGeometry({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="20" cy="20" r="16" strokeDasharray="3 3" opacity="0.6" />
      <rect x="10" y="10" width="20" height="20" transform="rotate(45 20 20)" strokeOpacity="0.4" />
      <circle cx="20" cy="20" r="6" strokeOpacity="0.7" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}
