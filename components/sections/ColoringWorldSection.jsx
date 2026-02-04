export default function ColoringWorldSection() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* Left — Interior Photo */}
      <div className="md:w-1/2 w-full" style={{ minHeight: "460px" }}>
        {/* Replace src with your green-wall interior room photo */}
        <img
          src="/images/quote.jpeg"
          alt="Vibrant green interior room"
          className="w-full h-full object-cover"
          style={{ minHeight: "460px" }}
        />
      </div>

      {/* Right — Content on light gray */}
      <div className="md:w-1/2 w-full bg-gray-100 flex flex-col justify-center px-10 md:px-16 py-16">
        <h2 className="section-heading text-4xl md:text-5xl leading-tight max-w-lg">
          Coloring your world with safety, quality, and lasting beauty.
        </h2>
        <p className="text-gray-500 text-base mt-6 leading-relaxed max-w-md">
          At Al Ameer, we ensure every product meets the highest standards of
          quality and safety. Our paints are designed to bring vibrant,
          long-lasting beauty to your spaces.
        </p>
        <a
          href="/products"
          className="btn-green inline-block mt-8 px-8 py-3 rounded text-base w-fit"
        >
          Explore Samples
        </a>
      </div>
    </section>
  );
}
