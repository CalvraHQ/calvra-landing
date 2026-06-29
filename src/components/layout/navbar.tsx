"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/#research" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Waitlist", href: "/#waitlist" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border"
      style={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(255,255,255,0.92)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logos/calvra.png"
            alt="Calvra"
            width={200}
            height={52}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#research"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Read Research
          </Link>
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white hover:opacity-90 hover:shadow-lg transition-all"
            style={{ background: "#EC4899" }}
          >
            Join Waitlist <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold text-white mt-1"
            style={{ background: "#EC4899" }}
          >
            Join Waitlist <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </header>
  );
}