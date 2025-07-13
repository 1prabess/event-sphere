import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { EventSphereEvents } from "@/lib/types";
import React from "react";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventSphereEvents[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city === "all" ? (
          "All Events"
        ) : (
          <>
            Events in <span className="capitalize">{city}</span>
          </>
        )}
      </H1>

      <div className="mt-8">
        <EventsList events={events} />
      </div>
    </main>
  );
}
