import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexoraaistore.vercel.app";

  const products = [
    "hulk",
    "Ai Talking",
    "kids",
    "Ai Health Talking",
    "Cartoon story",
    "AI Skeleton",
    "Hindi Fact",
    "Cat Story",
    "USA Luxury lifestyle",
    "Ai Baby Dancing",
    "All In One",
    "Bike Raider",
    "Korean Girls",
    "Doraemon Reels",
    "hot Model",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...products.map((slug) => ({
      url: `${baseUrl}/product/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}