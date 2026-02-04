import { PRODUCTS } from "@/lib/siteData";

export default function PanoramaSection() {
  return (
    <section className="w-full bg-white">
      <div className="w-full bg-gray-200" style={{ height: "400px" }}>
        <img
          src="/images/panorama.png"
          alt="Paint product range"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
