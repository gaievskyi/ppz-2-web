import { Button } from 'components'

type CartFooterProps = {
  cartTotal: number
  totalItems: number
}

export const CartFooter: React.FC<CartFooterProps> = ({
  cartTotal,
  totalItems
}) => {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '2em',
        boxShadow: `24px 24px 48px #d4d4d4,
              -24px -24px 48px #ffffff`,
        padding: '2%'
      }}
    >
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: '2em',
          justifyContent: 'space-between',
          minHeight: '50px'
        }}
      >
        <p>Total</p>
        <p>{totalItems} items in cart</p>
        <p>${cartTotal}</p>
        <Button>Checkout</Button>
      </div>
    </div>
  )
}
