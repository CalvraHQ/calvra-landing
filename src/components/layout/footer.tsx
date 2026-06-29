import Image from "next/image";
import Link from "next/link";

const cols = [
  {
    heading: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "Research", href: "/#research" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Join Waitlist", href: "/#waitlist" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logos/calvra.png"
              alt="Calvra"
              width={200}
              height={52}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The AI-powered business assistant for small businesses. Know your numbers, always.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.linkedin.com/company/calvra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-border hover:border-gray-300 transition-colors text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="https://github.com/CalvraHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-border hover:border-gray-300 transition-colors text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Calvra. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Made for small businesses in Kenya.</p>
        </div>
      </div>
    </footer>
  );
}