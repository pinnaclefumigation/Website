export const ogImageSize = { width: 1200, height: 630 };
export const ogImageAlt =
  "Pinnacle Fumigation Services — Professional Pest Control";

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#212b10",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 16,
          display: "flex",
          backgroundColor: "#d9a53b",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          padding: "90px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#d9a53b",
            fontSize: 26,
            letterSpacing: 6,
            marginBottom: 28,
          }}
        >
          PROFESSIONAL FUMIGATION SERVICES
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#f4f1e6",
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          <span>PINNACLE</span>
          <span>FUMIGATION</span>
        </div>
        <div
          style={{
            display: "flex",
            color: "rgba(244, 241, 230, 0.7)",
            fontSize: 30,
            marginTop: 30,
            maxWidth: 820,
          }}
        >
          Eliminate pests. Protect your space. Serving Johannesburg, Pretoria
          and all of Gauteng — guaranteed results.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          color: "rgba(244, 241, 230, 0.5)",
          fontSize: 24,
          padding: "0 100px 56px",
        }}
      >
        pinnaclefumigation.co.za
      </div>
    </div>
  );
}
