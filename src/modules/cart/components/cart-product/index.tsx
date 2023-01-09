import { Paper } from '@mui/material'
import { useCart } from 'react-use-cart'
import { Button } from 'components'

type CartProductProps = {
  id: string
  title: string
  price: number
  quantity?: number
  image?: string
}

export const CartProduct: React.FC<CartProductProps> = ({
  id,
  title,
  price,
  quantity,
  image
}) => {
  const { updateItemQuantity, removeItem } = useCart()

  const decrement = () => {
    if (quantity) {
      updateItemQuantity(id, quantity - 1)
    }
  }

  const increment = () => {
    if (quantity) {
      updateItemQuantity(id, quantity + 1)
    }
  }

  return (
    <div
      style={{
        alignItems: 'center',
        background: 'white',
        borderRadius: '2em',
        boxShadow: `24px 24px 40px #c7c7c7,
              -24px -24px 40px #ffffff`,
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1em',
        padding: '0 2%'
      }}
    >
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <Paper variant="outlined">
          <img
            src={image}
            alt=""
            style={{
              height: '100px',
              width: '100px'
            }}
          />
        </Paper>

        <div style={{ marginLeft: 5, maxWidth: '200px' }}>
          <h1>{title}</h1>
          <h2>€{price}</h2>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1em' }}>
        <Button onClick={decrement}>-</Button>
        <p>{quantity}</p>
        <Button onClick={increment}>+</Button>
      </div>
      <Button onClick={() => removeItem(id)}>Remove</Button>
    </div>
  )
}
