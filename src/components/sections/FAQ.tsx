"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is PocketPlan really free?",
    answer:
      "Yes! During beta, everything is completely free. After launch, we'll have a generous free tier that covers most users. Premium features (if any) will be optional.",
  },
  {
    question: "How is this different from my banking app?",
    answer:
      'Banking apps show transactions. PocketPlan shows what you can actually afford. The "Can I Buy?" feature considers your bills, savings goals, and committed expenses — something no banking app does.',
  },
  {
    question: "Is my financial data safe?",
    answer:
      "Absolutely. Your data is encrypted, stored securely, and never sold. We use industry-standard security practices. Plus, you can export or delete your data anytime — you own it completely.",
  },
  {
    question: "Do I need to link my bank account?",
    answer:
      "No! PocketPlan works entirely with manual entry. This keeps your banking credentials safe and gives you full control. Most users find this takes less than 30 seconds per transaction.",
  },
  {
    question: "What happens after the beta?",
    answer:
      "Beta users keep their free access locked in. When we launch publicly, you'll continue using all features without paying. Think of it as a thank-you for helping us build something great.",
  },
  {
    question: "Can I use it on multiple devices?",
    answer:
      "Yes! Your data syncs across devices when you're online. And because it's a PWA, you can install it on any phone, tablet, or computer — no app store required.",
  },
  {
    question: "What if I have feedback or feature requests?",
    answer:
      "We love hearing from users! Beta members get direct access to our feedback channel. Your input genuinely shapes what we build next.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="container-landing">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-card border border-border overflow-hidden transition-all duration-200 hover:border-primary/30"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
