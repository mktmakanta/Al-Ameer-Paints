import { WHY_CARDS, STATS } from "@/lib/siteData";

export default function WhyBetterSection() {
  return (
    <section className="w-full pt-20 pb-14 bg-gray-100 swirl-bg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">WHY WE ARE BETTER</span>
          <h2 className="section-heading text-4xl md:text-5xl mt-3">
            Engineered for Demanding Environments
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            We combine advanced coating technology with deep local expertise to
            deliver paints that perform beautifully and endure harsh climates.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CARDS.map((card) => (
            <div
              key={card.number}
              className="bg-gray-200 rounded-sm p-8 flex flex-col"
            >
              <span className="text-7xl font-bold text-gray-300 leading-none">
                {card.number}
              </span>
              <h3 className="font-bold text-gray-900 text-lg mt-6 leading-tight">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-gray-300">
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="text-green-700 font-bold text-2xl md:text-5xl">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm mt-1 md:mt-2 whitespace-pre-line leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
