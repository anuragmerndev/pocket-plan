"use client";

import { Check, X } from "lucide-react";

const comparisons = [
  {
    other: '"How much did I spend last month?"',
    pocketplan: '"Can I buy this without messing up my month?"',
  },
  {
    other: '"Did I stay in budget?"',
    pocketplan: '"Should I even make this purchase right now?"',
  },
  {
    other: '"What categories am I overspending in?"',
    pocketplan: '"What can I actually afford after bills & savings?"',
  },
  {
    other: '"Here\'s a pie chart of your expenses."',
    pocketplan: '"Yes, you can buy it — here\'s why it\'s safe."',
  },
  {
    other: '"Set a budget and try to stick to it."',
    pocketplan: '"Your money. Your rules. We just show you the truth."',
  },
];

export function Comparison() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="container-landing">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            PocketPlan works the way{" "}
            <span className="text-gradient">your brain actually works</span>
          </h2>
        </div>

        {/* Comparison table */}
        <div className="max-w-4xl mx-auto">
          {/* Table header */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
                <X className="w-4 h-4" />
                Other Apps Ask
              </span>
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Check className="w-4 h-4" />
                PocketPlan Answers
              </span>
            </div>
          </div>

          {/* Comparison rows */}
          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 rounded-xl bg-card border border-border">
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {item.other}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20">
                  <p className="text-foreground text-sm sm:text-base font-medium">
                    {item.pocketplan}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
