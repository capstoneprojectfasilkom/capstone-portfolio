import { ImageResponse } from "next/og";

export const alt = "Capstone Project Fasilkom UNEJ";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Signal Blue Glow */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(197, 224, 251, 0.8) 0%, rgba(255,255,255,0) 70%)",
          }}
        />

        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "1600px",
              border: "1px solid #8c9baa",
              backgroundColor: "#ffffff",
              fontSize: "16px",
              fontWeight: 600,
              color: "#000000",
            }}
          >
            <span style={{ color: "#0080ff" }}>●</span> CAPSTONE PROJECT
          </div>
          <span style={{ color: "#8c9baa", fontSize: "16px" }}>•</span>
          <span style={{ color: "#636f7b", fontSize: "16px" }}>Fasilkom UNEJ</span>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "58px",
              fontWeight: 800,
              color: "#000000",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            <span>Capstone Project</span>
            <span style={{ color: "#0080ff" }}>Fasilkom UNEJ</span>
          </div>
          <p
            style={{
              fontSize: "24px",
              color: "#636f7b",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Membangun Perangkat Lunak Berdampak Nyata untuk Mitra Instansi & Industri dengan Kontinuitas Lintas Semester.
          </p>
        </div>

        {/* Bottom Bar Stats & CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #8c9baa",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#0080ff" }}>20+</span>
              <span style={{ fontSize: "14px", color: "#636f7b" }}>Mitra Industri & Instansi</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#000000" }}>&gt;5 Semester</span>
              <span style={{ fontSize: "14px", color: "#636f7b" }}>Kontinuitas Proyek</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#000000" }}>Sejak 2022</span>
              <span style={{ fontSize: "14px", color: "#636f7b" }}>Track Record Berkelanjutan</span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#0080ff",
              color: "#ffffff",
              padding: "14px 28px",
              borderRadius: "1600px",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Ajukan Proyek →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
