import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../firebase/config'

export default function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Dashboard</h1>
        <p style={styles.sub}>Tu espacio personal de seguimiento</p>
        <button style={styles.btn} onClick={handleLogin}>
          <GoogleIcon />
          Entrar con Google
        </button>
      </div>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" style={{ marginRight: '10px', flexShrink: 0 }}>
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.4 6.5 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.4 6.5 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.4 0 10.2-2 13.8-5.2l-6.4-5.4C29.5 35.1 26.9 36 24 36c-5.3 0-9.7-3.3-11.3-8H6.1C9.5 35.7 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.2 5.4l6.4 5.4C41.3 36 44 30.4 44 24c0-1.3-.1-2.6-.4-3.9z"/>
    </svg>
  )
}

const styles = {
  container: {
    minHeight: '100vh', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    background: 'var(--bg-primary)',
  },
  card: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '48px 40px',
    textAlign: 'center',
    minWidth: '320px',
  },
  title: { fontSize: '28px', fontWeight: 700, marginBottom: '8px' },
  sub: { fontSize: '15px', color: 'var(--text-muted)', marginBottom: '32px' },
  btn: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '100%',
    background: '#fff', color: '#1f2937',
    border: 'none', borderRadius: 'var(--radius-sm)',
    padding: '12px 20px',
    fontSize: '15px', fontWeight: 600,
    cursor: 'pointer',
  },
}
