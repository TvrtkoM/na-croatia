// Single source of truth for site-wide constants: URL, address, schedule, and
// contact info. Reused by the page, layout metadata, sitemap, robots, and the
// inline JSON-LD structured data.

// TODO: confirm final domain
export const SITE_URL = "https://na-hrvatska.org";

export const SITE_NAME = "Narcotics Anonymous Croatia";

export const VENUE_NAME = "Crkva sv. Blaža";
export const STREET_ADDRESS = "Prilaz Gjure Deželića 64";
export const ADDRESS_LOCALITY = "Zagreb";
export const ADDRESS_COUNTRY = "HR";
export const FULL_ADDRESS = `${VENUE_NAME}, ${STREET_ADDRESS}, ${ADDRESS_LOCALITY}`;

export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${STREET_ADDRESS}, ${ADDRESS_LOCALITY}`
)}`;

export const TEAMS_URL =
  "https://teams.live.com/meet/9390459011004?p=cq5L47cb1sOWoS3Pjs";

export type Meeting = {
  id: string;
  day: string;
  time: string;
  isoTime: string; // HH:MM in 24h, for schema.org
  language: "Croatian" | "English";
  format: "In person" | "Online";
  description: string;
  href?: string;
};

export const MEETINGS: Meeting[] = [
  {
    id: "tuesday",
    day: "Tuesday",
    time: "7:00 PM",
    isoTime: "19:00",
    language: "Croatian",
    format: "In person",
    description: `In person at ${FULL_ADDRESS}`,
  },
  {
    id: "thursday",
    day: "Thursday",
    time: "7:00 PM",
    isoTime: "19:00",
    language: "English",
    format: "In person",
    description: `In person at ${FULL_ADDRESS}`,
  },
  {
    id: "saturday",
    day: "Saturday",
    time: "12:00 PM",
    isoTime: "12:00",
    language: "Croatian",
    format: "In person",
    description: `In person at ${FULL_ADDRESS}`,
  },
  {
    id: "monday",
    day: "Monday",
    time: "9:00 PM",
    isoTime: "21:00",
    language: "Croatian",
    format: "Online",
    description: "Online via Microsoft Teams",
    href: TEAMS_URL,
  },
];

export const OG_IMAGE_PATH = "/na/NA-group-logo-NAWS-2008.webp";
