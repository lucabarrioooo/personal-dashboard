export default function Navbar({ activeTab, setTab, onLogout }) {
  const tabs = [
    { id: 'facu', label: 'Facu' },
    { id: 'globant', label: 'Globant' },
    { id: 'personal', label: 'Personal' },
  ]

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <div style={styles.brand}>Dashboard</div>
        <div style={styles.tabs}>
          {tabs.map(t => (
            <button
              key={t.id}
              style={{ ...styles.tab, ...(activeTab === t.id ? styles.tabActive : {}) }}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <button style={styles.logout} onClick={onLogout}>Salir</button>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'sticky', top: 0, zIndex: 100,
    background: 'var(--bg-secondary)',
    borderBottom: '1px solid var(--border)',
    backdropFilter: 'blur(8px)',
  },
  inner: {
    maxWidth: '1100px', margin: '0 auto',
    padding: '0 20px',
    display: 'flex', alignItems: 'center', gap: '8px',
    height: '56px',
  },
  brand: { fontWeight: 700, fontSize: '16px', marginRight: '16px', color: 'var(--accent)' },
  tabs: { display: 'flex', flex: 1, gap: '4px' },
  tab: {
    background: 'none', border: 'none',
    color: 'var(--text-muted)', fontSize: '14px', fontWeight: 500,
    padding: '6px 16px', borderRadius: 'var(--radius-sm)',
    transition: 'all 0.15s',
  },
  tabActive: {
    color: 'var(--text-primary)',
    background: 'var(--accent-light)',
  },
  logout: {
    background: 'none', border: '1px solid var(--border)',
    color: 'var(--text-muted)', fontSize: '13px',
    padding: '5px 12px', borderRadius: 'var(--radius-sm)',
  },
}
