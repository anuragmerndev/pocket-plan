"use client";

export function Promise() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container-landing">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main promise */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            No judgment. No pressure.{" "}
            <span className="text-gradient">Just clarity.</span>
          </h2>

          {/* Promise details */}
          <div className="space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              PocketPlan doesn&apos;t shame you for spending. It doesn&apos;t send you
              anxiety-inducing alerts or make you feel guilty about that coffee.
            </p>
            <p>
              It simply shows you the truth about your money — where it goes,
              what&apos;s committed, and what&apos;s actually available. The rest is up to
              you.
            </p>
            <p className="text-foreground font-medium">
              Because financial clarity should feel empowering, not overwhelming.
            </p>
          </div>

          {/* Visual accent */}
          <div className="flex justify-center gap-4 pt-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse-soft animation-delay-200" />
            <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse-soft animation-delay-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
