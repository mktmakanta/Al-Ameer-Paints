import { ScanFace } from "lucide-react";
import { SITE } from "@/lib/siteData";

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.27 6.27 0 0 0-6.27 6.27 6.27 6.27 0 0 0 6.27 6.27 6.27 6.27 0 0 0 6.27-6.27V9.24a8.16 8.16 0 0 0 4.84 1.58V7.38a4.84 4.84 0 0 1-1-.69z" />
    </svg>
  );
}

export default function TopBar() {
  return (
    <div className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Social Icons — Left */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:opacity-75 transition-opacity"
          >
            <ScanFace size={16} fill="currentColor" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:opacity-75 transition-opacity"
          >
            <ScanFace size={16} />
          </a>
          <a
            href="#"
            aria-label="TikTok"
            className="hover:opacity-75 transition-opacity"
          >
            <TikTokIcon />
          </a>
          <a
            href="#"
            aria-label="WhatsApp"
            className="hover:opacity-75 transition-opacity"
          >
            <ScanFace size={16} fill="currentColor" />
          </a>
        </div>

        {/* Contact — Right */}
        <div className="flex items-center gap-6 text-sm">
          <span>
            <strong>CALL US:</strong> {SITE.phone}
          </span>
          <span>
            <strong>EMAIL US:</strong>{" "}
            <a href={`mailto:${SITE.email}`} className="hover:underline">
              {SITE.email}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
