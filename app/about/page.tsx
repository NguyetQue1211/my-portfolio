// app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-20">
      
      {/* Hero */}
      <section className="space-y-6">
        <h1 className="text-4xl font-serif font-semibold tracking-tight">
          Hi, I’m Laura.
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          I’m a <span className="text-foreground font-medium">Technical Product Manager</span> 
          working at the intersection of product strategy, engineering, and systems thinking.
        </p>
      </section>

      {/* Background */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Background</h2>

        <p className="leading-relaxed text-muted-foreground">
          I started my career close to engineering, which shaped how I think about products:
          through constraints, trade-offs, and long-term maintainability.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          Over the years, I’ve worked on internal platforms, consumer-facing products, and 
          data-heavy systems — often translating ambiguous business goals into concrete technical decisions.
        </p>
      </section>

      {/* POV */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">What I care about</h2>

        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
          <li>Clear problem framing before jumping to solutions</li>
          <li>Systems that scale people, not just features</li>
          <li>Making trade-offs explicit and reversible</li>
          <li>Building products engineers are proud to maintain</li>
        </ul>
      </section>

    </main>
  );
}
