import { SITE } from "@/lib/siteData";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex  sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Social Icons */}
          <div className="flex items-center gap-3 text-white">
            <a href="#" aria-label="Facebook" className="hover:opacity-75">
              <FaFacebookF size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75">
              <FaInstagram size={16} />
            </a>
            <a href="#" aria-label="TikTok" className="hover:opacity-75">
              <FaTiktok size={16} />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:opacity-75">
              <FaWhatsapp size={16} />
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-left text-xs sm:text-sm">
            <span>
              <strong>CALL:</strong> {SITE.phone}
            </span>
            <span>
              <strong>EMAIL:</strong>{" "}
              <a href={`mailto:${SITE.email}`} className="hover:underline">
                {SITE.email}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
