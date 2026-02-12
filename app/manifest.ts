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
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
