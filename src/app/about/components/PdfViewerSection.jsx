"use client";

import { useState, useCallback, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  ChevronLeft, ChevronRight,
  Download, Maximize2, Minimize2
} from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

/* ── Use the legacy build fixes DOMMatrix / Node.js environment errors ── */
pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

export default function PdfViewerSection({ pdfUrl = "/AGENTICSENSE_PROFILE.pdf" }) {
  const [numPages, setNumPages]     = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading]       = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const containerRef                = useRef(null);

  const onLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setLoading(false);
  }, []);

  const goTo = useCallback((offset) => {
    setPageNumber(p => Math.min(Math.max(p + offset, 1), numPages || 1));
  }, [numPages]);

  const toggleFullscreen = () => {
    if (!fullscreen) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setFullscreen(f => !f);
  };

  /* Safe window width avoids SSR crash */
  const pageWidth = typeof window !== "undefined"
    ? Math.min(window.innerWidth - 48, 1100)
    : 900;

  return (
    <section style={{
      width: "100%", background: "#f5f4ff",
      padding: "64px 24px 72px",
      display: "flex", flexDirection: "column", alignItems: "center",
      fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 36, maxWidth: 560 }}>
        <h2 style={{
          fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800,
          letterSpacing: "-0.03em", lineHeight: 1.1, color: "#1a194d", margin: "0 0 10px",
        }}>
          Executive Overview
        </h2>
        <p style={{ fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.65, margin: 0 }}>
          Review our corporate ecosystem &amp; strategic presentation documentation.
        </p>
      </div>

      {/* Viewer card */}
      <div ref={containerRef} style={{
        width: "100%", maxWidth: 1100, background: "#fff",
        borderRadius: 16, border: "1px solid #e5e3f8",
        boxShadow: "0 8px 48px rgba(26,25,77,0.10)",
        overflow: "hidden", display: "flex", flexDirection: "column",
      }}>

        {/* Chrome bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "10px 16px", background: "#fff", borderBottom: "1px solid #eeedf8", flexShrink: 0,
        }}>
          <div style={{ display: "flex", gap: 6 }}>
            {["#ff5f57","#ffbd2e","#27c93f"].map(c => (
              <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
            ))}
          </div>
          <span style={{
            fontSize: "0.7rem", color: "#9ca3af", fontWeight: 500,
            background: "#f8f7ff", border: "1px solid #eeedf8",
            padding: "3px 12px", borderRadius: 6,
          }}>
            AGENTICSENSE_PROFILE.pdf
          </span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: "0.7rem", color: "#9ca3af" }}>
              {pageNumber} / {numPages || ""}
            </span>
            <button onClick={toggleFullscreen} style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#9ca3af", display: "flex", padding: 4,
            }}>
              {fullscreen ? <Minimize2 size={14}/> : <Maximize2 size={14}/>}
            </button>
          </div>
        </div>

        {/* PDF render 16:9 */}
        <div style={{
          position: "relative", width: "100%",
          aspectRatio: "16/9", background: "#f0effe",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
        }}>
          {loading && (
            <div style={{
              position: "absolute", inset: 0, display: "flex",
              flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: 12, zIndex: 5,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                border: "3px solid #eeecfc", borderTopColor: "#625eff",
                animation: "spin 0.7s linear infinite",
              }} />
              <span style={{ fontSize: "0.78rem", color: "#9ca3af" }}>Loading slides…</span>
            </div>
          )}

          <Document
            file={pdfUrl}
            onLoadSuccess={onLoadSuccess}
            onLoadError={() => setLoading(false)}
            loading={null}
          >
            {[pageNumber - 1, pageNumber, pageNumber + 1].map(p => {
              if (!p || p < 1 || (numPages && p > numPages)) return null;
              return (
                <div key={p} style={{
                  display: p === pageNumber ? "flex" : "none",
                  width: "100%", height: "100%",
                  alignItems: "center", justifyContent: "center",
                }}>
                  <Page
                    pageNumber={p}
                    width={pageWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    devicePixelRatio={typeof window !== "undefined" ? (window.devicePixelRatio || 2) : 2}
                    canvasBackground="white"
                    style={{ display: "block", maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              );
            })}
          </Document>

          {/* Nav zones */}
          {[{ side: "left", offset: -1, disabled: pageNumber <= 1 },
            { side: "right", offset: 1, disabled: pageNumber >= (numPages || 1) }
          ].map(({ side, offset, disabled }) => (
            <button key={side} onClick={() => goTo(offset)} disabled={disabled}
              aria-label={offset === -1 ? "Previous" : "Next"}
              style={{
                position: "absolute", [side]: 0, top: 0, bottom: 0,
                width: "12%", background: "transparent", border: "none",
                cursor: disabled ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center",
                justifyContent: side === "left" ? "flex-start" : "flex-end",
                padding: side === "left" ? "0 0 0 12px" : "0 12px 0 0",
                opacity: disabled ? 0 : 1, transition: "opacity 0.2s",
              }}
              onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = "rgba(26,25,77,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(255,255,255,0.9)",
                boxShadow: "0 2px 12px rgba(26,25,77,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {offset === -1
                  ? <ChevronLeft size={18} color="#1a194d" />
                  : <ChevronRight size={18} color="#1a194d" />}
              </div>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ height: 3, background: "#f0effe", flexShrink: 0 }}>
          <div style={{
            height: "100%",
            width: numPages ? `${(pageNumber / numPages) * 100}%` : "0%",
            background: "linear-gradient(90deg,#1a194d,#625eff)",
            transition: "width 0.3s ease",
          }} />
        </div>
      </div>

      {/* Controls */}
      <div style={{
        display: "flex", alignItems: "center",
        marginTop: 20, background: "#fff",
        border: "1px solid #e5e3f8", borderRadius: 14,
        boxShadow: "0 4px 20px rgba(26,25,77,0.08)",
        overflow: "hidden", userSelect: "none",
      }}>
        <Btn onClick={() => goTo(-1)} disabled={pageNumber <= 1}><ChevronLeft size={17}/></Btn>

        <div style={{
          padding: "0 20px", borderLeft: "1px solid #eeedf8", borderRight: "1px solid #eeedf8",
          fontSize: "0.82rem", fontWeight: 600, color: "#1a194d",
          display: "flex", alignItems: "center", gap: 5, height: 46, minWidth: 88, justifyContent: "center",
        }}>
          <span style={{ fontWeight: 800 }}>{pageNumber}</span>
          <span style={{ color: "#d1d5db" }}>/</span>
          <span style={{ color: "#9ca3af" }}>{numPages || ""}</span>
        </div>

        <Btn onClick={() => goTo(1)} disabled={pageNumber >= (numPages || 1)}><ChevronRight size={17}/></Btn>

        <div style={{ width: 1, height: 28, background: "#eeedf8", margin: "0 2px" }} />

        <div style={{ display: "flex", gap: 5, padding: "0 16px", alignItems: "center", maxWidth: 300, overflowX: "auto" }}>
          {Array.from({ length: Math.min(numPages || 0, 20) }, (_, i) => i + 1).map(n => (
            <button key={n} onClick={() => setPageNumber(n)} style={{
              width: n === pageNumber ? 20 : 7, height: 7,
              borderRadius: 9999, border: "none", padding: 0, flexShrink: 0,
              background: n === pageNumber ? "#625eff" : "#e5e3f8",
              cursor: "pointer", transition: "all 0.25s",
            }} />
          ))}
        </div>

        <div style={{ width: 1, height: 28, background: "#eeedf8", margin: "0 2px" }} />

        <a href={pdfUrl} download title="Download PDF" style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 46, height: 46,
          background: "linear-gradient(135deg,#1a194d,#625eff)",
          color: "#fff", textDecoration: "none",
        }}>
          <Download size={15}/>
        </a>
      </div>

      <p style={{ marginTop: 14, fontSize: "0.68rem", color: "#c4c2d4", letterSpacing: "0.04em" }}>
        Click the slide edges or use the dots to navigate
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}

function Btn({ children, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      width: 46, height: 46, border: "none", background: "transparent",
      color: disabled ? "#e5e3f8" : "#6b7280",
      cursor: disabled ? "not-allowed" : "pointer",
      display: "flex", alignItems: "center", justifyContent: "center",
      transition: "background 0.15s",
    }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = "#f5f4ff"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
    >
      {children}
    </button>
  );
}