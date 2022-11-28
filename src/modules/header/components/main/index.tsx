import { useState } from 'react'
import { BsCart } from 'react-icons/bs'
import { Button } from 'components'
import { Cart } from 'modules'
import { Logo, Routes } from './components'

export const Main: React.FC = () => {
  const [isCartOpened, setIsCartOpened] = useState(false)

  const showCart = () => {
    setIsCartOpened(true)
  }

  const closeCart = () => {
    setIsCartOpened(false)
  }

  return (
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
      <div
        style={{
          display: 'flex',
          gap: '1em'
        }}
      >
        <Button>Support</Button>
        <Button onClick={showCart}>
          <BsCart />
        </Button>
      </div>
      <Cart opened={isCartOpened} close={closeCart} />
    </nav>
  )
}

{
  /* <button
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
    </button> */
}
