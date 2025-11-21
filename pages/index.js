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
