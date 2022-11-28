import { Logo, Routes } from './components'

export const Main: React.FC = () => (
  <nav
    style={{
      alignItems: 'center',
      display: 'flex',
      gap: '1em',
      justifyContent: 'space-between',
      textTransform: 'uppercase'
    }}
  >
    <Logo />
    <Routes />
    <button
      style={{
        backgroundColor: '#FFE102',
        border: 'none',
        borderRadius: '1em',
        cursor: 'pointer',
        fontSize: '0.8em',
        letterSpacing: '1px',
        maxWidth: '300px',
        padding: '0.4em 2em',
        textTransform: 'uppercase'
      }}
    >
      Support
    </button>
  </nav>
)
