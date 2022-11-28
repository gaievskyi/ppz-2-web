import { Header, Newsletter, Offers } from 'modules'

export const StorePage: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '80px'
    }}
  >
    <Offers />
    <Newsletter />
  </div>
)
