import { EventSphereEvents } from "@/lib/types";
import React from "react";
import EventCard from "./EventCard";

type EventsListProps = {
  events: EventSphereEvents[];
};

export default function EventsList({ events }: EventsListProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
