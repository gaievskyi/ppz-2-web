import { Newsletter } from 'modules'

export const Footer: React.FC = () => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      height: '300px',
      justifyContent: 'space-evenly',
      marginTop: '50px'
    }}
  >
    <Newsletter />
  </div>
)
