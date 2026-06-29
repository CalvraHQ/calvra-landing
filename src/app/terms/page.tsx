import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Calvra terms of service.",
};

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20 space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="text-sm text-muted-foreground">Last updated: June 2025</p>
      </div>

      <div className="space-y-6 text-muted-foreground leading-7">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            Acceptance of Terms
          </h2>
          <p>
            By accessing or using Calvra, you agree to be bound by these Terms.
            If you do not agree, please do not use the service.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            Use of Service
          </h2>
          <p>
            You agree to use Calvra only for lawful purposes and in a way that
            does not infringe the rights of others or restrict their use of the
            service.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            Changes to Terms
          </h2>
          <p>
            We may update these Terms from time to time. We&apos;ll notify users
            of significant changes. Continued use of Calvra after changes
            constitutes acceptance of the new Terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            Questions about these Terms? Reach us via the{" "}
            <a
              href="/contact"
              className="underline underline-offset-4 hover:text-foreground"
            >
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}