export default function CursadaActual({ materias }) {
  const getNota = (n) => n !== null && n !== undefined ? n : '—'

  const getNotaColor = (n) => {
    if (n === null || n === undefined) return 'var(--text-muted)'
    if (n >= 6) return 'var(--status-aprobada)'
    if (n >= 4) return 'var(--status-final)'
    return 'var(--status-recursando)'
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Cursada Actual</h2>
      <p style={styles.sub}>1° Cuatrimestre 2026</p>

      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.th, textAlign: 'left' }}>Materia</th>
              <th style={styles.th}>1° Parcial</th>
              <th style={styles.th}>2° Parcial</th>
              <th style={styles.th}>Recup.</th>
              <th style={styles.th}>TPs</th>
              <th style={styles.th}>Prom.</th>
              <th style={styles.th}>Condición</th>
            </tr>
          </thead>
          <tbody>
            {materias.map((m) => (
              <tr key={m.codigo} style={styles.tr}>
                <td style={styles.tdName}>{m.materia}</td>
                <td style={{ ...styles.td, color: getNotaColor(m.parcial1) }}>{getNota(m.parcial1)}</td>
                <td style={{ ...styles.td, color: getNotaColor(m.parcial2) }}>{getNota(m.parcial2)}</td>
                <td style={{ ...styles.td, color: getNotaColor(m.recuperatorio) }}>{getNota(m.recuperatorio)}</td>
                <td style={styles.td}>{m.tps || '—'}</td>
                <td style={{ ...styles.td, fontWeight: 600, color: getNotaColor(m.promParciales) }}>{getNota(m.promParciales)}</td>
                <td style={styles.td}>
                  <span style={styles.badge}>{m.condicion}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const styles = {
  container: { marginBottom: '32px' },
  title: { fontSize: '20px', fontWeight: 700, marginBottom: '4px' },
  sub: { fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' },
  tableWrap: { overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '14px' },
  th: {
    padding: '8px 12px', textAlign: 'center',
    fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)',
    borderBottom: '1px solid var(--border)',
    whiteSpace: 'nowrap',
    background: 'var(--bg-secondary)',
  },
  tr: { borderBottom: '1px solid var(--border)' },
  td: { padding: '12px', textAlign: 'center', color: 'var(--text-secondary)' },
  tdName: { padding: '12px', color: 'var(--text-primary)', fontWeight: 500, minWidth: '200px' },
  badge: {
    fontSize: '12px', color: 'var(--status-cursando)',
    border: '1px solid var(--status-cursando)',
    padding: '2px 10px', borderRadius: '20px',
  },
}
