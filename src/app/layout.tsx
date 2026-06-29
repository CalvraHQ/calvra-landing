import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Calvra",
    template: "%s | Calvra",
  },
  description: "Calvra — the AI-powered business assistant for small businesses.",
  verification: {
    google: "w__bo_V7ypYEGLJigFzuaT-EaIgCphgBMZq0zDJpyus",
  },
  metadataBase: new URL("https://calvra.com"),
  icons: {
    icon: "/logos/calvra.png",
    apple: "/logos/calvra.png",
  },
  keywords: [
    // Core
    "small business software",
    "business management software",
    "small business management",
    "business record keeping",

    // Recording
    "sales tracker",
    "expense tracker",
    "income tracker",
    "business transaction tracker",
    "daily sales record",
    "record business sales",
    "record business expenses",

    // Profit
    "profit tracker",
    "profit calculator",
    "business profit calculator",
    "know business profit",
    "weekly business report",
    "monthly business report",

    // Customers & Debts
    "customer debt tracker",
    "accounts receivable tracker",
    "who owes me money",
    "customer payment tracker",

    // Inventory
    "inventory tracker",
    "stock management",
    "stock tracker",
    "inventory records",

    // AI
    "AI bookkeeping",
    "AI business assistant",
    "AI accounting assistant",
    "AI for small businesses",
    "AI business insights",
    "AI sales assistant",

    // Voice
    "voice expense tracker",
    "voice sales recorder",
    "voice bookkeeping",
    "voice business assistant",

    // Alternatives
    "Excel alternative for business",
    "notebook alternative for business records",
    "POS alternative",
    "business record app",

    // Reports
    "business dashboard",
    "business analytics",
    "business reports",
    "financial reports for small business",

    // Industry
    "retail business software",
    "salon management software",
    "photography business software",
    "furniture business management",
    "small shop management software"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="en"
          className={`${jakartaSans.variable} ${geistMono.variable}`}
      >
      <body>
      {children}

      <GoogleAnalytics gaId="G-N74KMDKDVM" />
      </body>
      </html>
  );
}