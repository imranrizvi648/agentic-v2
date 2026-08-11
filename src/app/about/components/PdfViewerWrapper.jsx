"use client"; // ← THIS is the fix must be a Client Component to use ssr:false

import dynamic from "next/dynamic";

const PdfViewerSection = dynamic(
  () => import("./PdfViewerSection"),
  {
    ssr: false,
    loading: () => (
      <div style={{
        width: "100%", minHeight: 400, background: "#f5f4ff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif", color: "#9ca3af", fontSize: "0.88rem",
      }}>
        Loading presentation…
      </div>
    ),
  }
);

export default function PdfViewerWrapper(props) {
  return <PdfViewerSection {...props} />;
}