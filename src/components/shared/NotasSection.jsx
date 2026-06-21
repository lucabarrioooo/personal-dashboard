import { useState, useEffect } from 'react'
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, where, orderBy, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase/config'

export default function NotasSection({ seccion }) {
  const [notas, setNotas] = useState([])
  const [texto, setTexto] = useState('')
  const [editando, setEditando] = useState(null)
  const [textoEdit, setTextoEdit] = useState('')

  useEffect(() => {
    const q = query(
      collection(db, 'notas'),
      where('seccion', '==', seccion),
      orderBy('fecha', 'desc')
    )
    const unsub = onSnapshot(q, (snap) => {
      setNotas(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    })
    return unsub
  }, [seccion])

  const agregar = async () => {
    if (!texto.trim()) return
    await addDoc(collection(db, 'notas'), {
      seccion,
      contenido: texto.trim(),
      fecha: serverTimestamp(),
    })
    setTexto('')
  }

  const guardarEdit = async (id) => {
    if (!textoEdit.trim()) return
    await updateDoc(doc(db, 'notas', id), { contenido: textoEdit.trim() })
    setEditando(null)
  }

  const eliminar = async (id) => {
    if (!confirm('¿Eliminar esta nota?')) return
    await deleteDoc(doc(db, 'notas', id))
  }

  const formatFecha = (ts) => {
    if (!ts) return ''
    const d = ts.toDate()
    return d.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Notas</h3>

      <div style={styles.inputArea}>
        <textarea
          style={styles.textarea}
          placeholder="Escribí una nota..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={3}
          onKeyDown={(e) => { if (e.key === 'Enter' && e.ctrlKey) agregar() }}
        />
        <button style={styles.btn} onClick={agregar}>Agregar nota</button>
      </div>

      <div style={styles.list}>
        {notas.length === 0 && (
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Sin notas todavía.</p>
        )}
        {notas.map((n) => (
          <div key={n.id} style={styles.nota}>
            {editando === n.id ? (
              <>
                <textarea
                  style={{ ...styles.textarea, marginBottom: '8px' }}
                  value={textoEdit}
                  onChange={(e) => setTextoEdit(e.target.value)}
                  rows={3}
                />
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={styles.btn} onClick={() => guardarEdit(n.id)}>Guardar</button>
                  <button style={styles.btnSecondary} onClick={() => setEditando(null)}>Cancelar</button>
                </div>
              </>
            ) : (
              <>
                <p style={styles.notaTexto}>{n.contenido}</p>
                <div style={styles.notaFooter}>
                  <span style={styles.fecha}>{formatFecha(n.fecha)}</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={styles.btnIcon} onClick={() => { setEditando(n.id); setTextoEdit(n.contenido) }}>Editar</button>
                    <button style={{ ...styles.btnIcon, color: '#ef4444' }} onClick={() => eliminar(n.id)}>Eliminar</button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: { marginTop: '32px' },
  title: { fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' },
  inputArea: { display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' },
  textarea: {
    background: 'var(--bg-primary)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--text-primary)',
    padding: '10px 12px',
    fontSize: '14px',
    resize: 'vertical',
    outline: 'none',
    width: '100%',
  },
  btn: {
    background: 'var(--accent)',
    color: '#fff',
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 500,
    alignSelf: 'flex-start',
  },
  btnSecondary: {
    background: 'var(--bg-card)',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-sm)',
    padding: '8px 16px',
    fontSize: '14px',
  },
  list: { display: 'flex', flexDirection: 'column', gap: '10px' },
  nota: {
    background: 'var(--bg-primary)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-sm)',
    padding: '14px',
  },
  notaTexto: { fontSize: '14px', color: 'var(--text-primary)', whiteSpace: 'pre-wrap', marginBottom: '8px' },
  notaFooter: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  fecha: { fontSize: '12px', color: 'var(--text-muted)' },
  btnIcon: { background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '12px', padding: '2px 6px' },
}
