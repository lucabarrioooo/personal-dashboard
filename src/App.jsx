import { useState, useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase/config'
import Login from './components/Login'
import Navbar from './components/Navbar'
import FacuTab from './components/facu/FacuTab'
import GlobantTab from './components/globant/GlobantTab'
import PersonalTab from './components/personal/PersonalTab'

export default function App() {
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('facu')

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setAuthLoading(false)
    })
    return unsub
  }, [])

  if (authLoading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
        Cargando...
      </div>
    )
  }

  if (!user) return <Login />

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar activeTab={activeTab} setTab={setActiveTab} onLogout={() => signOut(auth)} />
      <main style={styles.main}>
        {activeTab === 'facu' && <FacuTab />}
        {activeTab === 'globant' && <GlobantTab />}
        {activeTab === 'personal' && <PersonalTab />}
      </main>
    </div>
  )
}

const styles = {
  main: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '32px 20px',
  },
}
