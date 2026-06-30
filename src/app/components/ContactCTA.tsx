import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export function ContactCTA() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Background shipping image */}
      {/* Subtle navy accent stripe */}
      <div
        className="absolute top-0 right-0 w-px h-full"
        style={{ background: "linear-gradient(to bottom, #1a2d8a, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Left: info */}
        <div>
          <div
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "#00c8e0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
          >
            Get In Touch
          </div>
          <h2
            className="mb-6"
            style={{ color: "#0a0e1a" }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
              lineHeight: 1,
              color: "#0a0e1a",
            }}
          >
            LET'S MOVE YOUR
            <br />
            <span style={{ color: "#00c8e0" }}>FREIGHT FORWARD</span>
          </h2>
          <p className="mb-12 max-w-md" style={{ lineHeight: 1.75, color: "#5a6480" }}>
            Tell us about your logistics needs and our team will respond within
            4 business hours with a tailored solution and competitive quote.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-6">
            {[
              { icon: Phone, label: "Phone", value: "1300 123 456", sub: "Mon–Fri 7am–7pm AEST" },
              { icon: Mail, label: "Email", value: "enquiries@ozwideexpress.com.au", sub: "Replies within 4 hours" },
              { icon: MapPin, label: "Head Office", value: "2/106 Woodpark Rd, Smithfield NSW 2164", sub: "Australia" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(26,45,138,0.08)", borderRadius: "2px" }}
                  >
                    <Icon size={18} style={{ color: "#00c8e0" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest mb-0.5"
                      style={{ color: "#5a6480" }}
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}
                    >
                      {c.label}
                    </div>
                    <div style={{ fontSize: "0.95rem", color: "#0a0e1a" }}>
                      {c.value}
                    </div>
                    <div className="text-xs" style={{ color: "#5a6480" }}>{c.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: form */}
        <div
          className="p-8 md:p-10"
          style={{
            background: "#f5f7fa",
            border: "1px solid rgba(26,45,138,0.12)",
            borderRadius: "4px",
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <div
                className="w-16 h-16 flex items-center justify-center"
                style={{ background: "rgba(26,45,138,0.1)", borderRadius: "50%" }}
              >
                <Send size={28} style={{ color: "#1a2d8a" }} />
              </div>
              <h3
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.8rem", color: "#0a0e1a" }}
              >
                Enquiry Received!
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#5a6480" }}>
                Our team will be in touch within 4 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3
                className="mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#0a0e1a" }}
              >
                Request a Quote
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="col-span-2 md:col-span-1 px-4 py-3 outline-none"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(26,45,138,0.2)",
                    borderRadius: "2px",
                    fontSize: "0.9rem",
                    color: "#0a0e1a",
                  }}
                />
                <input
                  placeholder="Company Name"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="col-span-2 md:col-span-1 px-4 py-3 outline-none"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(26,45,138,0.2)",
                    borderRadius: "2px",
                    fontSize: "0.9rem",
                    color: "#0a0e1a",
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="col-span-2 md:col-span-1 px-4 py-3 outline-none"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(26,45,138,0.2)",
                    borderRadius: "2px",
                    fontSize: "0.9rem",
                    color: "#0a0e1a",
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="col-span-2 md:col-span-1 px-4 py-3 outline-none"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(26,45,138,0.2)",
                    borderRadius: "2px",
                    fontSize: "0.9rem",
                    color: "#0a0e1a",
                  }}
                />
              </div>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="px-4 py-3 outline-none"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(26,45,138,0.2)",
                  borderRadius: "2px",
                  fontSize: "0.9rem",
                  color: form.service ? "#0a0e1a" : "#9aa5b4",
                }}
              >
                <option value="" disabled>Select Service</option>
                <option value="3pl">3PL / Warehousing</option>
                <option value="international">International Freight</option>
                <option value="hengtong">HengTong Line (Guangzhou → Sydney)</option>
                <option value="domestic">Domestic Freight</option>
                <option value="customs">Customs Brokerage</option>
                <option value="other">Other</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about your freight requirements..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="px-4 py-3 outline-none resize-none"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(26,45,138,0.2)",
                  borderRadius: "2px",
                  fontSize: "0.9rem",
                  color: "#0a0e1a",
                }}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 py-4 uppercase tracking-widest transition-all duration-200 hover:gap-3 mt-2"
                style={{
                  background: "linear-gradient(135deg, #1a2d8a 0%, #00c8e0 100%)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#fff",
                  borderRadius: "2px",
                  border: "none",
                }}
              >
                Submit Enquiry <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
