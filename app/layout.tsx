import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "./site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Narcotics Anonymous (NA) Croatia — a free fellowship for men and women recovering from drug addiction. Find NA meeting times and locations in Zagreb: in-person and online recovery meetings, every week.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — NA Meetings in Zagreb`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "Narcotics Anonymous",
    "NA",
    "NA Croatia",
    "NA Zagreb",
    "drug addiction recovery",
    "recovery meetings",
    "drug addiction help",
    "12 step program",
    "sastanci NA Zagreb",
    "anonimni narkomani",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} — NA Meetings in Zagreb`,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en",
    type: "website",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Narcotics Anonymous logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — NA Meetings in Zagreb`,
    description,
    images: [OG_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
