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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col antialiased bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-N74KMDKDVM" />
    </html>
  );
}