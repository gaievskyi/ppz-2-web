import { Button } from 'components'
import { CategoryCard } from './components'

export const Categories: React.FC = () => (
  <main>
    <h1
      style={{
        textAlign: 'center'
      }}
    >
      Choose category
    </h1>
    <p
      style={{
        lineHeight: 0,
        textAlign: 'center'
      }}
    >
      Explore all the selected nutritions
    </p>
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1em',
        justifyContent: 'center',
        padding: '1em 10%'
      }}
    >
      <CategoryCard name="Dogs" imageURL="dog.png" />
      <CategoryCard name="Cats" imageURL="cat.jpeg" />
      <CategoryCard name="Birds" imageURL="bird.jpeg" />
      <CategoryCard name="Snakes" imageURL="snake.jpeg" />
    </div>
    <div
      style={{
        display: 'grid',
        marginTop: '2em',
        placeItems: 'center'
      }}
    >
      <Button>Explore all</Button>
    </div>
  </main>
)
