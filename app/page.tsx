import Image from "next/image";
import {
  ADDRESS_COUNTRY,
  ADDRESS_LOCALITY,
  FULL_ADDRESS,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GOOGLE_MAPS_URL,
  MEETINGS,
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
  STREET_ADDRESS,
  TEAMS_URL,
  VENUE_NAME,
} from "./site";

const currentYear = new Date().getFullYear();

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}${OG_IMAGE_PATH}`,
      description:
        "Anonimni narkomani (NA) su neprofitna zajednica muškaraca i žena kojima je droga postala ozbiljan problem. Jedini uvjet za članstvo je želja za prestankom uzimanja droga. NA Hrvatska organizira redovite sastanke u Zagrebu.",
    },
    ...MEETINGS.map((meeting) => ({
      "@type": "Event",
      "@id": `${SITE_URL}/#meeting-${meeting.id}`,
      name: `NA sastanak — ${meeting.day} (${meeting.language})`,
      description: `Sastanak oporavka Anonimnih narkomana. ${meeting.description}.`,
      eventSchedule: {
        "@type": "Schedule",
        byDay: `https://schema.org/${meeting.schemaDay}`,
        startTime: meeting.isoTime,
        scheduleTimezone: "Europe/Zagreb",
        repeatFrequency: "P1W",
      },
      eventAttendanceMode:
        meeting.format === "Online"
          ? "https://schema.org/OnlineEventAttendanceMode"
          : "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      organizer: { "@id": `${SITE_URL}/#organization` },
      location:
        meeting.format === "Online"
          ? {
              "@type": "VirtualLocation",
              url: meeting.href,
              name: "Microsoft Teams",
            }
          : {
              "@type": "Place",
              name: VENUE_NAME,
              address: {
                "@type": "PostalAddress",
                streetAddress: STREET_ADDRESS,
                addressLocality: ADDRESS_LOCALITY,
                addressCountry: ADDRESS_COUNTRY,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: GEO_LATITUDE,
                longitude: GEO_LONGITUDE,
              },
            },
    })),
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="bg-na-green">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-10 text-center sm:py-14">
          <Image
            src="/na/White-NA-Logo-Masthead-300x63.webp"
            alt="Logo Anonimnih narkomana"
            width={300}
            height={63}
            priority
            className="h-auto w-56 sm:w-72"
          />
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Anonimni narkomani Hrvatska
          </h1>
          <p className="max-w-2xl text-base text-white/90 sm:text-lg">
            Sastanci oporavka za muškarce i žene u Zagrebu. Jedini uvjet za
            članstvo je želja za prestankom uzimanja droga.
          </p>
          <div
            role="status"
            className="rounded-full border border-white/70 bg-na-dark/20 px-4 py-2 text-sm font-medium text-white"
          >
            🚧 Naša nova web stranica je u izradi — informacije o sastancima
            u nastavku su ažurne.
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section
          aria-labelledby="about-heading"
          className="mx-auto max-w-5xl px-4 py-12"
        >
          <h2
            id="about-heading"
            className="text-2xl font-semibold text-na-dark"
          >
            Što su Anonimni narkomani?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-na-dark">
            Anonimni narkomani su neprofitna zajednica muškaraca i žena
            kojima je droga postala ozbiljan problem. Mi smo ovisnici u
            oporavku koji se redovito sastaju kako bi pomogli jedni drugima
            ostati čisti. Jedini uvjet za članstvo je želja za prestankom
            uzimanja droga. NA Hrvatska organizira sastanke u Zagrebu na
            kojima se članovi mogu redovito sastajati i podržavati jedni
            druge u oporavku.
          </p>
        </section>

        <section
          aria-labelledby="meetings-heading"
          className="bg-na-green-light/30 py-12"
        >
          <div className="mx-auto max-w-5xl px-4">
            <h2
              id="meetings-heading"
              className="text-2xl font-semibold text-na-dark"
            >
              Raspored sastanaka
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {MEETINGS.map((meeting) => (
                <div
                  key={meeting.id}
                  className="flex flex-col justify-between rounded-xl bg-white p-5 shadow-sm ring-1 ring-na-grey/20"
                >
                  <div>
                    <p className="text-lg font-semibold text-na-dark">
                      {meeting.day}
                    </p>
                    <p className="text-2xl font-bold text-na-green">
                      {meeting.time}
                    </p>
                    <p className="mt-2 text-sm text-na-grey">
                      {meeting.language} &middot; {meeting.format}
                    </p>
                    <p className="mt-1 text-sm text-na-grey">
                      {meeting.description}
                    </p>
                  </div>
                  {meeting.href && (
                    <a
                      href={meeting.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center rounded-lg bg-na-green px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-na-grey"
                    >
                      Pridruži se putem Microsoft Teamsa
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="location-heading"
          className="mx-auto max-w-5xl px-4 py-12"
        >
          <h2
            id="location-heading"
            className="text-2xl font-semibold text-na-dark"
          >
            Lokacija sastanaka
          </h2>
          <div className="mt-4 flex flex-col items-start gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-na-grey/20 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-na-dark">
                {VENUE_NAME}
              </p>
              <p className="text-na-grey">{FULL_ADDRESS}</p>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-na-green px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-na-grey"
            >
              Otvori u Google kartama
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-na-dark py-8 text-center text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4">
          <p className="font-semibold">{SITE_NAME}</p>
          <p className="text-sm text-white/80">
            Naša nova web stranica je trenutno u izradi.
          </p>
          <p className="text-sm text-white/60">
            &copy; {currentYear} {SITE_NAME}
          </p>
        </div>
      </footer>
    </>
  );
}
