import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.revenuealignsolutions.com/"),
  keywords: [
    "Revenue  Align Solutions",
    "Medical Billing Services",
    "Healthcare RCM Solutions",
    "Revenue Cycle Management USA",
    "Outsource Medical Billing Company",
    "RCM Experts",
    "Claim Denial Management",
    "Credentialing Services USA",
    "Medical Billing Company for Clinics",
    "US Healthcare Billing Services",
  ],
  title: {
    default:
      "Revenue  Align Solutions - Expert Medical Billing & RCM Services USA",
    template: "%s | Revenue  Align Solutions",
  },
  description:
    "Revenue  Align Solutions offers professional medical billing and revenue cycle management (RCM) services across the USA. Streamline billing, reduce denials, and maximize collections with our expert team.",
  author: "Revenue  Align Solutions",

  openGraph: {
    title: "Revenue  Align Solutions - Your Trusted Medical Billing Partner",
    description:
      "Get top-tier medical billing and RCM services from Revenue  Align Solutions. Designed for physicians, clinics, and healthcare providers across the USA.",
    url: "https://www.revenuealignsolutions.com",
    images: [
      {
        url: "https://www.revenuealignsolutions.com/Images/drhero.webp",
        width: 1200,
        height: 630,
        alt: "Revenue  Align Solutions - Medical Billing Services Banner",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@Revenue align",
    title: "Revenue  Align Solutions - Boost Revenue with Expert RCM Services",
    description:
      "Boost your practice revenue with Revenue  Align Solutions. Expert RCM and medical billing services tailored for healthcare providers in the USA.",
    images: ["https://www.revenuealignsolutions.com/Images/drhero.webp"],
  },

  alternates: {
    canonical: "https://www.revenuealignsolutions.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
