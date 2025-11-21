import Link from 'next/link'

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <div className="container">
          <img src="/logo.svg" alt="logo" className="logo" />
          <h1>Marcelo Mijlin — DeFi & Web3 Analyst</h1>
          <p className="lead">Portafolio de dashboards y análisis DeFi. Embeds, datos en vivo y research.</p>
          <div className="cta">
            <Link href="/dashboards"><a className="btn">Ver dashboards</a></Link>
            <a className="btn outline" href="#contact">Contacto</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="about" style={{ marginBottom: 40 }}>
  <h2>Sobre mí</h2>
  <p>
    Soy Marcelo Mijlin, analista de DeFi y researcher on-chain. Trabajo explorando cómo funcionan los protocolos, midiendo métricas clave, analizando mercados de predicción, RWAs y estructura de capital en cripto. 
    Actualmente estoy construyendo dashboards avanzados en Dune y DeFiLlama, desarrollando smart contracts experimentales y creando contenido educativo enfocado en DeFi, mercados y data on-chain. 
    Mi objetivo es combinar análisis cuantitativo, diseño de incentivos y data en vivo para entender y explicar cómo se mueve la liquidez en Web3.
  </p>
</section>

        <section>
          <h2>Proyectos destacados</h2>
          <div className="cards">
            <article className="card">
              <h3>TVL trends — DeFi protocols</h3>
              <p>Dashboard que muestra tendencias de TVL y comparativas entre protocolos.</p>
              <a className="small-btn" href="/dashboards">Ver dashboard</a>
            </article>
            <article className="card">
              <h3>DEX flows — Volumen y liquidez</h3>
              <p>Análisis de volumen semanal y patrones de swaps on-chain.</p>
              <a className="small-btn" href="/dashboards">Ver dashboard</a>
            </article>
          </div>
        </section>

        <section id="contact" style={{ marginTop: 30 }}>
          <h2>Contacto</h2>
          <p>Interesado en consultoría o colaboraciones? Enviame un email a <strong>marcelo@example.com</strong> o conectá en LinkedIn.</p>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© 2025 Marcelo Mijlin — DeFi Research</div>
      </footer>
    </div>
  )
}
