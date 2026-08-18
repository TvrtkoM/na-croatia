// Single source of truth for site-wide constants: URL, address, schedule, and
// contact info. Reused by the page, layout metadata, sitemap, robots, and the
// inline JSON-LD structured data.

// TODO: confirm final domain
export const SITE_URL = "https://na-hrvatska.org";

export const SITE_NAME = "Anonimni narkomani Hrvatska";

export const VENUE_NAME = "Crkva sv. Blaža";
export const STREET_ADDRESS = "Prilaz Gjure Deželića 64";
export const ADDRESS_LOCALITY = "Zagreb";
export const ADDRESS_COUNTRY = "HR";
export const FULL_ADDRESS = `${VENUE_NAME}, ${STREET_ADDRESS}, ${ADDRESS_LOCALITY}`;

export const GEO_LATITUDE = 45.81118203165567;
export const GEO_LONGITUDE = 15.960303761922411;

export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${GEO_LATITUDE}%2C${GEO_LONGITUDE}`;

export const TEAMS_URL =
  "https://teams.live.com/meet/9390459011004?p=cq5L47cb1sOWoS3Pjs";

export type Meeting = {
  id: string;
  day: string; // Croatian display name
  schemaDay: string; // English day name for schema.org byDay
  time: string;
  isoTime: string; // HH:MM in 24h, for schema.org
  language: "Hrvatski" | "Engleski";
  format: "Uživo" | "Online";
  description: string;
  href?: string;
};

export const MEETINGS: Meeting[] = [
  {
    id: "tuesday",
    day: "Utorak",
    schemaDay: "Tuesday",
    time: "19:00",
    isoTime: "19:00",
    language: "Hrvatski",
    format: "Uživo",
    description: `Uživo — ${FULL_ADDRESS}`,
  },
  {
    id: "thursday",
    day: "Četvrtak",
    schemaDay: "Thursday",
    time: "19:00",
    isoTime: "19:00",
    language: "Engleski",
    format: "Uživo",
    description: `Uživo — ${FULL_ADDRESS}`,
  },
  {
    id: "saturday",
    day: "Subota",
    schemaDay: "Saturday",
    time: "12:00",
    isoTime: "12:00",
    language: "Hrvatski",
    format: "Uživo",
    description: `Uživo — ${FULL_ADDRESS}`,
  },
  {
    id: "monday",
    day: "Ponedjeljak",
    schemaDay: "Monday",
    time: "21:00",
    isoTime: "21:00",
    language: "Hrvatski",
    format: "Online",
    description: "Online putem Microsoft Teamsa",
    href: TEAMS_URL,
  },
];

export const OG_IMAGE_PATH = "/na/NA-group-logo-NAWS-2008.webp";
