import { ImageResponse } from "next/og";
import { COMPANY_NAME, SERVICE_AREAS } from "./seo";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, #eaf8f0 0%, #d9efe2 28%, #0f2f29 85%)",
          color: "#081c18",
          padding: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(8,28,24,0.12)",
            borderRadius: "32px",
            background: "rgba(255,255,255,0.86)",
            padding: "48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "26px",
                color: "#1f5b4f",
              }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "999px",
                  background: "#1f8b6a",
                }}
              />
              Instalasi EV Charger Profesional
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "860px",
                fontSize: "64px",
                lineHeight: 1.08,
                fontWeight: 800,
              }}
            >
              Jasa Instalasi Charger Mobil Listrik untuk Rumah dan Bisnis
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "820px",
                fontSize: "28px",
                lineHeight: 1.4,
                color: "#29554a",
              }}
            >
              Survey teknis, grounding, proteksi panel, testing, dan garansi instalasi 1 tahun.
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontSize: "38px", fontWeight: 800 }}>{COMPANY_NAME}</div>
              <div style={{ display: "flex", fontSize: "22px", color: "#29554a" }}>
                {SERVICE_AREAS.join(" • ")}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "999px",
                background: "#0f2f29",
                color: "#ffffff",
                padding: "14px 24px",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              mpowerev.com
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}