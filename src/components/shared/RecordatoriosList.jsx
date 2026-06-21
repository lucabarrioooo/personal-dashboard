import { useState, useEffect } from 'react'
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, where, orderBy, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase/config'

export default function RecordatoriosList({ seccion }) {
  const [items, setItems] = useState([])
  const [texto, setTexto] = useState('')
  const [fecha, setFecha] = useState('')

  useEffect(() => {
    const q = query(
      collection(db, 'recordatorios'),
      where('seccion', '==', seccion),
      orderBy('fechaEvento', 'asc')
    )
    const unsub = onSnapshot(q, (snap) => {
      setItems(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    })
    return unsub
  }, [seccion])

  const agregar = async () => {
    if (!texto.trim()) return
    await addDoc(collection(db, 'recordatorios'), {
      seccion,
      texto: texto.trim(),
      fechaEvento: fecha || null,
      completado: false,
      creado: serverTimestamp(),
    })
    setTexto('')
    setFecha('')
  }

  const toggleCompletado = async (id, actual) => {
    await updateDoc(doc(db, 'recordatorios', id), { completado: !actual })
  }

  const eliminar = async (id) => {
    await deleteDoc(doc(db, 'recordatorios', id))
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Recordatorios</h3>

      <div style={styles.inputRow}>
        <input
          style={styles.input}
          placeholder="Nuevo recordatorio..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') agregar() }}
        />
        <input
          type="date"
          style={{ ...styles.input, maxWidth: '160px' }}
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <button style={styles.btn} onClick={agregar}>+</button>
      </div>

      <div style={styles.list}>
        {items.length === 0 && (
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Sin recordatorios.</p>
        )}
        {items.map((item) => (
          <div key={item.id} style={{ ...styles.item, opacity: item.completado ? 0.5 : 1 }}>
            <input
              type="checkbox"
              checked={item.completado}
              onChange={() => toggleCompletado(item.id, item.completado)}
              style={{ marginRight: '10px', accentColor: 'var(--accent)' }}
            />
            <span style={{ ...styles.itemTexto, textDecoration: item.completado ? 'line-through' : 'none' }}>
              {item.texto}
            </span>
            {item.fechaEvento && (
              <span style={styles.badge}>{item.fechaEvento}</span>
            )}
            <button style={styles.btnDel} onClick={() => eliminar(item.id)}>✕</button>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: { marginTop: '32px' },
  title: { fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' },
  inputRow: { display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' },
  input: {
    flex: 1, minWidth: '200px',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--text-primary)',
    padding: '8px 12px',
    fontSize: '14px',
    outline: 'none',
  },
  btn: {
    background: 'var(--accent)', color: '#fff', border: 'none',
    borderRadius: 'var(--radius-sm)', padding: '8px 16px',
    fontSize: '18px', fontWeight: 700,
  },
  list: { display: 'flex', flexDirection: 'column', gap: '8px' },
  item: {
    display: 'flex', alignItems: 'center', gap: '8px',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-sm)',
    padding: '10px 14px',
  },
  itemTexto: { flex: 1, fontSize: '14px', color: 'var(--text-primary)' },
  badge: {
    fontSize: '12px', color: 'var(--accent)',
    background: 'var(--accent-light)',
    padding: '2px 8px', borderRadius: '20px',
  },
  btnDel: {
    background: 'none', border: 'none',
    color: 'var(--text-muted)', fontSize: '12px', padding: '2px 4px',
  },
}
