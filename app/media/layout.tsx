import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Photos & Videos",
  description: "View photos and videos of THEOSIS live performances, studio sessions, and behind-the-scenes content.",
  alternates: {
    canonical: `${siteConfig.url}/media`,
  },
  openGraph: {
    title: "Media Gallery - THEOSIS",
    description: "Photos and videos from THEOSIS performances and studio sessions",
    url: `${siteConfig.url}/media`,
  },
};

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
