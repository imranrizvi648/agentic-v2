"use client";

import React, { useState } from "react";
import { Phone, MapPin, User } from "lucide-react";

const LOCATIONS = {
  USA: {
    address: "11921 Freedom Drive, Suite 550\nReston, VA 20190",
    rep: { name: "Lara Kazan", role: "Business Development Executive",
           image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" },
    phone: "+1 394 849 2309",
    flag: "🇺🇸",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.5323565293375!2d-77.35923982343886!3d38.95750247171121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b648174dfb2955%3A0x6e90e447bdf2f58!2s11921%20Freedom%20Dr%20%23550%2C%20Reston%2C%20VA%2020190%2C%20USA!5e0!3m2!1sen!2s!4v1717250000000!5m2!1sen!2s",
  },
  Pakistan: {
    address: "Main Boulevard, Phase 6, DHA\nLahore, Punjab 54000",
    rep: { name: "Zain Ahmed", role: "Regional Account Manager",
           image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop" },
    phone: "+92 42 111 222 333",
    flag: "🇵🇰",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.564789023412!2d74.4428889!3d31.4807491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190b21a3ab39fb%3A0xefef484a0d9b4395!2sDHA%20Phase%206%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1717250000000!5m2!1sen!2s",
  },
};

export default function OfficeLocations() {
  const [active, setActive] = useState("USA");
  const loc = LOCATIONS[active];

  return (
    <section style={{
      background: "#fff",
      fontFamily: "'Geist Sans', ui-sans-serif, system-ui, sans-serif",
      padding: "0 32px 80px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#625eff", margin: 0 }}>
            Our Offices
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "#1a194d", margin: "10px 0 0" }}>
            Where to find us
          </h2>
        </div>

        {/* Map + card container */}
        <div style={{
          position: "relative",
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid #eeecfc",
          boxShadow: "0 8px 40px rgba(26,25,77,0.10)",
          height: 520,
        }}>

          {/* Map */}
          <iframe
            src={loc.mapUrl}
            width="100%" height="100%"
            style={{ border: 0, display: "block", position: "absolute", inset: 0 }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${active} office map`}
          />

          {/* Tab switcher — top left */}
          <div style={{
            position: "absolute", top: 20, left: 20, zIndex: 10,
            display: "flex", gap: 8,
          }}>
            {Object.keys(LOCATIONS).map(tab => (
              <button key={tab} onClick={() => setActive(tab)}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "8px 16px", borderRadius: 9999,
                  border: "1.5px solid",
                  borderColor: active === tab ? "#625eff" : "rgba(255,255,255,0.6)",
                  background: active === tab ? "#1a194d" : "rgba(255,255,255,0.92)",
                  color: active === tab ? "#fff" : "#1a194d",
                  fontSize: "0.75rem", fontWeight: 700, cursor: "pointer",
                  backdropFilter: "blur(8px)",
                  boxShadow: active === tab ? "0 4px 16px rgba(26,25,77,0.25)" : "0 2px 8px rgba(0,0,0,0.08)",
                  transition: "all 0.2s", fontFamily: "inherit",
                }}>
                <span>{LOCATIONS[tab].flag}</span>
                {tab}
              </button>
            ))}
          </div>

          {/* Info card — right side */}
          <div style={{
            position: "absolute", top: 20, right: 20, bottom: 20,
            zIndex: 10, width: 280,
            background: "rgba(255,255,255,0.97)",
            border: "1px solid #eeecfc",
            borderRadius: 16,
            boxShadow: "0 8px 40px rgba(26,25,77,0.14)",
            padding: "28px 24px",
            display: "flex", flexDirection: "column", gap: 24,
            backdropFilter: "blur(12px)",
            overflowY: "auto",
          }}>
            {/* Header */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: "1.4rem" }}>{loc.flag}</span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1a194d", margin: 0 }}>
                  {active}
                </h3>
              </div>
              <div style={{ width: 32, height: 2, borderRadius: 2, background: "#625eff" }} />
            </div>

            {/* Address */}
            <div>
              <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.16em",
                textTransform: "uppercase", color: "#9ca3af", margin: "0 0 8px" }}>
                Address
              </p>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <MapPin size={13} color="#625eff" style={{ marginTop: 2, flexShrink: 0 }} />
                <p style={{ fontSize: "0.82rem", color: "#374151", lineHeight: 1.65,
                  margin: 0, whiteSpace: "pre-line" }}>
                  {loc.address}
                </p>
              </div>
            </div>

            {/* Rep */}
            <div>
              <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.16em",
                textTransform: "uppercase", color: "#9ca3af", margin: "0 0 10px" }}>
                Sales Representative
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img src={loc.rep.image} alt={loc.rep.name}
                  style={{ width: 44, height: 44, borderRadius: 10,
                    objectFit: "cover", filter: "grayscale(30%)",
                    border: "2px solid #eeecfc", flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a194d", margin: 0 }}>
                    {loc.rep.name}
                  </p>
                  <p style={{ fontSize: "0.7rem", color: "#9ca3af", margin: "2px 0 0" }}>
                    {loc.rep.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div>
              <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.16em",
                textTransform: "uppercase", color: "#9ca3af", margin: "0 0 8px" }}>
                Call Us
              </p>
              <a href={`tel:${loc.phone.replace(/\s/g,"")}`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  fontSize: "0.85rem", fontWeight: 700, color: "#1a194d",
                  textDecoration: "none", transition: "color 0.2s",
                }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 30, height: 30, borderRadius: 8,
                  background: "rgba(98,94,255,0.08)", border: "1px solid rgba(98,94,255,0.18)",
                }}>
                  <Phone size={13} color="#625eff" />
                </span>
                {loc.phone}
              </a>
            </div>

            {/* CTA */}
            <a href="/contact" style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: 6, marginTop: "auto",
              padding: "12px 20px", borderRadius: 10,
              background: "linear-gradient(135deg,#1a194d,#2d2b7a)",
              color: "#fff", fontSize: "0.78rem", fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.04em",
              boxShadow: "0 4px 16px rgba(26,25,77,0.2)",
              transition: "all 0.2s",
            }}>
              Get Directions
              <MapPin size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}