"use client";

import { Card, CardContent, Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

const personas = [
  {
    emoji: "💼",
    title: "The Monthly Salary Juggler",
    description:
      "You get paid once a month, and somehow it's always gone by the 20th. You need to know what's safe to spend without calculating in your head every time.",
    traits: [
      "Balances bills, EMIs, and lifestyle expenses",
      "Wants to save but needs visibility first",
      "Tired of spreadsheets and mental math",
    ],
  },
  {
    emoji: "📱",
    title: "The Subscription Victim",
    description:
      "Netflix, Spotify, gym, cloud storage... You're not even sure what you're paying for anymore. You need everything in one place, with reminders before money disappears.",
    traits: [
      "Multiple recurring charges across platforms",
      "Often surprised by auto-debits",
      "Wants control without canceling everything",
    ],
  },
  {
    emoji: "🎯",
    title: "The Intentional Wealth Builder",
    description:
      "You're already saving and investing, but you want better clarity on what's left for spending. You're building wealth — you just need a cleaner view of the journey.",
    traits: [
      "Active SIP and investment portfolio",
      "Tracks multiple savings goals",
      "Values data privacy and ownership",
    ],
  },
];

export function WhoItsFor() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container-landing">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Built for <span className="text-gradient">real people</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Not finance bros. Not spreadsheet experts. Just you.
          </p>
        </div>

        {/* Persona cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <Card
              key={persona.title}
              variant="highlighted"
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="text-5xl mb-4">{persona.emoji}</div>
                <h3 className="text-xl font-bold mb-3">{persona.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {persona.description}
                </p>
                <div className="space-y-2">
                  {persona.traits.map((trait, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{trait}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="text-center mt-16 space-y-6">
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            See yourself in any of these? You&apos;re exactly who we built this for.
          </p>
          <Button
            size="lg"
            onClick={scrollToWaitlist}
            className="group"
          >
            Save My Spot — 500 Users Only
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
