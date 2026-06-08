"use client";

/**
 * ChromaticCursor.jsx
 *
 * Exact replica of the ai4finance.org cursor effect:
 *   - Custom circular cursor (dot + ring)
 *   - Chromatic aberration / RGB-split glitch on elements near the cursor
 *   - Elements within ~120px of the cursor get R/G/B channel separation
 *   - The closer the cursor, the stronger the split
 *   - Works on BOTH light and dark backgrounds (no blend mode needed)
 *
 * HOW TO USE:
 *   1. Drop ChromaticCursor.jsx into /components
 *   2. Add <ChromaticCursor /> inside your RootLayout (above everything else)
 *   3. Add data-glitch to any element you want to react:
 *        <h1 data-glitch>Hello</h1>
 *        <nav data-glitch>...</nav>
 *      Or target all text automatically (see SELECTOR below)
 *
 * NO extra packages needed — pure CSS + Vanilla JS in a React useEffect.
 */

import { useEffect, useRef } from "react";

/* ── Config ────────────────────────────────────────────────── */
const INFLUENCE_RADIUS = 140;   // px — how close cursor must be to trigger effect
const MAX_SPLIT        = 8;     // px — maximum RGB split distance at closest point
const CURSOR_SIZE      = 10;    // dot size px
const RING_SIZE        = 36;    // ring size px
const SPRING           = 0.12;  // ring follow speed (0–1)

/* CSS selector for elements that get the chromatic aberration.
   Add data-glitch to specific elements, or use a broad selector. */
const GLITCH_SELECTOR = "[data-glitch], nav a, nav button, h1, h2, h3, .glitch";

export default function ChromaticCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -999, mouseY = -999;
    let ringX  = -999, ringY  = -999;
    let raf;

    /* ── Mouse tracking ── */
    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    /* ── Collect glitch targets once, refresh on resize ── */
    let targets = [];
    const collectTargets = () => {
      targets = Array.from(document.querySelectorAll(GLITCH_SELECTOR));
    };
    collectTargets();
    window.addEventListener("resize", collectTargets);

    /* ── Animation loop ── */
    const loop = () => {
      /* Move dot instantly */
      dot.style.left = `${mouseX}px`;
      dot.style.top  = `${mouseY}px`;

      /* Spring-follow ring */
      ringX += (mouseX - ringX) * SPRING;
      ringY += (mouseY - ringY) * SPRING;
      ring.style.left = `${ringX}px`;
      ring.style.top  = `${ringY}px`;

      /* ── Chromatic aberration on nearby elements ── */
      targets.forEach((el) => {
        const rect   = el.getBoundingClientRect();
        const cx     = rect.left + rect.width  / 2;
        const cy     = rect.top  + rect.height / 2;
        const dx     = mouseX - cx;
        const dy     = mouseY - cy;
        const dist   = Math.sqrt(dx * dx + dy * dy);

        if (dist < INFLUENCE_RADIUS) {
          /* strength 0→1 (1 = cursor right on the element centre) */
          const strength = 1 - dist / INFLUENCE_RADIUS;
          const split    = strength * MAX_SPLIT;

          /* Direction of split is opposite to cursor approach direction */
          const angle = Math.atan2(dy, dx);
          const sx    = Math.cos(angle) * split;
          const sy    = Math.sin(angle) * split;

          /*
           * CSS text-shadow trick — R shifted one way, B the other.
           * Works on text. For non-text elements we use filter + pseudo-layer.
           */
          el.style.textShadow = `
            ${-sx}px ${-sy}px 0 rgba(255,0,0,${strength * 0.85}),
            ${sx}px  ${sy}px  0 rgba(0,180,255,${strength * 0.75})
          `;

          /* Optional: slight hue-rotate on the element itself */
          el.style.filter = `hue-rotate(${strength * 12}deg)`;
          el.style.transition = "none";
        } else {
          /* Restore — use transition for smooth fade-out */
          if (el.style.textShadow) {
            el.style.transition = "text-shadow 0.4s ease, filter 0.4s ease";
            el.style.textShadow = "none";
            el.style.filter     = "none";
          }
        }
      });

      raf = requestAnimationFrame(loop);
    };
    loop();

    /* ── Cursor visibility on leave/enter ── */
    const onLeave  = () => { dot.style.opacity = "0"; ring.style.opacity = "0"; };
    const onEnter  = () => { dot.style.opacity = "1"; ring.style.opacity = "1"; };
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    /* ── Scale ring on click ── */
    const onDown = () => { ring.style.transform = "translate(-50%,-50%) scale(0.7)"; };
    const onUp   = () => { ring.style.transform = "translate(-50%,-50%) scale(1)"; };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);

    /* ── Scale ring on hovering interactive elements ── */
    const onOver = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea, select")) {
        ring.style.width  = `${RING_SIZE * 1.6}px`;
        ring.style.height = `${RING_SIZE * 1.6}px`;
        ring.style.borderColor = "rgba(98,94,255,0.8)";
        dot.style.background   = "#625eff";
      } else {
        ring.style.width  = `${RING_SIZE}px`;
        ring.style.height = `${RING_SIZE}px`;
        ring.style.borderColor = "rgba(255,255,255,0.5)";
        dot.style.background   = "#ffffff";
      }
    };
    window.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove",   onMove);
      window.removeEventListener("resize",      collectTargets);
      window.removeEventListener("mousedown",   onDown);
      window.removeEventListener("mouseup",     onUp);
      window.removeEventListener("mouseover",   onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);

      /* Clean up any lingering styles */
      targets.forEach(el => {
        el.style.textShadow = "";
        el.style.filter     = "";
        el.style.transition = "";
      });
    };
  }, []);

  const shared = {
    position:  "fixed",
    pointerEvents: "none",
    zIndex:    99999,
    transform: "translate(-50%, -50%)",
    transition: "width 0.2s, height 0.2s, border-color 0.2s, background 0.2s",
    willChange: "left, top",
  };

  return (
    <>
      {/* Dot — snaps to cursor exactly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...shared,
          width:        CURSOR_SIZE,
          height:       CURSOR_SIZE,
          borderRadius: "50%",
          background:   "#ffffff",
          mixBlendMode: "difference",
          top: -999, left: -999,
        }}
      />

      {/* Ring — spring-follows with slight lag */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          ...shared,
          width:        RING_SIZE,
          height:       RING_SIZE,
          borderRadius: "50%",
          border:       "1.5px solid rgba(255,255,255,0.5)",
          background:   "transparent",
          top: -999, left: -999,
        }}
      />

      {/* Hide the native cursor globally */}
      <style>{`
        *, *::before, *::after { cursor: none !important; }
      `}</style>
    </>
  );
}