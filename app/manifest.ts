import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SBMES - الجمعية السورية للهندسة الطبية الحيوية",
    short_name: "SBMES",
    description:
      "الجمعية السورية للهندسة الطبية الحيوية - Syrian Biomedical Engineering Society",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FFFE",
    theme_color: "#1B6B6B",
    orientation: "portrait-primary",
    dir: "rtl",
    lang: "ar",
    categories: ["education", "medical", "science"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
