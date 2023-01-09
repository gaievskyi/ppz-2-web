import { Order } from 'modules'

export const OrderPage: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '80px'
    }}
  >
    <Order />
  </div>
)
