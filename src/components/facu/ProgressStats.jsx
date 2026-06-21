import { STATUS_CONFIG } from '../../data/initialData'

export default function ProgressStats({ materias }) {
  const total = materias.length
  const counts = materias.reduce((acc, m) => {
    acc[m.estado] = (acc[m.estado] || 0) + 1
    return acc
  }, {})

  const aprobadas = counts['Aprobada'] || 0
  const pct = total > 0 ? Math.round((aprobadas / total) * 100) : 0

  const stats = [
    { label: 'Aprobadas', count: aprobadas, status: 'Aprobada' },
    { label: 'Cursando', count: counts['Cursando'] || 0, status: 'Cursando' },
    { label: 'Final pendiente', count: counts['Final pendiente'] || 0, status: 'Final pendiente' },
    { label: 'Recursando', count: counts['Recursando'] || 0, status: 'Recursando' },
    { label: 'Pendientes', count: counts['Pendiente'] || 0, status: 'Pendiente' },
  ]

  return (
    <div style={styles.container}>
      <div style={styles.progressBlock}>
        <div style={styles.pctRow}>
          <span style={styles.pct}>{pct}% completado</span>
          <span style={styles.sub}>{aprobadas} de {total} materias aprobadas</span>
        </div>
        <div style={styles.barBg}>
          <div style={{ ...styles.barFill, width: `${pct}%` }} />
        </div>
        <div style={styles.milestones}>
          <span style={styles.milestoneLabel}>Técnico Univ. (30 mat.)</span>
          <div style={styles.milestoneMarker} />
        </div>
      </div>

      <div style={styles.cards}>
        {stats.map((s) => {
          const cfg = STATUS_CONFIG[s.status]
          return (
            <div key={s.status} style={{ ...styles.card, borderTop: `3px solid ${cfg.color}` }}>
              <span style={{ ...styles.cardCount, color: cfg.color }}>{s.count}</span>
              <span style={styles.cardLabel}>{s.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const styles = {
  container: { marginBottom: '32px' },
  progressBlock: { background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px 24px', marginBottom: '16px' },
  pctRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' },
  pct: { fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)' },
  sub: { fontSize: '13px', color: 'var(--text-muted)' },
  barBg: { height: '10px', background: 'var(--bg-primary)', borderRadius: '5px', overflow: 'hidden', position: 'relative' },
  barFill: { height: '100%', background: 'linear-gradient(90deg, var(--accent), #22c55e)', borderRadius: '5px', transition: 'width 0.6s ease' },
  milestones: { display: 'flex', justifyContent: 'flex-end', marginTop: '6px', position: 'relative' },
  milestoneMarker: { position: 'absolute', left: 'calc(30/41 * 100%)', top: '-14px', width: '2px', height: '8px', background: 'var(--text-muted)' },
  milestoneLabel: { fontSize: '11px', color: 'var(--text-muted)' },
  cards: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' },
  card: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '16px 12px',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
  },
  cardCount: { fontSize: '28px', fontWeight: 700 },
  cardLabel: { fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center' },
}
