import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Calvra.",
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About Calvra</h1>
        <p className="text-lg text-muted-foreground">
          We&apos;re a small team obsessed with removing friction from the way
          people build things.
        </p>
      </div>

      <div className="space-y-6 text-muted-foreground leading-7">
        <p>
          Calvra started as a frustration — too many tools, too many tabs, too
          much context-switching. We believe the best software disappears into
          your workflow and lets you focus on what actually matters.
        </p>
        <p>
          We&apos;re building in public, shipping fast, and listening closely.
          If you have feedback or just want to say hello, reach out on the{" "}
          <a href="/contact" className="underline underline-offset-4 hover:text-foreground">
            contact page
          </a>
          .
        </p>
      </div>
    </section>
  );
}