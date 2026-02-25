import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OpSource Staffing — Your Source of Opportunity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 800,
              color: "white",
            }}
          >
            OS
          </div>
          <div style={{ fontSize: "48px", fontWeight: 800, color: "white" }}>
            OpSource Staffing
          </div>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#f97316",
            fontWeight: 600,
            marginBottom: "40px",
          }}
        >
          Your Source of Opportunity
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          Connecting businesses with exceptional talent across the Southeast.
          Warehouse, manufacturing, skilled trades, and direct hire solutions.
        </div>
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "40px",
            fontSize: "18px",
            color: "#64748b",
          }}
        >
          <span>10+ Locations</span>
          <span>|</span>
          <span>Actively Hiring</span>
          <span>|</span>
          <span>(866) 870-8133</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
