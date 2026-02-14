import Image from "next/image";
import { ABOUT } from "@/lib/siteData";

export default function AboutSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left — Image */}
        <div className="relative md:w-5/12 w-full min-h-[480px]">
          <Image
            src={ABOUT.image}
            alt="Al Ameer manufacturing facility"
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover"
          />
        </div>

        {/* Right — Content */}
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

          <a
            href="/about"
            className="btn-green inline-block mt-8 px-6 md:px-8 py-3 rounded-full text-sm md:text-base w-fit"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
