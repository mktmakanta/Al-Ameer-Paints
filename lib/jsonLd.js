// lib/jsonLd.js

export function generateBusinessJsonLd(business) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    url: business.website,
    logo: "/favicon-32x32.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone,
      contactType: "customer service",
      email: business.email,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    sameAs: business.socialLinks,
    openingHours: business.openingHours,
    makesOffer: business.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  };
}
