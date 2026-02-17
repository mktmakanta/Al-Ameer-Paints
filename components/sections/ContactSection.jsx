import { ExternalLink, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import { SITE, CONTACT } from "@/lib/siteData";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

function ContactSocialIcons() {
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
    { icon: FaWhatsapp, label: "WhatsApp", href: " +2348141214979" },
  ];
  return (
    <div className="flex gap-4 mt-6">
      {socials.map(({ icon: Icon, label, href }) => (
        <Link
          key={label}
          href={href}
          aria-label={label}
          className="text-green-700 hover:opacity-100 transition-opacity"
        >
          <Icon size={20} />
        </Link>
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
        <div className="w-full" style={{ height: "420px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.3266512019836!2d6.53016707502662!3d9.653105190435303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c71bb9bfaf567%3A0xc5dde1140f987dbf!2sAL-AMEER%20PAINTS%20%26%20CHEMICAL%20NIG.%20LTD!5e0!3m2!1sen!2sng!4v1770166436422!5m2!1sen!2sng"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>
    </div>
  );
}
