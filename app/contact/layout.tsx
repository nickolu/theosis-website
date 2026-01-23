import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with THEOSIS for booking inquiries, press, and more. Based in San Diego, California.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact - THEOSIS",
    description: "Contact THEOSIS for booking, press, and inquiries",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
