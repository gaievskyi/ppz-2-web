import { Contact } from 'modules'

export const ContactPage: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '80px'
    }}
  >
    <Contact />
  </div>
)
