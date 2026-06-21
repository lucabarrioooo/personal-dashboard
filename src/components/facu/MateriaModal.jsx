import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { STATUS_CONFIG } from '../../data/initialData'
import Modal from '../shared/Modal'

const ESTADOS = ['Pendiente', 'Cursando', 'Recursando', 'Final pendiente', 'Aprobada']

export default function MateriaModal({ materia, onClose }) {
  const [editMode, setEditMode] = useState(false)
  const [form, setForm] = useState({
    estado: materia.estado,
    nota: materia.nota ?? '',
    fechaAprob: materia.fechaAprob ?? '',
    observaciones: materia.observaciones ?? '',
  })

  const statusCfg = STATUS_CONFIG[materia.estado] || STATUS_CONFIG['Pendiente']

  const guardar = async () => {
    const ref = doc(db, 'materias', materia.codigo)
    await updateDoc(ref, {
      estado: form.estado,
      nota: form.nota !== '' ? Number(form.nota) : null,
      fechaAprob: form.fechaAprob,
      observaciones: form.observaciones,
    })
    setEditMode(false)
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <div>
        <div style={{ marginBottom: '20px' }}>
          <span style={{ ...styles.badge, color: statusCfg.color, background: statusCfg.bg }}>
            {materia.estado}
          </span>
          <h2 style={styles.nombre}>{materia.materia}</h2>
          <p style={styles.codigo}>{materia.codigo} · {materia.horas} hs</p>
        </div>

        {!editMode ? (
          <>
            <div style={styles.grid}>
              <InfoField label="Estado" value={materia.estado} />
              <InfoField label="Nota" value={materia.nota ?? '—'} />
              <InfoField label="Fecha aprobación" value={materia.fechaAprob || '—'} />
              <InfoField label="Correlativas" value={materia.correlativas || '—'} />
              {materia.prerequisito && <InfoField label="Pre-requisito" value={materia.prerequisito} />}
            </div>
            {materia.observaciones && (
              <div style={{ marginTop: '16px' }}>
                <p style={styles.label}>Observaciones</p>
                <p style={styles.obs}>{materia.observaciones}</p>
              </div>
            )}
            <button style={styles.btnEdit} onClick={() => setEditMode(true)}>Editar</button>
          </>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={styles.label}>Estado</label>
              <select style={styles.input} value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value })}>
                {ESTADOS.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label style={styles.label}>Nota (si aprobada)</label>
              <input style={styles.input} type="number" min={1} max={10} value={form.nota} onChange={(e) => setForm({ ...form, nota: e.target.value })} placeholder="—" />
            </div>
            <div>
              <label style={styles.label}>Fecha de aprobación</label>
              <input style={styles.input} type="text" value={form.fechaAprob} onChange={(e) => setForm({ ...form, fechaAprob: e.target.value })} placeholder="dd/mm/aaaa" />
            </div>
            <div>
              <label style={styles.label}>Observaciones</label>
              <textarea style={{ ...styles.input, resize: 'vertical' }} rows={3} value={form.observaciones} onChange={(e) => setForm({ ...form, observaciones: e.target.value })} />
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
              <button style={styles.btnSave} onClick={guardar}>Guardar</button>
              <button style={styles.btnCancel} onClick={() => setEditMode(false)}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}

function InfoField({ label, value }) {
  return (
    <div>
      <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px' }}>{label}</p>
      <p style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>{value}</p>
    </div>
  )
}

const styles = {
  badge: { fontSize: '12px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', display: 'inline-block', marginBottom: '10px' },
  nombre: { fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' },
  codigo: { fontSize: '13px', color: 'var(--text-muted)' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' },
  label: { fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 500 },
  obs: { fontSize: '14px', color: 'var(--text-secondary)', background: 'var(--bg-primary)', padding: '10px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' },
  btnEdit: { marginTop: '20px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 'var(--radius-sm)', padding: '8px 20px', fontSize: '14px', fontWeight: 500 },
  input: { width: '100%', background: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', padding: '8px 12px', fontSize: '14px', outline: 'none' },
  btnSave: { background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 'var(--radius-sm)', padding: '8px 20px', fontSize: '14px', fontWeight: 500 },
  btnCancel: { background: 'var(--bg-card)', color: 'var(--text-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '8px 20px', fontSize: '14px' },
}
