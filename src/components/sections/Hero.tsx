"use client";

import { Button } from "@/components/ui";
import { PhoneMockup } from "@/components/ui";
import { ArrowRight, Smartphone, Wifi, WifiOff, Users } from "lucide-react";

export function Hero() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 lg:pt-0 lg:pb-0">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-net/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-landing relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                Can I actually afford{" "}
                <span className="text-gradient">this right now</span>?
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                The first finance app designed around one simple question.
                Track expenses, manage bills, hit savings goals — all without
                guilt, complexity, or hidden fees.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <Button
                size="lg"
                onClick={scrollToWaitlist}
                className="w-full sm:w-auto text-base group"
              >
                Get My Free Beta Access
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Meta info */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  Limited to 500 users
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4" />
                  Mobile-first
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <WifiOff className="w-4 h-4" />
                  Works offline
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="text-primary font-medium">Free beta access</span>
              </div>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="opacity-0 animate-fade-in-up animation-delay-300">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
