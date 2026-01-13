"use client";

import { Card, CardContent } from "@/components/ui";
import {
  WifiOff,
  PieChart,
  Search,
  Lock,
  Smartphone,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: WifiOff,
    title: "Works offline",
    description:
      "Track expenses on a plane, in a subway, anywhere. Your data syncs automatically when you're back online — no lost transactions.",
    color: "primary" as const,
  },
  {
    icon: PieChart,
    title: "Smart budgets",
    description:
      "Set spending limits by category. Get visual feedback, not guilt trips.",
    color: "warning" as const,
  },
  {
    icon: Search,
    title: "Searchable history",
    description:
      "Find any transaction instantly. Filter by date, category, or amount.",
    color: "net" as const,
  },
  {
    icon: Lock,
    title: "Your Data Stays Yours. Forever.",
    description:
      "No selling your info. No ads. No tracking. Export everything with one tap or delete your account completely. You're in control.",
    color: "primary" as const,
  },
  {
    icon: Smartphone,
    title: "Install as app",
    description:
      "Add to home screen for a native app experience. Works on iOS and Android.",
    color: "warning" as const,
  },
  {
    icon: Zap,
    title: "Opens instantly",
    description: "No loading screens. No lag. Just open and go.",
    color: "net" as const,
  },
];

const colorClasses = {
  primary: {
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    borderHover: "hover:border-primary/50",
    shadowHover: "hover:shadow-primary/10",
  },
  warning: {
    iconBg: "bg-warning/20",
    iconColor: "text-warning",
    borderHover: "hover:border-warning/50",
    shadowHover: "hover:shadow-warning/10",
  },
  net: {
    iconBg: "bg-net/20",
    iconColor: "text-net",
    borderHover: "hover:border-net/50",
    shadowHover: "hover:shadow-net/10",
  },
};

export function MoreFeatures() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="container-landing">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            The Features Other Apps <span className="text-gradient">Charge Extra For</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Privacy, speed, and offline access — included. Always.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                hoverEffect
                className={`opacity-0 animate-fade-in-up ${colors.borderHover} ${colors.shadowHover} hover:shadow-lg`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-7 h-7 ${colors.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
