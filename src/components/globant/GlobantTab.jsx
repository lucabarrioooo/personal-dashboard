import RecordatoriosList from '../shared/RecordatoriosList'
import NotasSection from '../shared/NotasSection'

export default function GlobantTab() {
  return (
    <div>
      <div style={styles.header}>
        <h1 style={styles.title}>Globant</h1>
        <p style={styles.sub}>Recordatorios, fechas importantes y notas de trabajo.</p>
      </div>
      <RecordatoriosList seccion="globant" />
      <div style={styles.divider} />
      <NotasSection seccion="globant" />
    </div>
  )
}

const styles = {
  header: { marginBottom: '8px' },
  title: { fontSize: '24px', fontWeight: 700, marginBottom: '4px' },
  sub: { fontSize: '14px', color: 'var(--text-muted)' },
  divider: { height: '1px', background: 'var(--border)', margin: '32px 0' },
}
