export default function ProductLineup() {
  const sizes = ["1L", "4L", "18L", "20L"];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Available Sizes & Packaging
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our products are supplied in multiple sizes to support projects of
            every scale.
          </p>

          {/* Sizes Display */}
          <div className="flex items-center justify-center gap-3 text-gray-800">
            {sizes.map((size, index) => (
              <span key={size} className="inline-flex items-center">
                <span className="text-xl md:text-2xl font-medium">{size}</span>
                {index < sizes.length - 1 && (
                  <span className="mx-3 text-gray-400">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Product Lineup Image */}
        <div className="w-full">
          <img
            src="/images/product-lineup.png"
            alt="AFROPAINT product lineup showing available sizes"
            className="w-full h-auto rounded-lg shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}



