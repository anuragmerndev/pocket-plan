"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface PhoneMockupProps {
  children?: ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Glow effect behind phone */}
      <div className="absolute inset-0 blur-[80px] bg-gradient-to-br from-primary/25 via-primary/15 to-net/20 animate-glow" />

      {/* Phone frame */}
      <div className="relative group">
        {/* 3D tilt effect container */}
        <div className="transition-transform duration-500 ease-out group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg]">
          {/* Phone outer frame */}
          <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[40px] sm:rounded-[50px] p-2 sm:p-3 shadow-2xl shadow-black/50">
            {/* Phone inner bezel */}
            <div className="absolute inset-2 sm:inset-3 rounded-[32px] sm:rounded-[42px] bg-gradient-to-br from-zinc-700 to-zinc-800" />

            {/* Screen */}
            <div className="relative w-full h-full bg-background rounded-[32px] sm:rounded-[42px] overflow-hidden border border-zinc-700">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-6 sm:h-7 bg-black rounded-full z-20" />

              {/* Screen content */}
              <div className="w-full h-full overflow-hidden">
                {children || <DashboardScreen />}
              </div>
            </div>

            {/* Side buttons - Power */}
            <div className="absolute -right-1 top-28 w-1 h-12 bg-zinc-700 rounded-l-sm" />

            {/* Side buttons - Volume */}
            <div className="absolute -left-1 top-24 w-1 h-8 bg-zinc-700 rounded-r-sm" />
            <div className="absolute -left-1 top-36 w-1 h-8 bg-zinc-700 rounded-r-sm" />

            {/* Silent switch */}
            <div className="absolute -left-1 top-16 w-1 h-4 bg-zinc-700 rounded-r-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Dashboard screenshot component
function DashboardScreen() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/images/dashboard.jpeg"
        alt="PocketPlan Dashboard"
        fill
        className="object-cover object-top"
        priority
        sizes="(max-width: 640px) 280px, 320px"
      />
    </div>
  );
}
