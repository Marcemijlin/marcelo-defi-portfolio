export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "white",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Dashboard – Dune Analytics
      </h1>

      <iframe
        src="https://dune.com/embeds/3659624/6147381/"
        width="100%"
        height="900px"
        style={{
          border: "1px solid #222",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "1200px"
        }}
        allow="fullscreen"
      />
    </div>
  );
}
