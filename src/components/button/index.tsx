import { PropsWithChildren, ButtonHTMLAttributes } from 'react'

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: 'none',
      border: '1px solid black',
      borderRadius: '10px',
      cursor: 'pointer',
      maxWidth: '300px',
      padding: 10,
      transition: '0.3s ease-out all'
    }}
  >
    {children}
  </button>
)
