import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { SITE, FOOTER_QUICK_LINKS, FOOTER_COMPANY } from "@/lib/siteData";

function SocialIcons() {
  const socials = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61587759537169",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/al_ameer_paints?igsh=MXVoMm9tc3puenB4cA==",
    },
    {
      icon: FaTiktok,
      label: "TikTok",
      href: "https://vm.tiktok.com/ZS9JvMd9pp2Hv-fG4In/",
    },
    {
      icon: FaLinkedin,
      label: "LinkenIn",
      href: "https://www.linkedin.com/in/al-ameer-etv-09aa19296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/2348141214979",
    },
  ];

  return (
    <div className="flex gap-4 mt-4">
      {socials.map(({ icon: Icon, label, href }) => (
        <Link
          key={label}
          href={href}
          aria-label={label}
          className="text-white opacity-80 hover:opacity-100 transition-opacity"
        >
          <Icon size={18} />
        </Link>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-24">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex flex-col items-start">
              <img
                src="/images/logo-footer.png"
                alt="Al Ameer"
                className="h-16 w-auto"
              />
              <span className="text-base font-bold mt-1 tracking-tight">
                AL-AMEER
              </span>
              <span className="text-[9px] opacity-80">
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

        {/* Bottom */}
        <div className="border-t border-white/30 mt-10 pt-6 text-center">
          <p className="text-sm opacity-70">{SITE.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
