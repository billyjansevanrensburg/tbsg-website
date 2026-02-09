interface OrganizationJsonLdProps {
  type?: "Organization" | "LocalBusiness";
}

export function OrganizationJsonLd({ type = "Organization" }: OrganizationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    name: "The Bridging Solutions Group",
    alternateName: "TBSG",
    url: "https://tbsg.co.za",
    logo: "https://tbsg.co.za/logo.png",
    description:
      "South Africa's most transparent property finance partner. Bridging finance and home loan origination.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pretoria",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27-12-004-2868",
      contactType: "customer service",
      email: "info@tbsg.co.za",
      availableLanguage: ["English", "Afrikaans"],
    },
    sameAs: [
      // Add social media URLs when available
    ],
    foundingDate: "2016",
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    serviceType: ["Bridging Finance", "Home Loans", "Bond Origination", "Commercial Property Finance"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "The Bridging Solutions Group",
      url: "https://tbsg.co.za",
    },
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BreadcrumbJsonLdProps {
  items: Array<{ name: string; url: string }>;
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
