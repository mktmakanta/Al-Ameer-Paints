import { SITE } from "@/lib/siteData";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex  sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Social Icons */}
          <div className="flex items-center gap-3 text-white">
            <Link
              href="
              https://www.facebook.com/profile.php?id=61587759537169"
              aria-label="Facebook"
              className="hover:opacity-75"
            >
              <FaFacebookF size={16} />
            </Link>
            <Link
              href="https://www.instagram.com/al_ameer_paints?igsh=MXVoMm9tc3puenB4cA=="
              aria-label="Instagram"
              className="hover:opacity-75"
            >
              <FaInstagram size={16} />
            </Link>
            <Link
              href="https://vm.tiktok.com/ZS9JvMd9pp2Hv-fG4In/"
              aria-label="TikTok"
              className="hover:opacity-75"
            >
              <FaTiktok size={16} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/al-ameer-etv-09aa19296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              aria-label="linkedin"
              className="hover:opacity-75"
            >
              <FaLinkedin size={16} />
            </Link>
            <Link
              href="https://wa.me/2348141214979"
              aria-label="WhatsApp"
              className="hover:opacity-75"
            >
              <FaWhatsapp size={16} />
            </Link>
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
