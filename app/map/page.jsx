import React from "react";

const page = () => {
  return (
    <div>
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-6 max-w-2xl">
            <h2 className="text-3xl font-semibold text-gray-900">
              Our Location
            </h2>
            <p className="text-gray-500 mt-2">
              Visit our office or production facility for enquiries and
              consultations.
            </p>
          </div>

          {/* Google Map */}
          <div className="w-full h-[400px] rounded-sm overflow-hidden border">
            <iframe
              src="https://www.google.com/maps?q=sqfCWw82zdcyaGr39&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Open in Maps */}
          <div className="mt-4">
            <a
              href="https://maps.app.goo.gl/sqfCWw82zdcyaGr39"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-700 font-medium hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
