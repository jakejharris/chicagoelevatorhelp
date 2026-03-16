import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chicago Elevator Rights — Know Your Tenant Rights Under the RLTO",
  description:
    "A free resource for Chicago tenants dealing with broken elevators. Learn your rights under the RLTO, use our email template, and find legal resources.",
  openGraph: {
    title: "Chicago Elevator Rights — Know Your Tenant Rights Under the RLTO",
    description:
      "A free resource for Chicago tenants dealing with broken elevators. Learn your rights under the RLTO, use our email template, and find legal resources.",
    type: "website",
    locale: "en_US",
    siteName: "Chicago Elevator Rights",
  },
  twitter: {
    card: "summary",
    title: "Chicago Elevator Rights",
    description:
      "A free resource for Chicago tenants dealing with broken elevators.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#9878;</text></svg>"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
