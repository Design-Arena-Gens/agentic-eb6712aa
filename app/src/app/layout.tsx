import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});

const metaTitle = "Nexari Labs | AI Automation & Enterprise IT Solutions";
const metaDescription =
  "Nexari Labs delivers premium AI automation and enterprise IT solutions for Fortune 500 organizations. Strategy, systems integration, and intelligent operations.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  metadataBase: new URL("https://agentic-eb6712aa.vercel.app"),
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: "https://agentic-eb6712aa.vercel.app",
    siteName: "Nexari Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "page-shell min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased transition-colors duration-500",
          spaceGrotesk.variable,
          manrope.variable,
        )}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
