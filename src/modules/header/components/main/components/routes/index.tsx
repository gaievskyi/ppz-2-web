import { Link } from '@tanstack/react-router'
import { routes } from 'modules/router'

export const Routes: React.FC = () => (
  <div
    style={{
      display: 'flex',
      fontSize: '0.8em',
      gap: '3em'
    }}
  >
    {routes.map((route) => (
      <Link
        to={route.path}
        key={route.path}
        style={{
          color: 'black',
          textDecoration: 'none'
        }}
      >
        {route.path === '/' ? 'Store' : route.path.replaceAll('/', '')}
      </Link>
    ))}
  </div>
)
