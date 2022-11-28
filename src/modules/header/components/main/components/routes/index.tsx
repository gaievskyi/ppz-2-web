import { Link } from '@tanstack/react-router'

export const Routes: React.FC = () => (
  <div
    style={{
      display: 'flex',
      fontSize: '0.8em',
      gap: '3em'
    }}
  >
    <Link
      to="/"
      style={{
        color: 'black',
        textDecoration: 'none'
      }}
    >
      Home
    </Link>
    <Link
      to="/store"
      style={{
        color: '#cacaca',
        textDecoration: 'none'
      }}
    >
      Store
    </Link>
    <Link
      to="/about"
      style={{
        color: '#cacaca',
        textDecoration: 'none'
      }}
    >
      About
    </Link>
    <Link
      to="/contact"
      style={{
        color: '#cacaca',
        textDecoration: 'none'
      }}
    >
      Contact
    </Link>
  </div>
)
