import { EventSphereEvents } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type EventCardProps = {
  event: EventSphereEvents;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/event/${event.slug}`}>
      <section className="w-full hover:scale-105 transition h-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative state-effects">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />

        <div className="flex flex-col flex-1 justify-center items-center p-4">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic mt-2 text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>

        <section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}
