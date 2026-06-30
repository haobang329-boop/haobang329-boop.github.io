import { useState } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    client: "Optitech International Pty Ltd",
    title: "National LED & Energy Solutions Distribution",
    category: "3PL / Domestic",
    result: "Nationwide fulfilment for a leading LED/energy brand",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&h=450&fit=crop&auto=format",
    detail:
      "As Optitech International's primary 3PL partner, we manage warehousing, order fulfilment, and domestic distribution of LED lighting and energy solutions to commercial clients and retailers across Australia.",
    tags: ["3PL", "Domestic", "B2B Fulfilment"],
  },
  {
    id: 2,
    client: "AMJ",
    title: "Windows & Doors Import Program",
    category: "International",
    result: "Streamlined AU–China import corridor",
    image: "https://images.unsplash.com/photo-1717386255767-52643970d483?w=700&h=450&fit=crop&auto=format",
    detail:
      "Ongoing sea freight management for AMJ's large-format windows and doors manufactured in China, handling FCL shipments, customs clearance, and delivery to construction sites across New South Wales.",
    tags: ["Sea Freight", "Customs", "Australia–China"],
  },
  {
    id: 3,
    client: "Victor Home",
    title: "Construction Materials & Furniture Logistics",
    category: "International",
    result: "Reliable supply chain for construction & furniture imports",
    image: "https://images.unsplash.com/photo-1653972233229-1b8c042d6d8e?w=700&h=450&fit=crop&auto=format",
    detail:
      "End-to-end freight management for Victor Home's diverse product range — construction materials, furniture, and complete interior solutions — sourced from China and delivered to project sites and showrooms.",
    tags: ["Sea Freight", "Warehousing", "Australia–China"],
  },
  {
    id: 4,
    client: "Tivoli International",
    title: "Apartment Joinery Solution Imports",
    category: "International",
    result: "Precision handling of high-value joinery components",
    image: "https://images.unsplash.com/photo-1737898422812-54c83e3811ff?w=700&h=450&fit=crop&auto=format",
    detail:
      "Managing the import of complete apartment joinery packages — cabinetry, wardrobes, and bespoke interior fittings — from Chinese manufacturers to Tivoli's Sydney distribution point, with careful handling to preserve product integrity.",
    tags: ["Sea Freight", "Customs", "High-Value Cargo"],
  },
  {
    id: 5,
    client: "BYD Australia",
    title: "Vehicle Export Oversea",
    category: "Export / Special Cargo",
    result: "Successful repatriation of EV test fleet",
    image: "https://images.unsplash.com/photo-1632517306067-b54ab4d1f98d?w=700&h=450&fit=crop&auto=format",
    detail:
      "Coordinated the export of BYD testing vehicles from Australia back to China — handling RO-RO shipping arrangements, vehicle compliance documentation, and customs export procedures for this high-profile electric vehicle program.",
    tags: ["Vehicle Export", "RO-RO", "Australia→China"],
  },
  {
    id: 6,
    client: "HengTong Consolidation Line",
    title: "Guangzhou–Sydney Individual Cargo Consolidation",
    category: "HengTong Line",
    result: "One consolidated shipment for hundreds of customers",
    image: "https://images.unsplash.com/photo-1620306677888-10e367e6293d?w=700&h=450&fit=crop&auto=format",
    detail:
      "Through our exclusive HengTong warehouse in Guangzhou, we receive individual customer cargo — from furniture and building materials to forklifts, excavators, small parcels, clothing, and tools — consolidate it, and ship directly to our Smithfield, Sydney HQ for last-mile delivery.",
    tags: ["HengTong", "Consolidation", "Guangzhou→Sydney"],
  },
];

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 grid md:grid-cols-2 gap-8 items-end">
          <div>
            <div
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#00c8e0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
            >
              Success Stories
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
              PROJECTS THAT
              <br />
              <span style={{ color: "#1a2d8a" }}>DELIVERED RESULTS</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md" style={{ lineHeight: 1.75 }}>
            From national retail distribution to China import programs, vehicle
            exports, and our exclusive HengTong consolidation line — our track
            record speaks for itself.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group relative overflow-hidden cursor-pointer flex flex-col"
              style={{
                borderRadius: "4px",
                border: "1px solid rgba(26,45,138,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                transform: hovered === p.id ? "translateY(-4px)" : "none",
                boxShadow: hovered === p.id ? "0 16px 40px rgba(26,45,138,0.15)" : "none",
              }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(10,14,26,0.85) 0%, transparent 55%)",
                  }}
                />
                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-widest"
                  style={{
                    background: "rgba(0,200,224,0.9)",
                    color: "#0a0e1a",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    borderRadius: "2px",
                  }}
                >
                  {p.category}
                </div>
                {/* Client */}
                <div
                  className="absolute bottom-4 left-4 text-white/80 text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}
                >
                  {p.client}
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-6 flex flex-col flex-1">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#0a0e1a",
                  }}
                >
                  {p.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1" style={{ fontSize: "0.85rem", lineHeight: 1.65 }}>
                  {p.detail}
                </p>

                {/* Result highlight */}
                <div
                  className="flex items-center gap-2 px-4 py-2.5 mb-4"
                  style={{
                    background: "rgba(26,45,138,0.06)",
                    borderLeft: "3px solid #00c8e0",
                    borderRadius: "0 2px 2px 0",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      color: "#1a2d8a",
                      fontSize: "0.88rem",
                    }}
                  >
                    {p.result}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs uppercase tracking-wider"
                      style={{
                        background: "#f5f7fa",
                        color: "#5a6480",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 600,
                        borderRadius: "2px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
