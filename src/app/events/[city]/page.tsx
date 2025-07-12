import H1 from "@/components/H1";
import React from "react";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

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
    </main>
  );
}
