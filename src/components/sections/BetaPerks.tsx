"use client";

import { Card, CardContent } from "@/components/ui";
import { Check, Clock } from "lucide-react";

const perks = [
  "Lifetime free access — locked in forever, even after public launch",
  "Full premium features during beta (worth ₹10,000/year)",
  "Direct line to the founders — your feedback shapes the roadmap",
  "First access to new features before anyone else",
  "Priority support and exclusive beta community access",
];

export function BetaPerks() {
  // Calculate days until Jan 15
  const launchDate = new Date("2026-01-15");
  const today = new Date();
  const daysUntilLaunch = Math.ceil(
    (launchDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <section className="py-20 lg:py-32">
      <div className="container-landing">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Perks list */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Be part of the{" "}
                <span className="text-gradient">founding 500</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Early access comes with real benefits. Here&apos;s what you get as a
                beta user:
              </p>
            </div>

            <div className="space-y-4">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Timeline/Countdown */}
          <div className="flex justify-center lg:justify-end">
            <Card variant="highlighted" className="w-full max-w-md">
              <CardContent className="p-8 text-center space-y-6">
                {/* Countdown badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Clock className="w-4 h-4" />
                  Launching Soon
                </div>

                {/* Date */}
                <div>
                  <div className="text-5xl font-bold text-gradient">Jan 15</div>
                  <div className="text-muted-foreground mt-2">2026</div>
                </div>

                {/* Countdown */}
                {daysUntilLaunch > 0 && (
                  <div className="pt-4 border-t border-border">
                    <div className="text-3xl font-bold">{daysUntilLaunch}</div>
                    <div className="text-sm text-muted-foreground">
                      days to go
                    </div>
                  </div>
                )}

                {/* Timeline */}
                <div className="pt-6 space-y-4 text-left">
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Timeline
                  </div>
                  <TimelineItem
                    date="Now"
                    title="Waitlist Open"
                    active
                  />
                  <TimelineItem
                    date="Jan 15"
                    title="Beta Launch (500 users)"
                  />
                  <TimelineItem
                    date="Feb"
                    title="Feature Feedback Phase"
                  />
                  <TimelineItem
                    date="Q2 2026"
                    title="Public Launch"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  date,
  title,
  active = false,
}: {
  date: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-3 h-3 rounded-full ${
          active ? "bg-primary animate-pulse-soft" : "bg-muted"
        }`}
      />
      <div className="flex-1 flex items-center justify-between">
        <span
          className={`text-sm ${active ? "text-foreground font-medium" : "text-muted-foreground"}`}
        >
          {title}
        </span>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
    </div>
  );
}
