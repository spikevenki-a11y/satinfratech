"use client";

export function ScanLine() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan"
      />
    </div>
  );
}
