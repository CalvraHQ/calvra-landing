import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <p className="text-muted-foreground mt-2">Coming soon.</p>
    </section>
  );
}