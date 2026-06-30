const stats = [
  { value: "25+", label: "Years in Operation", desc: "Serving Australian businesses since 1999" },
  { value: "AU↔CN", label: "Core Trade Lane", desc: "Australia–China dedicated freight specialist" },
  { value: "10,000+", label: "Shipments Per Year", desc: "Domestic and international combined" },
  { value: "99.2%", label: "On-time Delivery Rate", desc: "Industry-leading reliability" },
  { value: "5,000㎡", label: "Warehouse Space", desc: "Across 2 Australian facilities" },
  { value: "20+", label: "Fleet Vehicles", desc: "Company-owned, no outsourcing" },
];

export function Stats() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0,200,224,0.03) 0px, rgba(0,200,224,0.03) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, rgba(0,200,224,0.03) 0px, rgba(0,200,224,0.03) 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div
            className="text-xs uppercase tracking-widest mb-3"
            style={{
              color: "#00c8e0",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
            }}
          >
            By The Numbers
          </div>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1,
            }}
          >
            TRUSTED BY BUSINESSES
            <br />
            <span style={{ color: "#00c8e0" }}>ACROSS AUSTRALIA &amp; BEYOND</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: "rgba(0,200,224,0.08)" }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-8 md:p-10 flex flex-col gap-2"
              style={{ background: "#0a0e1a" }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.2rem, 4vw, 3rem)",
                  color: "#00c8e0",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-white uppercase tracking-wide"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                {stat.label}
              </div>
              <div className="text-white/40" style={{ fontSize: "0.82rem" }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
