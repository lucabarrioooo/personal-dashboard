import RecordatoriosList from '../shared/RecordatoriosList'
import NotasSection from '../shared/NotasSection'

export default function PersonalTab() {
  return (
    <div>
      <div style={styles.header}>
        <h1 style={styles.title}>Personal</h1>
        <p style={styles.sub}>Eventos, fechas futuras y notas del día a día.</p>
      </div>
      <RecordatoriosList seccion="personal" />
      <div style={styles.divider} />
      <NotasSection seccion="personal" />
    </div>
  )
}

const styles = {
  header: { marginBottom: '8px' },
  title: { fontSize: '24px', fontWeight: 700, marginBottom: '4px' },
  sub: { fontSize: '14px', color: 'var(--text-muted)' },
  divider: { height: '1px', background: 'var(--border)', margin: '32px 0' },
}
