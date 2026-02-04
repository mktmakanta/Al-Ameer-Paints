import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, FOOTER_QUICK_LINKS, FOOTER_COMPANY } from "@/lib/siteData";
import Link from "next/link";

function SocialIcons() {
  return (
    <div className="flex gap-2 mt-4">
      {[0, 1, 2, 3].map((i) => (
        <a
          key={i}
          href="#"
          aria-label="Social link"
          className="w-8 h-8 bg-white rounded flex items-center justify-center"
        >
          {/* Replace each with actual icon or <img /> */}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 — Logo + Description + Socials */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-start">
              <div className="w-16 h-16  flex items-center justify-center">
                <img
                  src="/images/logo-footer.png"
                  alt="Al Ameer"
                  className="h-16 w-auto"
                />
              </div>
              <span className="text-base font-bold mt-1 tracking-tight">
                AL-AMEER
              </span>
              <span className="text-xs opacity-80" style={{ fontSize: "9px" }}>
                PAINTS &amp; CHEMICAL NIG. LTD
              </span>
            </div>

            <p className="text-sm opacity-80 mt-4 leading-relaxed max-w-xs">
              At Al Ameer, we ensure every product meets the highest standards
              of quality and safety. Our paints are designed to bring vibrant,
              long-lasting beauty to your spaces.
            </p>

            <SocialIcons />
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="font-bold text-base mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-bold text-base mb-4">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span className="text-sm opacity-80">{SITE.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span className="text-sm opacity-80">{SITE.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span className="text-sm opacity-80">{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-white border-opacity-30 mt-10 pt-6 text-center">
          <p className="text-sm opacity-70">{SITE.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
