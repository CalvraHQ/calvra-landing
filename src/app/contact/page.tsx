"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Metadata } from "next";

// Note: metadata must be exported from a server component; move to a separate file if needed
// export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to your backend / email service
    setSubmitted(true);
  }

  return (
    <section className="max-w-xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Get in touch</h1>
          <p className="text-muted-foreground">
            Questions, feedback, or just want to say hi? We&apos;d love to hear
            from you.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-lg border p-6 text-center space-y-2"
          >
            <p className="text-lg font-semibold">Message sent!</p>
            <p className="text-sm text-muted-foreground">
              We&apos;ll get back to you soon.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="What's on your mind?"
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send message
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  );
}