import { Warehouse, Truck, Ship, Users, ShieldCheck, Eye } from "lucide-react";

const reasons = [
  {
    icon: Ship,
    title: "Own Warehouse in Guangzhou",
    desc: "Our HengTong distribution centre in Guangzhou is the starting point of every international shipment — giving us full control over consolidation, packing, and dispatch before cargo even leaves China.",
  },
  {
    icon: Warehouse,
    title: "Own Warehouse in Sydney",
    desc: "Freight arrives directly into our Smithfield, Sydney facility. No third-party receiving, no delays waiting for dock bookings — your cargo comes straight to us.",
  },
  {
    icon: Truck,
    title: "Own Fleet for Last-Mile Delivery",
    desc: "Our company-owned fleet of 20+ vehicles handles delivery from our Sydney warehouse to your door. End-to-end in our hands, from Guangzhou to your site.",
  },
  {
    icon: ShieldCheck,
    title: "We Never Outsource",
    desc: "Every link in our chain is operated by us. No subcontractors, no third-party carriers, no finger-pointing. If something needs fixing, we fix it — full stop.",
  },
  {
    icon: Users,
    title: "Dedicated Agents & Operations Team",
    desc: "Your shipment is managed by a dedicated logistics agent in our office and an operations manager on the warehouse floor. They forecast, monitor, and own every step of the process.",
  },
  {
    icon: Eye,
    title: "Full Accountability — No Drama",
    desc: "We are fully responsible for everything we do. No responsibility shirking, no 'it's not our department'. One team, one point of contact, complete peace of mind.",
  },
];

const testimonials = [
  {
    quote:
      "Oz-wide's 3PL service transformed our supply chain. We cut costs significantly and improved delivery times across all our LED product lines.",
    author: "Optitech International",
    role: "LED & Energy Solutions",
  },
  {
    quote:
      "Their China–Australia freight team handled our windows and doors import program flawlessly. True logistics professionals who own every step.",
    author: "AMJ",
    role: "Windows & Doors Manufacturer",
  },
  {
    quote:
      "The HengTong consolidation line is a game changer for us. Large furniture, building materials — all handled with care, delivered on time.",
    author: "Victor Home",
    role: "Construction Materials & Furniture",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" style={{ background: "#f5f7fa" }}>
      {/* Reasons grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 grid md:grid-cols-2 gap-8 items-end">
            <div>
              <div
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "#00c8e0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
              >
                Why Choose Us
              </div>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                  lineHeight: 1,
                  color: "#0a0e1a",
                }}
              >
                THE OZ-WIDE
                <br />
                <span style={{ color: "#1a2d8a" }}>DIFFERENCE</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md" style={{ lineHeight: 1.75 }}>
              We own every link in the chain — from our Guangzhou warehouse to
              your door in Australia. No outsourcing, no excuses, no drama.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="bg-white p-8 group hover:shadow-lg transition-shadow duration-300"
                  style={{ borderRadius: "4px", border: "1px solid rgba(26,45,138,0.08)" }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5"
                    style={{ background: "rgba(26,45,138,0.08)", borderRadius: "4px" }}
                  >
                    <Icon size={22} style={{ color: "#1a2d8a" }} />
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: "#0a0e1a",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-muted-foreground" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                    {r.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Full chain visual callout */}
          <div
            className="mt-10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-0"
            style={{
              background: "#1a2d8a",
              borderRadius: "4px",
            }}
          >
            {[
              { label: "Guangzhou", sub: "HengTong Warehouse", icon: "🏭" },
              { label: "Sea Freight", sub: "Our Managed Shipment", icon: "🚢" },
              { label: "Sydney", sub: "Smithfield Warehouse", icon: "🏢" },
              { label: "Your Door", sub: "Own Fleet Delivery", icon: "🚛" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-4 md:gap-6 flex-1">
                <div className="flex flex-col items-center text-center min-w-[80px]">
                  <div className="text-2xl mb-1">{step.icon}</div>
                  <div
                    className="text-white uppercase tracking-wide"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
                  >
                    {step.label}
                  </div>
                  <div className="text-white/50" style={{ fontSize: "0.72rem" }}>{step.sub}</div>
                </div>
                {i < 3 && (
                  <div
                    className="flex-1 h-px hidden md:block"
                    style={{ background: "rgba(0,200,224,0.4)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20" style={{ background: "#0a0e1a" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="text-center text-xs uppercase tracking-widest mb-12"
            style={{ color: "#00c8e0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
          >
            What Our Clients Say
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="p-8"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "4px",
                }}
              >
                <div
                  className="mb-4"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "3.5rem",
                    color: "#00c8e0",
                    lineHeight: 1,
                  }}
                >
                  "
                </div>
                <p
                  className="text-white/80 mb-6"
                  style={{ fontSize: "0.95rem", lineHeight: 1.7, fontStyle: "italic" }}
                >
                  {t.quote}
                </p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1rem" }}>
                  <div
                    className="text-white"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem" }}
                  >
                    {t.author}
                  </div>
                  <div className="text-white/50" style={{ fontSize: "0.8rem" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
