import Image from "next/image";
import {
  ADDRESS_COUNTRY,
  ADDRESS_LOCALITY,
  FULL_ADDRESS,
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
        "Narcotics Anonymous (NA) is a nonprofit fellowship of men and women for whom drugs had become a major problem. The only requirement for membership is a desire to stop using. NA Croatia organizes regular meetings in Zagreb.",
    },
    ...MEETINGS.map((meeting) => ({
      "@type": "Event",
      "@id": `${SITE_URL}/#meeting-${meeting.id}`,
      name: `NA Meeting — ${meeting.day} (${meeting.language})`,
      description: `Narcotics Anonymous recovery meeting. ${meeting.description}.`,
      eventSchedule: {
        "@type": "Schedule",
        byDay: `https://schema.org/${meeting.day}`,
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
            alt="Narcotics Anonymous logo"
            width={300}
            height={63}
            priority
            className="h-auto w-56 sm:w-72"
          />
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Narcotics Anonymous Croatia
          </h1>
          <p className="max-w-2xl text-base text-white/90 sm:text-lg">
            Recovery meetings for men and women in Zagreb. The only
            requirement for membership is a desire to stop using.
          </p>
          <div
            role="status"
            className="rounded-full border border-white/70 bg-na-dark/20 px-4 py-2 text-sm font-medium text-white"
          >
            🚧 Our new website is currently under construction — meeting
            information below is up to date.
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
            What is Narcotics Anonymous?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-na-dark">
            Narcotics Anonymous is a nonprofit fellowship or society of men
            and women for whom drugs had become a major problem. We are
            recovering addicts who meet regularly to help each other stay
            clean. The only requirement for membership is a desire to stop
            using. NA Croatia organizes meetings in Zagreb where members can
            meet regularly to support one another in recovery.
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
              Meeting Schedule
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
                      Join on Microsoft Teams
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
            Meeting Location
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
              Open in Google Maps
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-na-dark py-8 text-center text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4">
          <p className="font-semibold">{SITE_NAME}</p>
          <p className="text-sm text-white/80">
            Our new website is currently under construction.
          </p>
          <p className="text-sm text-white/60">
            &copy; {currentYear} {SITE_NAME}
          </p>
        </div>
      </footer>
    </>
  );
}
