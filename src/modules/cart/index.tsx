import { useEffect } from 'react'
import { useCart } from 'react-use-cart'
import { Button } from 'components'
import { CartFooter, CartHeader, CartProduct } from './components'

type CartProps = {
  opened: boolean
  close: () => void
}

const INITIAL_DOCUMENT_TITLE = 'PPZII · Pet nutrition store'

export const Cart: React.FC<CartProps> = ({ opened, close }) => {
  const { isEmpty, totalUniqueItems, items, cartTotal, totalItems } = useCart()

  const title = `Cart (${totalUniqueItems}) items`

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden'
      document.title = title
    } else {
      document.body.style.overflow = 'unset'
      document.title = INITIAL_DOCUMENT_TITLE
    }
  }, [opened])

  return (
    <>
      {opened && (
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            height: '100vh',
            left: 0,
            padding: '5%',
            position: 'absolute',
            top: 0,
            width: '100vw',
            zIndex: '2'
          }}
        >
          <Button onClick={close}>X</Button>
          <CartHeader />
          {items.map((item) => (
            <CartProduct
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}

          <CartFooter cartTotal={cartTotal} totalItems={totalItems} />
        </div>
      )}
    </>
  )
}
