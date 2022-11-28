import { Link } from '@tanstack/react-router'

export const Authorization: React.FC = () => (
  <div
    style={{
      display: 'flex',
      gap: '1em',
      textTransform: 'uppercase'
    }}
  >
    <Link
      to="/login"
      style={{
        color: 'black',
        textDecoration: 'none'
      }}
    >
      Sign in
    </Link>
    <Link
      to="/login"
      style={{
        color: '#cacaca',
        textDecoration: 'none'
      }}
    >
      Sign up
    </Link>
  </div>
)
