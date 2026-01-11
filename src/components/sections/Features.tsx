"use client";

import { Card, CardContent } from "@/components/ui";
import { LayoutDashboard, CalendarClock, Target } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "The Dashboard That Actually Helps",
    description:
      "Your entire financial picture in one glance. Total balance, monthly income vs expenses, savings progress, and upcoming bills — all updated in real-time. No endless scrolling. No confusing charts. Just the numbers that matter.",
    highlights: [
      "One-tap transaction logging with smart categories",
      "Visual income vs expense comparison",
      "Savings goals progress at a glance",
      "Upcoming bills and due dates",
    ],
    color: "primary" as const,
  },
  {
    icon: CalendarClock,
    title: "Bills & SIPs — Never Miss What Matters",
    description:
      "Track recurring expenses, subscriptions, EMIs, and investment SIPs in one place. Get reminded before they're due. See exactly how much is committed before you even think about spending more.",
    highlights: [
      "Automatic bill reminders before due dates",
      "SIP tracking with total invested view",
      "EMI breakdown with tenure remaining",
      "Monthly commitment overview",
    ],
    color: "warning" as const,
  },
  {
    icon: Target,
    title: "Savings Goals That Feel Real",
    description:
      "Whether it's a vacation, emergency fund, or that gadget you've been eyeing — set a goal, add money when you can, and watch the progress. No rigid rules. Just a clear path to what you want.",
    highlights: [
      "Visual progress bars for each goal",
      "Flexible contribution — add any amount, anytime",
      "Target date tracking",
      "Celebrate milestones along the way",
    ],
    color: "net" as const,
  },
];

const colorClasses = {
  primary: {
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    borderColor: "border-primary/30",
    shadowColor: "shadow-primary/10",
  },
  warning: {
    iconBg: "bg-warning/20",
    iconColor: "text-warning",
    borderColor: "border-warning/30",
    shadowColor: "shadow-warning/10",
  },
  net: {
    iconBg: "bg-net/20",
    iconColor: "text-net",
    borderColor: "border-net/30",
    shadowColor: "shadow-net/10",
  },
};

export function Features() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-landing">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Everything you need,{" "}
            <span className="text-gradient">nothing you don&apos;t</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for real people who want clarity, not complexity.
          </p>
        </div>

        {/* Feature cards */}
        <div className="space-y-8 lg:space-y-12">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <Card
                key={feature.title}
                variant="highlighted"
                className={`overflow-visible opacity-0 animate-fade-in-up ${colors.borderColor}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 lg:p-10">
                  <div
                    className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-start`}
                  >
                    {/* Icon and title */}
                    <div className="flex-1 space-y-4">
                      <div
                        className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center`}
                      >
                        <Icon className={`w-7 h-7 ${colors.iconColor}`} />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="flex-1 w-full">
                      <div className="space-y-3">
                        {feature.highlights.map((highlight, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30 border border-border"
                          >
                            <div
                              className={`w-5 h-5 rounded-full ${colors.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full ${colors.iconBg.replace("/20", "")}`}
                              />
                            </div>
                            <span className="text-sm font-medium">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
