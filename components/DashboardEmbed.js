export default function DashboardEmbed({ src, title }) {
  return (
    <div style={{ borderRadius:12, overflow:'hidden', border:'1px solid rgba(255,255,255,0.04)' }}>
      <iframe title={title} src={src} style={{ width:'100%', height:520, border:0 }} />
    </div>
  )
}
