import { ExternalLink, Phone, Mail } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/ContactForm";
import { SITE, CONTACT } from "@/lib/siteData";

function ContactSocialIcons() {
  return (
    <div className="flex gap-2 mt-6">
      {[0, 1, 2, 3].map((i) => (
        <a
          key={i}
          href="#"
          aria-label="Social link"
          className="w-9 h-9 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          {/* Replace each with actual social icon */}
        </a>
      ))}
    </div>
  );
}

export default function ContactSection() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <span className="section-label">GET IN TOUCH</span>

          <div className="flex flex-col md:flex-row gap-10 mt-6 border border-gray-200 rounded-sm p-8 md:p-10">
            {/* Left — Info */}
            <div className="md:w-5/12 w-full">
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                At Al Ameer, we ensure every product meets the highest standards
                of quality and safety. Our paints are designed to bring vibrant,
                long-lasting beauty to your spaces.
              </p>

              {CONTACT.addresses.map((addr, i) => (
                <div key={i} className="mt-6">
                  <p className="text-gray-800 font-semibold text-sm">
                    {addr.line1}
                  </p>
                  <p className="text-gray-800 font-semibold text-sm">
                    {addr.line2}
                  </p>
                  <p className="text-gray-800 font-semibold text-sm">
                    {addr.line3}
                  </p>
                </div>
              ))}

              <div className="mt-6 flex items-center gap-2">
                <Phone size={16} className="text-gray-500" />
                <p className="text-gray-800 font-semibold text-sm">
                  {SITE.phone}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <Mail size={16} className="text-gray-500" />
                <a
                  href={`mailto:${SITE.infoEmail}`}
                  className="text-gray-800 font-semibold text-sm hover:text-green-700 transition-colors"
                >
                  {SITE.infoEmail}
                </a>
                <ExternalLink size={14} className="text-green-700" />
              </div>

              <ContactSocialIcons />
            </div>

            {/* Right — Form */}
            <div className="md:w-7/12 w-full">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Full-width Map */}
        <div className="w-full" style={{ height: "420px" }}>
          <img
            src={CONTACT.mapImage}
            alt="Location map"
            className="w-full h-full object-cover"
          />
        </div>
      </main>
    </div>
  );
}
