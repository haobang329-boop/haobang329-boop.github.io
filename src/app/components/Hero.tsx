import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1724364552281-dbed323c4633?w=1920&h=1080&fit=crop&auto=format"
          alt="Aerial view of cargo ship at sea"
          className="w-full h-full object-cover"
          style={{ opacity: 0.22 }}
        />
        {/* Deep navy gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, #0a0e1a 45%, rgba(26,45,138,0.85) 70%, rgba(0,200,224,0.25) 100%)",
          }}
        />
      </div>

      {/* Diagonal accent stripe */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, transparent 40%, rgba(0,200,224,0.04) 100%)",
        }}
      />

      {/* Cyan vertical accent line */}
      <div
        className="absolute left-0 top-20 bottom-0 w-1"
        style={{ background: "linear-gradient(to bottom, #00c8e0, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: copy */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs uppercase tracking-widest rounded-sm"
            style={{
              background: "rgba(0,200,224,0.12)",
              border: "1px solid rgba(0,200,224,0.3)",
              color: "#00c8e0",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
            }}
          >
            <MapPin size={12} />
            Australia-wide &amp; International
          </div>

          <h1
            className="text-white mb-6 leading-none"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 0.95,
            }}
          >
            MOVING FREIGHT
            <br />
            <span style={{ color: "#00c8e0" }}>ACROSS</span>
            <br />
            THE WORLD
          </h1>

          <p
            className="text-white/65 mb-10 max-w-lg"
            style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            Oz-wide Express Freight delivers end-to-end logistics solutions — from
            3PL warehousing to international sea and air freight — with the
            reliability and expertise Australian businesses trust.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 px-7 py-4 uppercase tracking-wider transition-all duration-200 hover:gap-3"
              style={{
                background: "linear-gradient(135deg, #1a2d8a 0%, #00c8e0 100%)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#fff",
                borderRadius: "2px",
              }}
            >
              Get a Quote <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="flex items-center gap-2 px-7 py-4 uppercase tracking-wider text-white/80 hover:text-white transition-colors duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: "2px",
              }}
            >
              Our Services
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-6 items-center">
            {["ISO 9001 Certified", "IATA Member", "Customs Licensed"].map(
              (badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-white/50"
                  style={{ fontSize: "0.8rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, letterSpacing: "0.05em" }}
                >
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ background: "#00c8e0" }}
                  />
                  {badge}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right: stat cards */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          {[
            { value: "25+", label: "Years Experience" },
            { value: "AU↔CN", label: "Core Trade Lane" },
            { value: "10K+", label: "Shipments / Year" },
            { value: "99.2%", label: "On-time Delivery" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 flex flex-col justify-end"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "4px",
                minHeight: "140px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "2.8rem",
                  color: "#00c8e0",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/50 mt-1 uppercase tracking-wider"
                style={{ fontSize: "0.75rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <div
          className="text-xs uppercase tracking-widest"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}
        >
          Scroll
        </div>
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, rgba(0,200,224,0.5), transparent)" }}
        />
      </div>
    </section>
  );
}
