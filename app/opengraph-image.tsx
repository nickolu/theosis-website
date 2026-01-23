import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "THEOSIS - San Diego Death Metal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: "bold",
            color: "#DC143C",
            textShadow: "0 0 40px #DC143C",
            marginBottom: 20,
          }}
        >
          THEOSIS
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#FF4500",
            letterSpacing: "0.1em",
          }}
        >
          San Diego Death Metal
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
