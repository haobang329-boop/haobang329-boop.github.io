import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "../../imports/Oz-Wide_logo_RGB_Web-1.jpg";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "#ffffff",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "2px solid #1a2d8a" : "1px solid rgba(26,45,138,0.12)",
        boxShadow: scrolled ? "0 2px 20px rgba(26,45,138,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
        >
          <img
            src={logoImg}
            alt="Oz-wide Express Freight"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-[#00c8e0] transition-colors duration-200 uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.08em",
                fontSize: "0.95rem",
                color: "#1a2d8a",
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:1300123456"
            className="flex items-center gap-2 transition-colors duration-200"
            style={{ color: "#1a2d8a" }}
          >
            <Phone size={16} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>
              1300 123 456
            </span>
          </a>
          <button
            onClick={() => handleNavClick("#contact")}
            className="px-5 py-2.5 uppercase tracking-widest transition-all duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #1a2d8a 0%, #00c8e0 100%)",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.88rem",
              color: "#fff",
              borderRadius: "2px",
            }}
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          style={{ color: "#1a2d8a" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-6 flex flex-col gap-4 border-t"
          style={{ background: "#ffffff", borderColor: "rgba(26,45,138,0.12)" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left hover:text-[#00c8e0] transition-colors uppercase tracking-wider py-2"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#1a2d8a",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-2 px-5 py-3 text-center uppercase tracking-widest"
            style={{
              background: "linear-gradient(135deg, #1a2d8a 0%, #00c8e0 100%)",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              color: "#fff",
              borderRadius: "2px",
            }}
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}
