import { MetadataRoute } from "next";

export default async function sitempap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://vinddrone.vercel.app/`,
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
