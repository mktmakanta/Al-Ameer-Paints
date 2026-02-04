import { PRODUCTS } from "@/lib/siteData";

export default function ProductsSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Label */}
        <span className="section-label">SOLUTIONS FOR EVERY SURFACE</span>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {PRODUCTS.map((product) => (
            <article key={product.title} className="flex flex-col">
              <div
                className="w-full rounded-sm overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-bold text-gray-900 text-lg mt-4">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed flex-1">
                {product.desc}
              </p>

              <a
                href="/products"
                className="btn-green inline-block mt-4 px-5 py-2 rounded text-sm w-fit"
              >
                View Samples
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
