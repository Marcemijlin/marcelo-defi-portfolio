import DashboardEmbed from '../../components/DashboardEmbed'
import { useEffect, useState } from 'react'

export default function Dashboards() {
  const [protocols, setProtocols] = useState([])

  useEffect(()=>{
    async function load(){
      try{
        const res = await fetch('https://api.llama.fi/protocols');
        const data = await res.json();
        const sorted = (Array.isArray(data) ? data : []).sort((a,b)=> (b.tvl || 0) - (a.tvl || 0)).slice(0,8);
        setProtocols(sorted);
      }catch(e){
        console.error(e);
      }
    }
    load();
  },[])

  return (
    <div className="page">
      <header className="subhero">
        <div className="container">
          <h1>Dashboards</h1>
          <p className="lead">Embeds y datos en vivo — ejemplos rápidos.</p>
        </div>
      </header>

      <main className="container">
        <section>
          <h2>Dune embed (ejemplo)</h2>
          {/* Reemplazá el src por el embed real de tu query Dune */}
          <DashboardEmbed src="https://dune.com/embeds/12345/67890" title="Dune example" />
        </section>

        <section style={{marginTop:24}}>
          <h2>DeFiLlama — Top protocols (live)</h2>
          <div className="protocols-grid">
            {protocols.length === 0 && <p>Cargando datos...</p>}
            {protocols.map(p => (
              <div key={p.name} className="protocol-card">
                <img src={p.logo || '/logo.svg'} alt={p.name} className="protocol-logo" />
                <div className="protocol-info">
                  <strong>{p.name}</strong>
                  <div className="meta">TVL: ${p.tvl ? Number(p.tvl).toLocaleString() : '—'}</div>
                  <div className="meta small">Chain: {p.chain || '—'}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
