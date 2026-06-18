import { siteConfig } from "@/config/site";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Karan Malakar",
  url: siteConfig.url,
  jobTitle: "Student Entrepreneur, CEO & Co-Founder",
  address: {
    "@type": "PostalAddress",
    addressRegion: siteConfig.region,
    addressCountry: "IN"
  },
  affiliation: {
    "@type": "Organization",
    name: siteConfig.ecosystem
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Royal Global University"
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Technology businesses",
    "Founder-led ecosystems",
    "Northeast India",
    siteConfig.ecosystem
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en-IN"
};
