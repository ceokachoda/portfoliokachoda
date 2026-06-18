import { siteConfig } from "@/config/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WeDrip Ecosystem",
  url: "https://wedrip.xyz",
  logo: "https://wedrip.xyz/logo.png",
  founder: {
    "@type": "Person",
    name: "Karan Malakar"
  },
  brand: [
    { "@type": "Brand", name: "WeDrip OS", description: "Operating System" },
    { "@type": "Brand", name: "FlowCOS", description: "Operating system" },
    { "@type": "Brand", name: "FyneStudy", description: "Coaching OS" },
    { "@type": "Brand", name: "SUHASHI POS", description: "FlowCOS product" },
    { "@type": "Brand", name: "Northeast Home Rentals", alternateName: "NEHR", description: "Housing technology initiative" },
    { "@type": "Brand", name: "Kaizen Cafe", description: "Hospitality venture" }
  ]
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Karan Malakar",
  url: siteConfig.url,
  jobTitle: "Founder, CEO & Product Builder",
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shillong",
    addressRegion: "Meghalaya",
    addressCountry: "IN"
  },
  worksFor: {
    "@type": "Organization",
    name: "WeDrip Ecosystem"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Royal Global University"
  },
  knowsAbout: [
    "Product Building",
    "Startup Ecosystems",
    "Artificial Intelligence",
    "Frontend Engineering",
    "WeDrip",
    "FyneStudy",
    "FlowCOS"
  ],
  sameAs: [
    "https://github.com/ceokachoda",
    "https://www.linkedin.com/in/karan-malakar-16b213401"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: "WeDrip Ecosystem"
  }
};
