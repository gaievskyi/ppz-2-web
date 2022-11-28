import { OfferCard } from './components'

export const Offers: React.FC = () => (
  <main
    style={{
      alignItems: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1em',
      justifyContent: 'center',
      padding: '1em 10%'
    }}
  >
    <OfferCard />
    <OfferCard />
  </main>
)
