import { COATINGS_PERFORM } from "@/lib/siteData";

export default function CoatingsPerformSection() {
  const row1 = COATINGS_PERFORM.slice(0, 4);
  const row2 = COATINGS_PERFORM.slice(4, 6);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Label */}
        <div className="text-center mb-10">
          <span className="section-label">WHERE OUR COATINGS PERFORM</span>
        </div>

        {/* Row 1 — 4 cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {row1.map((item) => (
            <article
              key={item.title}
              className="bg-gray-50 rounded-sm overflow-hidden"
            >
              <div className="w-full" style={{ aspectRatio: "4/3" }}>
                <img
                  src={item.image}
                  alt={item.title.replace("\\n", " ")}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 px-4 py-4 text-center">
                <h3 className="font-bold text-gray-900 text-base whitespace-pre-line leading-tight">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Row 2 — 2 cards, centered */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mt-4 max-w-2xl mx-auto">
          {row2.map((item) => (
            <article
              key={item.title}
              className="bg-gray-50 rounded-sm overflow-hidden"
            >
              <div className="w-full" style={{ aspectRatio: "4/3" }}>
                <img
                  src={item.image}
                  alt={item.title.replace("\\n", " ")}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 px-4 py-4 text-center">
                <h3 className="font-bold text-gray-900 text-base whitespace-pre-line leading-tight">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
