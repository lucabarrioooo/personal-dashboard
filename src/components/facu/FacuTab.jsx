import { useState, useEffect } from 'react'
import { collection, onSnapshot, doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { PLAN_ESTUDIOS, CURSADA_ACTUAL } from '../../data/initialData'
import ProgressStats from './ProgressStats'
import PlanEstudios from './PlanEstudios'
import CursadaActual from './CursadaActual'
import NotasSection from '../shared/NotasSection'
import RecordatoriosList from '../shared/RecordatoriosList'

export default function FacuTab() {
  const [materias, setMaterias] = useState([])
  const [cursada, setCursada] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Seed materias si la colección está vacía
    const seedMaterias = async () => {
      const allMaterias = PLAN_ESTUDIOS.flatMap(b =>
        b.materias.map(m => ({ ...m, anio: b.anio, cuatrimestre: b.cuatrimestre }))
      )
      for (const m of allMaterias) {
        await setDoc(doc(db, 'materias', m.codigo), m, { merge: true })
      }
    }

    const seedCursada = async () => {
      for (const m of CURSADA_ACTUAL) {
        await setDoc(doc(db, 'cursadaActual', m.codigo), m, { merge: true })
      }
    }

    const unsubMaterias = onSnapshot(collection(db, 'materias'), async (snap) => {
      if (snap.empty) {
        await seedMaterias()
      } else {
        const data = snap.docs.map(d => d.data())
        setMaterias(data)
        setLoading(false)
      }
    })

    const unsubCursada = onSnapshot(collection(db, 'cursadaActual'), async (snap) => {
      if (snap.empty) {
        await seedCursada()
      } else {
        setCursada(snap.docs.map(d => d.data()))
      }
    })

    return () => { unsubMaterias(); unsubCursada() }
  }, [])

  // Reconstruir la estructura por bloque con datos actualizados de Firestore
  const materiasPorBloque = PLAN_ESTUDIOS.map(bloque => ({
    ...bloque,
    materias: bloque.materias.map(m => {
      const live = materias.find(x => x.codigo === m.codigo)
      return live || m
    }),
  }))

  if (loading) return <div style={styles.loading}>Cargando plan de estudios...</div>

  return (
    <div style={styles.container}>
      <ProgressStats materias={materias} />
      <CursadaActual materias={cursada} />
      <div style={styles.divider} />
      <PlanEstudios materiasPorBloque={materiasPorBloque} />
      <div style={styles.divider} />
      <RecordatoriosList seccion="facu" />
      <NotasSection seccion="facu" />
    </div>
  )
}

const styles = {
  container: { padding: '0' },
  loading: { color: 'var(--text-muted)', padding: '40px', textAlign: 'center' },
  divider: { height: '1px', background: 'var(--border)', margin: '32px 0' },
}
