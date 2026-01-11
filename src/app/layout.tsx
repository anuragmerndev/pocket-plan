import type { Metadata, Viewport } from "next";
import "./globals.css";

// SEO Configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://pocketplan.app"),
  title: {
    default: "PocketPlan - Can I Actually Afford This Right Now?",
    template: "%s | PocketPlan",
  },
  description:
    "Personal finance app that helps you answer 'Can I afford this?' before spending. Track bills, SIPs, budgets, and goals with clarity. Mobile-first, works offline.",
  keywords: [
    "personal finance",
    "budget app",
    "expense tracker",
    "savings goals",
    "bill tracker",
    "SIP tracker",
    "money management",
    "can I afford",
    "financial planning",
    "offline finance app",
  ],
  authors: [{ name: "PocketPlan" }],
  creator: "PocketPlan",
  publisher: "PocketPlan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pocketplan.app",
    siteName: "PocketPlan",
    title: "PocketPlan - Can I Actually Afford This Right Now?",
    description:
      "Personal finance app that helps you answer 'Can I afford this?' before spending. Track bills, SIPs, budgets, and goals with clarity.",
    images: [
      {
        url: "/images/dashboard.jpeg",
        width: 1200,
        height: 630,
        alt: "PocketPlan - Smart Personal Finance Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PocketPlan - Can I Actually Afford This Right Now?",
    description:
      "Personal finance app that helps you answer 'Can I afford this?' before spending. Track bills, SIPs, budgets, and goals with clarity.",
    images: ["/images/dashboard.jpeg"],
    creator: "@pocketplanapp",
  },
  // Icons are auto-detected from app directory (favicon.ico, icon.png, apple-icon.png)
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://pocketplan.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// Structured data for the app
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PocketPlan",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Personal finance app that helps you answer 'Can I afford this?' before spending. Track bills, SIPs, budgets, and goals with clarity.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
  featureList: [
    "Expense Tracking",
    "Bill Reminders",
    "SIP Tracking",
    "Savings Goals",
    "Can I Buy Decision Tool",
    "Offline Support",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
