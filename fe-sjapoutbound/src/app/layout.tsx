import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SAJP - Premium Agricultural Products from Indonesia",
    template: "%s | SAJP",
  },
  description:
    "Leading agricultural export company specializing in premium spices, fresh produce, and agricultural products from Indonesia. Quality guaranteed, worldwide shipping.",

  openGraph: {
    type: "website",
    url: "https://sajp.com",
    title: "SAJP - Premium Agricultural Products from Indonesia",
    description:
      "Leading agricultural export company specializing in premium spices, fresh produce, and agricultural products from Indonesia.",
    siteName: "SAJP",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
