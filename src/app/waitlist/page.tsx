"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to your backend / email service
    setSubmitted(true);
  }

  return (
    <section className="max-w-lg mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Join the Waitlist</h1>
          <p className="text-muted-foreground">
            Be the first to know when Calvra launches. No spam, ever.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-lg border p-6 text-center space-y-2"
          >
            <p className="text-lg font-semibold">You&apos;re on the list!</p>
            <p className="text-sm text-muted-foreground">
              We&apos;ll reach out to <strong>{email}</strong> when we launch.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Reserve my spot
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  );
}