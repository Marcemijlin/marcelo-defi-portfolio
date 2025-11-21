import Head from "next/head";

export default function Dashboards() {
  return (
    <>
      <Head>
        <title>Dashboards | Marcelo Mijlin</title>
      </Head>

      <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <h1 style={{ marginBottom: 10 }}>Dashboards</h1>
        <p style={{ marginBottom: 30 }}>
          Mis dashboards de análisis on-chain, métricas DeFi y datos en vivo.
        </p>

        {/* CARD DE DASHBOARD */}
        <section style={{ marginBottom: 40 }}>
          <h2>Mis dashboards</h2>

          <div style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px"
          }}>
            <div style={{
              background: "#0d1b2a",
              padding: "20px",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "360px",
              border: "1px solid #1f2d3d"
            }}>
              <h3 style={{ marginBottom: "10px" }}>Dashboard principal en Dune</h3>
              <p style={{ fontSize: "14px", opacity: 0.85, marginBottom: "20px" }}>
                Panel con métricas DeFi, volumen, TVL, liquidez y m

