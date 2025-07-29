import localFont from "next/font/local";
import "./globals.css";

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
  title: "PromoKit - Promote Smarter. Share Faster.",
  description: "Your essential companion for managing and sharing App Store Promo Codes—perfect for live events, conferences, or one-on-one demos.",
  keywords: ["promo codes", "app store", "ios", "iphone", "ipad", "developer tools", "app marketing"],
  authors: [{ name: "PromoKit Team" }],
  creator: "PromoKit",
  publisher: "PromoKit",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://promokit.app",
    siteName: "PromoKit",
    title: "PromoKit - Promote Smarter. Share Faster.",
    description: "Your essential companion for managing and sharing App Store Promo Codes—perfect for live events, conferences, or one-on-one demos.",
    images: [
      {
        url: "/images/app-icon.webp",
        width: 1024,
        height: 1024,
        alt: "PromoKit App Icon",
      },
      {
        url: "/images/social-preview.png",
        width: 1200,
        height: 630,
        alt: "PromoKit - Promote Smarter. Share Faster.",
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
    icon: "/images/app-icon.webp",
    apple: "/images/app-icon.webp",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
