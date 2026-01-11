"use client";

import { Card, CardContent } from "@/components/ui";

const problems = [
  {
    emoji: "📊",
    title: "Expense Trackers",
    description: "Show you where money went. Not why you're still broke.",
  },
  {
    emoji: "🏦",
    title: "Banking Apps",
    description: "Show you transactions. Not what you can actually spend.",
  },
  {
    emoji: "📈",
    title: "Budget Apps",
    description: "Set limits you'll ignore. Guilt you when you break them.",
  },
];

export function Problem() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-landing">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            You&apos;ve tried the other apps.{" "}
            <span className="text-muted-foreground">They didn&apos;t work.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Here&apos;s how PocketPlan is different.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card
              key={problem.title}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{problem.emoji}</div>
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Closing question */}
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-medium text-gradient inline-block">
            What if an app actually understood how you think about money?
          </p>
        </div>
      </div>
    </section>
  );
}
