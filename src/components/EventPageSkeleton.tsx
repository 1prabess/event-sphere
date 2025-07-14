export default function EventPageSkeleton() {
  return (
    <main className="text-white min-h-screen px-4 py-10 max-w-6xl mx-auto animate-pulse">
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Left: Image placeholder */}
        <div className="flex-shrink-0">
          <div className="w-[320px] h-[200px] bg-gray-700  "></div>
        </div>

        {/* Right: Details placeholders */}
        <div className="flex flex-col flex-grow space-y-4">
          <div className="w-32 h-4 bg-gray-700 rounded"></div> {/* date */}
          <div className="w-full h-10 bg-gray-700 rounded"></div>{" "}
          {/* event name */}
          <div className="w-48 h-4 bg-gray-700 rounded italic"></div>{" "}
          {/* organizer */}
          <div className="w-40 h-10 bg-gray-700 rounded mt-6"></div>{" "}
          {/* button */}
        </div>
      </section>

      <section className="max-w-3xl mx-auto space-y-10">
        <div>
          <div className="w-48 h-8 bg-gray-700 rounded mb-4"></div>{" "}
          {/* About heading */}
          <div className="space-y-2">
            <div className="w-full h-4 bg-gray-700 rounded"></div>
            <div className="w-full h-4 bg-gray-700 rounded"></div>
            <div className="w-3/4 h-4 bg-gray-700 rounded"></div>
          </div>
        </div>

        <div>
          <div className="w-36 h-8 bg-gray-700 rounded mb-4"></div>{" "}
          {/* Location heading */}
          <div className="w-2/3 h-4 bg-gray-700 rounded"></div>
        </div>
      </section>
    </main>
  );
}
