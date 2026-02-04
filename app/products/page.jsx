import ProductsSection from "@/components/sections/ProductsSection";
import ColorCollectionSection from "@/components/sections/ColorCollectionSection";
import CoatingsPerformSection from "@/components/sections/CoatingsPerformSection";
import ColorsSection from "@/components/sections/ColorsSection";
import ProductLineup from "@/components/sections/ProductLineUp";

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Page Hero Banner */}
        <div
          className="relative w-full flex items-center justify-center"
          style={{
            height: "340px",
            backgroundImage: "url(/images/products-page.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-white font-bold text-5xl md:text-6xl">
              Our Products
            </h1>
            <p className="text-white/70 mt-3 text-lg">
              Solutions for every surface and environment.
            </p>
          </div>
        </div>
        <ProductsSection />
        {/* <ColorCollectionSection /> */}
        <ProductLineup />
        <ColorsSection />
        <CoatingsPerformSection />
      </main>
    </div>
  );
}
