import Image from "next/image";
import React from "react";

type Event = {
  id: number;
  name: string;
  slug: string;
  city: string;
  location: string;
  date: string;
  organizerName: string;
  imageUrl: string;
  description: string;
};

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event: Event = await response.json();

  return (
    <main className=" text-white min-h-screen px-4 py-10 max-w-6xl mx-auto">
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Left: Event image */}
        <div className="flex-shrink-0">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={320}
            height={200}
            className=" border border-white/30 object-cover"
          />
        </div>

        {/* Right: Event details */}
        <div className="flex flex-col flex-grow">
          <time className="text-sm text-gray-400 mb-2">
            {new Date(event.date).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </time>

          <h1 className="text-4xl font-bold mb-3">{event.name}</h1>

          <p className="italic text-gray-400 mb-6">
            Organized by {event.organizerName}
          </p>

          <button className="bg-gray-700 bg-opacity-20 hover:bg-opacity-40 text-white py-2 px-6 rounded transition">
            Get tickets
          </button>
        </div>
      </section>

      <section className="max-w-3xl mx-auto space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About this event</h2>
          <p className="text-gray-300 leading-relaxed">{event.description}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <p className="text-gray-300">{event.location}</p>
        </div>
      </section>
    </main>
  );
}
