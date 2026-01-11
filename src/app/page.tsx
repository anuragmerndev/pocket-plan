"use client";

import Image from "next/image";
import {
  Hero,
  Problem,
  Comparison,
  Features,
  MoreFeatures,
  WhoItsFor,
  Promise,
  BetaPerks,
  FAQ,
  FinalCTA,
} from "@/components/sections";

export default function Home() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="container-landing">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/icons/pocket-plan-icon-192.png"
                alt="PocketPlan"
                width={36}
                height={36}
                className="rounded-xl"
              />
              <span className="text-xl font-bold">PocketPlan</span>
            </div>

            {/* CTA */}
            <button
              onClick={scrollToWaitlist}
              className="h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <Hero />
        <Problem />
        <Comparison />
        <Features />
        <MoreFeatures />
        <WhoItsFor />
        <Promise />
        <BetaPerks />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container-landing">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/icons/pocket-plan-icon-192.png"
                alt="PocketPlan"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold">PocketPlan</span>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} PocketPlan. All rights reserved.
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a
                href="mailto:hello@pocketplan.app"
                className="hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
