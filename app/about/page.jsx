import { ABOUT, WHY_CARDS, STATS } from "@/lib/siteData";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Page Hero Banner */}
        <div
          className="relative w-full flex items-center justify-center"
          style={{
            height: "340px",
            backgroundImage: `url(${ABOUT.imagePage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-white font-bold text-5xl md:text-6xl">
              About Us
            </h1>
            <p className="text-white/70 mt-3 text-lg">
              Manufacturing Excellence. Proven Performance.
            </p>
          </div>
        </div>
        {/* About Content */}
        {/* <section className="w-full">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-5/12 w-full" style={{ minHeight: "480px" }}>
              <img
                src={ABOUT.image}
                alt="Al Ameer manufacturing"
                className="w-full h-full object-cover"
                style={{ minHeight: "480px" }}
              />
            </div>

            <div className="md:w-7/12 w-full flex flex-col justify-center px-8 md:px-14 py-14 bg-white">
              <span className="section-label mb-4">ABOUT AL AMEER</span>
              <h2 className="section-heading text-4xl md:text-5xl whitespace-pre-line">
                {ABOUT.heading}
              </h2>
              {ABOUT.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-gray-500 text-base leading-relaxed mt-4 max-w-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section> */}
        {/* Expanded About Content */}
        <section className="w-full bg-white py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-20">
            {/* Headline + Intro */}
            <div>
              <h2 className="section-heading text-4xl md:text-5xl mb-6">
                Built on Quality. Driven by Performance.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                Al Ameer Paints is a paint and coatings manufacturer committed
                to delivering durable, high-performance solutions for
                residential, commercial, and industrial applications. We develop
                and produce a wide range of coatings designed to perform
                reliably in demanding environments, combining technical
                expertise with a deep understanding of local construction needs.
              </p>
            </div>

            {/* Our Journey */}
            <div>
              <h3 className="section-subheading mb-4 text-green-700 font-medium">
                Our Journey
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl">
                Al Ameer was established with a clear focus: to produce paints
                that meet real-world performance demands. From our early
                operations to our growing production capacity today, we have
                remained committed to consistency, durability, and continuous
                improvement. Our growth has been driven by trust from
                contractors, developers, and professionals who rely on our
                coatings to perform as expected.
              </p>
            </div>

            {/* What We Do */}
            <div>
              <h3 className="section-subheading mb-4 text-green-700 font-medium">
                What We Do
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl">
                We manufacture a broad range of paints and coatings, including
                interior and exterior paints, primers and sealers, industrial
                coatings, and specialty finishes. Every product is developed
                with attention to surface compatibility, adhesion strength,
                coverage, and long-term performance.
              </p>
            </div>

            {/* Our Approach */}
            <div>
              <h3 className="section-subheading mb-4 text-green-700 font-medium">
                Our Approach to Quality
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl">
                Quality at Al Ameer begins at formulation and continues through
                production, testing, and application. We apply controlled
                manufacturing processes to ensure consistency across batches and
                dependable results on site. Our coatings are designed to
                withstand heat, moisture, and everyday wear, reducing
                maintenance and extending surface life.
              </p>
            </div>

            {/* Built for Environment */}
            <div>
              <h3 className="section-subheading mb-4 text-green-700 font-medium">
                Built for Our Environment
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl">
                We understand the challenges presented by local climate
                conditions and construction methods. Our products are developed
                to perform under intense sunlight, humidity, and heavy usage,
                making them suitable for a wide range of projects across the
                region.
              </p>
            </div>

            {/* Who We Serve */}
            <div>
              <h3 className="section-subheading mb- text-green-700 font-medium">
                Who We Serve
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl">
                Our coatings are trusted by homeowners, contractors, developers,
                and industrial operators across residential estates, commercial
                buildings, factories, and public institutions.
              </p>
            </div>

            {/* Closing Line */}
            <div className="pt-10 border-t border-gray-200">
              <p className="text-gray-900 text-lg font-medium max-w-3xl">
                At Al Ameer, we don’t just manufacture paint - we deliver
                coating solutions designed to last.
              </p>
            </div>
          </div>
        </section>{" "}
        {/* Why Cards */}
        <section className="w-full py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="section-label">WHY CHOOSE AL AMEER</span>
              <h2 className="section-heading text-4xl mt-3">
                What Sets Us Apart
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_CARDS.map((card) => (
                <div key={card.number} className="bg-gray-200 rounded-sm p-8">
                  <span className="text-7xl font-bold text-gray-300 leading-none block">
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

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-gray-300">
              {STATS.map((stat) => (
                <div key={stat.value} className="text-center">
                  <p className="text-green-700 font-bold text-4xl md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm mt-2 whitespace-pre-line leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ================= CTA ================= */}
        <section className="w-full bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
              Ready to Specify Al Ameer Paints?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore our product range or speak with our team to find the right
              coating solution for your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="px-8 py-4 bg-green-700 text-white font-medium rounded-sm hover:bg-green-800 transition"
              >
                View Products
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-gray-500 text-gray-200 font-medium rounded-sm hover:bg-white hover:text-gray-900 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
