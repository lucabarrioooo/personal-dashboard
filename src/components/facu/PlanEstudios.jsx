import { useState } from 'react'
import { STATUS_CONFIG } from '../../data/initialData'
import MateriaModal from './MateriaModal'

export default function PlanEstudios({ materiasPorBloque }) {
  const [selected, setSelected] = useState(null)

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>Plan de Estudios</h2>
      <p style={styles.subtitle}>Licenciatura en Administración de Empresas · UADE · Plan 424 (2024)</p>

      {materiasPorBloque.map((bloque) => (
        <div key={`${bloque.anio}-${bloque.cuatrimestre}`} style={styles.bloque}>
          {bloque.tituloIntermedio && (
            <div style={styles.hito}>
              <span>🎓 TÍTULO INTERMEDIO: Técnico/a Universitario/a en Administración de Empresas</span>
            </div>
          )}

          <h3 style={styles.bloqueTitle}>
            {bloque.anio}° Año — {bloque.cuatrimestre}° Cuatrimestre
          </h3>

          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Código</th>
                  <th style={{ ...styles.th, textAlign: 'left' }}>Materia</th>
                  <th style={styles.th}>Hs</th>
                  <th style={styles.th}>Estado</th>
                  <th style={styles.th}>Nota</th>
                  <th style={styles.th}>Aprobación</th>
                </tr>
              </thead>
              <tbody>
                {bloque.materias.map((m) => {
                  const cfg = STATUS_CONFIG[m.estado] || STATUS_CONFIG['Pendiente']
                  return (
                    <tr
                      key={m.codigo}
                      style={{ ...styles.tr, background: cfg.bg }}
                      onClick={() => setSelected(m)}
                    >
                      <td style={styles.tdCode}>{m.codigo}</td>
                      <td style={styles.tdName}>{m.materia}</td>
                      <td style={styles.td}>{m.horas > 0 ? `${m.horas}` : '—'}</td>
                      <td style={styles.td}>
                        <span style={{ ...styles.statusBadge, color: cfg.color, border: `1px solid ${cfg.color}` }}>
                          {m.estado}
                        </span>
                      </td>
                      <td style={styles.td}>{m.nota ?? '—'}</td>
                      <td style={styles.td}>{m.fechaAprob || '—'}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {bloque.tituloFinal && (
            <div style={{ ...styles.hito, marginTop: '16px', marginBottom: 0 }}>
              <span>🎓 TÍTULO FINAL: Licenciado/a en Administración de Empresas</span>
            </div>
          )}
        </div>
      ))}

      {selected && (
        <MateriaModal materia={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}

const styles = {
  container: {},
  sectionTitle: { fontSize: '20px', fontWeight: 700, marginBottom: '4px' },
  subtitle: { fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' },
  bloque: { marginBottom: '28px' },
  bloqueTitle: {
    fontSize: '14px', fontWeight: 600, color: 'var(--accent)',
    textTransform: 'uppercase', letterSpacing: '0.05em',
    marginBottom: '10px', marginTop: '8px',
  },
  hito: {
    background: 'rgba(99,102,241,0.1)',
    border: '1px solid var(--accent)',
    borderRadius: 'var(--radius-sm)',
    padding: '10px 16px',
    fontSize: '13px',
    color: 'var(--accent)',
    fontWeight: 600,
    marginBottom: '12px',
  },
  tableWrap: { overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '14px' },
  th: {
    padding: '8px 12px', textAlign: 'center',
    fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)',
    borderBottom: '1px solid var(--border)',
    whiteSpace: 'nowrap',
  },
  tr: {
    borderBottom: '1px solid rgba(51,65,85,0.4)',
    cursor: 'pointer',
    transition: 'filter 0.15s',
  },
  td: { padding: '10px 12px', textAlign: 'center', color: 'var(--text-secondary)', whiteSpace: 'nowrap' },
  tdCode: { padding: '10px 12px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '12px', whiteSpace: 'nowrap' },
  tdName: { padding: '10px 12px', color: 'var(--text-primary)', fontWeight: 500, minWidth: '200px' },
  statusBadge: {
    fontSize: '11px', fontWeight: 600,
    padding: '2px 8px', borderRadius: '20px',
    whiteSpace: 'nowrap',
  },
}
