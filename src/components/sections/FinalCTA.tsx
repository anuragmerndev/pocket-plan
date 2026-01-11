"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { ArrowRight, Check, Shield, Lock, Users } from "lucide-react";

const trustBadges = [
  { icon: Shield, text: "No credit card required" },
  { icon: Lock, text: "Your data stays private" },
  { icon: Users, text: "Limited to 500 users" },
];

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    // TODO: Integrate with your backend/email service
    // This is a placeholder that simulates a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="waitlist" className="py-20 lg:py-32">
      <div className="container-landing">
        <div className="max-w-3xl mx-auto">
          {/* Main CTA card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-card via-card to-primary/10 border border-primary/30 p-8 lg:p-12 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-net/5 pointer-events-none" />

            <div className="relative z-10 text-center space-y-8">
              {/* Headline */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Ready to take control?
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Join the waitlist and be among the first 500 to experience
                  PocketPlan. No spam, just an invite when we launch.
                </p>
              </div>

              {/* Email form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === "loading" || status === "success"}
                    className="flex-1 min-h-[52px] h-14 px-5 rounded-xl bg-background border border-border text-foreground text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading" || status === "success"}
                    className="whitespace-nowrap"
                  >
                    {status === "loading" ? (
                      "Joining..."
                    ) : status === "success" ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        You&apos;re in!
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>

                {status === "success" && (
                  <p className="text-sm text-primary mt-3 animate-fade-in">
                    Thanks for joining! We&apos;ll be in touch soon.
                  </p>
                )}
              </form>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-primary" />
                      <span>{badge.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-center mt-12 text-sm text-muted-foreground">
            <p>
              Questions? Reach out at{" "}
              <a
                href="mailto:hello@pocketplan.app"
                className="text-primary hover:underline"
              >
                hello@pocketplan.app
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
