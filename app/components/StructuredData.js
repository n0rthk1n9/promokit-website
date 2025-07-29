export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PromoKit",
    "description": "Your essential companion for managing and sharing App Store Promo Codes—perfect for live events, conferences, or one-on-one demos.",
    "url": "https://promokit.app",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "iOS",
    "platform": "iPhone, iPad",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "author": {
      "@type": "Organization",
      "name": "PromoKit Team",
      "url": "https://promokit.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PromoKit",
      "url": "https://promokit.app"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://promokit.app/images/app-icon.webp",
      "width": 1024,
      "height": 1024
    },
    "screenshot": {
      "@type": "ImageObject",
      "url": "https://promokit.app/images/app-screenshot.png",
      "width": 320,
      "height": 600
    },
    "featureList": [
      "Effortlessly view and manage all your promo codes",
      "Instantly copy a code or deep link to share with a tap",
      "See which codes are used and how many are still valid",
      "Built-in dark mode for low-light environments",
      "VoiceOver support for full accessibility"
    ],
    "keywords": "promo codes, app store, ios, iphone, ipad, developer tools, app marketing",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 