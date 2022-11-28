import { Head, Main } from './components'

export const Header: React.FC = () => (
  <header
    style={{
      background: 'white',
      margin: '0 auto',
      padding: '0 15%',
      width: '100%'
    }}
  >
    <Head />
    <Main />
  </header>
)
