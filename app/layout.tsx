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
  "Anonimni narkomani (NA) Hrvatska — besplatna zajednica muškaraca i žena u oporavku od ovisnosti o drogama. Pronađite termine i lokacije NA sastanaka u Zagrebu: sastanci oporavka uživo i online, svaki tjedan.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — NA sastanci u Zagrebu`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "Anonimni narkomani",
    "NA",
    "Anonimni narkomani Hrvatska",
    "Anonimni narkomani Zagreb",
    "sastanci NA Zagreb",
    "oporavak od ovisnosti",
    "ovisnost o drogama pomoć",
    "pomoć ovisnicima",
    "12 koraka",
    "Narcotics Anonymous Croatia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} — NA sastanci u Zagrebu`,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "hr_HR",
    type: "website",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Logo Anonimnih narkomana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — NA sastanci u Zagrebu`,
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
      lang="hr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
