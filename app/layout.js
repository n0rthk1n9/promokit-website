import localFont from "next/font/local";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL('https://promokit.app'),
  title: {
    default: "PromoKit - Promote Smarter. Share Faster.",
    template: "%s | PromoKit"
  },
  description: "Your essential companion for managing and sharing App Store Promo Codes—perfect for live events, conferences, or one-on-one demos. Download PromoKit for iPhone and iPad.",
  keywords: [
    "promo codes",
    "app store promo codes", 
    "ios promo codes",
    "iphone promo codes",
    "ipad promo codes",
    "developer tools",
    "app marketing",
    "app store connect",
    "promo code management",
    "mobile app marketing",
    "ios developer tools",
    "app store optimization",
    "promo code sharing",
    "app demo tools",
    "conference tools",
    "live event tools"
  ],
  authors: [{ name: "PromoKit Team", url: "https://promokit.app" }],
  creator: "PromoKit",
  publisher: "PromoKit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://promokit.app',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://promokit.app",
    siteName: "PromoKit",
    title: "PromoKit - Promote Smarter. Share Faster.",
    description: "Your essential companion for managing and sharing App Store Promo Codes—perfect for live events, conferences, or one-on-one demos.",
    images: [
      {
        url: "/images/social-preview.png",
        width: 1200,
        height: 630,
        alt: "PromoKit - Promote Smarter. Share Faster.",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@promokit",
    creator: "@promokit",
    title: "PromoKit - Promote Smarter. Share Faster.",
    description: "Your essential companion for managing and sharing App Store Promo Codes—perfect for live events, conferences, or one-on-one demos.",
    images: ["/images/social-preview.png"],
  },
  icons: {
    icon: [
      { url: "/images/app-icon.webp", type: "image/webp" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    apple: "/images/app-icon.webp",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  category: "developer tools",
  classification: "mobile app",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "PromoKit",
    "application-name": "PromoKit",
    "msapplication-TileColor": "#3b82f6",
    "theme-color": "#3b82f6",
    // Apple Messages specific meta tags
    "apple-itunes-app": "app-id=YOUR_APP_ID",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    // Additional meta tags for better iMessage preview
    "twitter:image:alt": "PromoKit - Promote Smarter. Share Faster.",
    "og:image:alt": "PromoKit - Promote Smarter. Share Faster.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        {/* Additional meta tags for iMessage compatibility */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="PromoKit" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="PromoKit" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
