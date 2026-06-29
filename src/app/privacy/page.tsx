import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Calvra handles your data.",
};

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20 space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: June 2025</p>
      </div>

      <div className="space-y-6 text-muted-foreground leading-7">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us, such as when you
            join our waitlist or contact us. This may include your name, email
            address, and any message you send.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect to send product updates, respond to
            your inquiries, and improve our services. We do not sell your personal
            information to third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
          <p>
            If you have questions about this policy, please{" "}
            <a
              href="/contact"
              className="underline underline-offset-4 hover:text-foreground"
            >
              contact us
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}