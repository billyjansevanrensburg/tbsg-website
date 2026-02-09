import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tbsg.co.za";
  const currentDate = new Date().toISOString();

  // Main pages
  const mainPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/bridging-finance", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/bridging-finance/sellers", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/bridging-finance/agents", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/bridging-finance/bond-applicants", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/bridging-finance/bond-originators", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/home-loans", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/home-loans/get-preapproved", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/home-loans/apply", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/home-loans/why-use-us", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/home-loans/commercial", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tools", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/tools/bridging-calculator", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tools/affordability-calculator", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tools/repayment-calculator", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tools/refer-and-earn", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/partners", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/partners/attorneys", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/partners/agents", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return mainPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
