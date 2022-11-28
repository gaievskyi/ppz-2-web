import { PhoneNumber, Timetable, Authorization } from './components'

export const Head: React.FC = () => (
  <div
    style={{
      alignItems: 'center',
      borderBottom: '1px solid #f2f2f2',
      display: 'flex',
      fontSize: '0.7em',
      gap: '1em',
      justifyContent: 'space-between'
    }}
  >
    <PhoneNumber />
    <Timetable />
    <Authorization />
  </div>
)
