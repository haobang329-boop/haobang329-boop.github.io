import logoImg from "../../imports/Oz-Wide_logo_RGB_Web-1.jpg";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  Services: ["3PL & Warehousing", "International Freight", "HengTong Line", "Customs Brokerage", "Domestic Freight"],
  Company: ["About Us", "Our Team", "Careers", "News & Insights", "Sustainability"],
  Resources: ["Track Shipment", "Client Portal", "Rate Calculator", "Freight Guides", "FAQs"],
};

export function Footer() {
  return (
    <footer style={{ background: "#ffffff", borderTop: "1px solid rgba(26,45,138,0.1)" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <img
            src={logoImg}
            alt="Oz-wide Express Freight"
            className="h-14 w-auto object-contain mb-6"
          />
          <p className="mb-6" style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#5a6480" }}>
            Australia's trusted freight partner. Specialists in Australia–China
            trade lanes, 3PL warehousing, and our exclusive HengTong
            Guangzhou–Sydney consolidation line.
          </p>
          {/* Social */}
          <div className="flex gap-3">
            {[Linkedin, Facebook, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                style={{
                  background: "rgba(26,45,138,0.07)",
                  borderRadius: "2px",
                  color: "#1a2d8a",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#00c8e0";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(26,45,138,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#1a2d8a";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <div
              className="uppercase tracking-widest mb-5 text-xs"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.1em", color: "#0a0e1a" }}
            >
              {heading}
            </div>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-colors duration-200 hover:text-[#00c8e0]"
                    style={{ fontSize: "0.88rem", color: "#5a6480" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(26,45,138,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div style={{ fontSize: "0.78rem", color: "#9aa5b4" }}>
            © 2024 Oz-Wide Express Freight Pty Ltd ACN 137 088 334. All rights reserved.
          </div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Modern Slavery Statement"].map((link) => (
              <a
                key={link}
                href="#"
                className="transition-colors duration-200 hover:text-[#1a2d8a]"
                style={{ fontSize: "0.78rem", color: "#9aa5b4" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
