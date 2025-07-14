export default function EventsPageSkeleton() {
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh] animate-pulse">
      {/* Skeleton for H1 heading */}
      <div className="w-[220px] h-12 bg-gray-700 rounded mb-8"></div>

      {/* Skeleton for grid of event cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col bg-gray-800 rounded-lg overflow-hidden"
          >
            {/* Image placeholder */}
            <div className="w-full h-48 bg-gray-700 rounded-t-lg"></div>

            {/* Text placeholders */}
            <div className="p-4 flex flex-col gap-3">
              <div className="h-6 bg-gray-700 rounded w-3/4"></div>{" "}
              {/* Title */}
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>{" "}
              {/* Sub-title/organizer */}
              <div className="h-4 bg-gray-700 rounded w-1/3"></div> {/* Date */}
              <div className="h-8 bg-gray-700 rounded w-full mt-4"></div>{" "}
              {/* Button */}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
