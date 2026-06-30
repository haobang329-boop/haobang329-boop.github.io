import { useState } from "react";
import { Package, Globe, Ship, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    id: "3pl",
    icon: Package,
    title: "3PL & Domestic",
    subtitle: "Warehousing & Domestic Logistics",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop&auto=format",
    description:
      "Our Sydney-based warehousing and fulfilment operations provide end-to-end domestic supply chain management — from storage and order processing through to last-mile delivery across Australia.",
    features: [
      "Pick, Pack & Dispatch",
      "Inventory Management",
      "Returns Processing",
      "B2B & B2C Fulfilment",
      "Same-Day Metro Delivery",
      "Interstate Freight",
      "Remote Area Coverage",
      "Heavy Haulage",
    ],
  },
  {
    id: "international",
    icon: Globe,
    title: "International Freight",
    subtitle: "Australia–China Specialists",
    image:
      "https://images.unsplash.com/photo-1769144256207-bc4bb75b29db?w=800&h=500&fit=crop&auto=format",
    description:
      "We are specialists in Australia–China trade lanes, handling imports and exports for major commercial clients across building materials, furniture, joinery, and vehicles.",
    features: [
      "FCL & LCL Sea Freight",
      "Customs Clearance",
      "Dangerous Goods Handling",
      "Trade Compliance Advisory",
      "Door-to-Door Solutions",
      "Vehicle Export (BYD & More)",
    ],
  },
  {
    id: "hengtong",
    icon: Ship,
    title: "HengTong Line",
    subtitle: "Guangzhou → Sydney Direct",
    image:
      "https://images.unsplash.com/photo-1724364552281-dbed323c4633?w=800&h=500&fit=crop&auto=format",
    description:
      "Our exclusive HengTong shipping line consolidates individual customer orders at our Guangzhou distribution centre and ships them direct to our Sydney HQ in Smithfield. We accept almost everything — furniture, building materials, special-purpose vehicles (forklifts, excavators), small parcels, clothing, tools, and construction equipment.",
    features: [
      "Guangzhou Consolidation Warehouse",
      "Direct to Smithfield, Sydney",
      "Building Materials & Furniture",
      "Special Purpose Vehicles",
      "Small Parcels & Daily Goods",
      "Construction Equipment",
      "Clothing & Tools",
      "Individual & Commercial Orders",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState("3pl");
  const current = services.find((s) => s.id === active)!;

  return (
    <section id="services" className="py-24" style={{ background: "#f5f7fa" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 grid md:grid-cols-2 gap-8 items-end">
          <div>
            <div
              className="text-xs uppercase tracking-widest mb-3"
              style={{
                color: "#00c8e0",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
              }}
            >
              What We Do
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
              COMPLETE LOGISTICS
              <br />
              <span style={{ color: "#1a2d8a" }}>SOLUTIONS</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md" style={{ lineHeight: 1.75 }}>
            From Sydney warehousing and domestic delivery to international sea
            freight and our exclusive Guangzhou–Sydney consolidation line — we
            cover every link in your supply chain.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {services.map((s) => {
            const Icon = s.icon;
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className="flex items-center gap-2 px-6 py-3 transition-all duration-200"
                style={{
                  background: isActive ? "#1a2d8a" : "#fff",
                  color: isActive ? "#fff" : "#5a6480",
                  border: isActive ? "1px solid #1a2d8a" : "1px solid rgba(26,45,138,0.15)",
                  borderRadius: "2px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.04em",
                }}
              >
                <Icon size={16} />
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div
          className="grid md:grid-cols-2 overflow-hidden"
          style={{ borderRadius: "4px", border: "1px solid rgba(26,45,138,0.1)" }}
        >
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(120deg, rgba(26,45,138,0.6) 0%, transparent 60%)",
              }}
            />
            <div className="absolute bottom-6 left-6">
              <div
                className="text-white text-xs uppercase tracking-widest mb-1"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, opacity: 0.7 }}
              >
                {current.subtitle}
              </div>
              <div
                className="text-white"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                }}
              >
                {current.title}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <p className="text-muted-foreground mb-8" style={{ lineHeight: 1.75 }}>
              {current.description}
            </p>

            <div className="grid grid-cols-1 gap-3 mb-8">
              {current.features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#00c8e0", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.95rem", color: "#0a0e1a" }}>{f}</span>
                </div>
              ))}
            </div>

            <button
              className="self-start flex items-center gap-2 px-6 py-3 uppercase tracking-wider transition-all duration-200 hover:gap-3"
              style={{
                background: "linear-gradient(135deg, #1a2d8a 0%, #00c8e0 100%)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                color: "#fff",
                borderRadius: "2px",
                fontSize: "0.95rem",
              }}
            >
              Learn More <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
