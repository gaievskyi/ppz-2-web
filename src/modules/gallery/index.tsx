import Carousel from 'better-react-carousel'
import { useCart } from 'react-use-cart'
import { Button } from 'components'

export const Gallery: React.FC = () => {
  const { addItem } = useCart()

  return (
    <div
      style={{
        margin: '2em 0'
      }}
    >
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginBottom: '1em'
        }}
      >
        <h1
          style={{
            lineHeight: 0
          }}
        >
          Explore our products
        </h1>
        <p
          style={{
            lineHeight: 0
          }}
        >
          Choose the most appropriate nutrition for your pet.
        </p>
      </div>
      <Carousel
        cols={4}
        rows={2}
        gap={0}
        loop
        autoplay={5000}
        showDots
        hideArrow
      >
        {Array(16)
          .fill(null)
          .map((_, index) => (
            <Carousel.Item key={index}>
              <div
                style={{
                  alignItems: 'center',
                  border: '10px solid white',
                  borderRadius: '2em',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  margin: '3em',
                  padding: '2em 1em'
                }}
              >
                <img
                  width={325}
                  height={325}
                  src={`nutrition${++index}.png`}
                  alt="asd"
                />
                <div
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    gap: '0.5em'
                  }}
                >
                  <h3
                    style={{
                      color: 'red',
                      fontWeight: '300',
                      textDecoration: 'line-through'
                    }}
                  >
                    $129
                  </h3>
                  <h2>$99</h2>
                </div>
                <Button
                  onClick={() =>
                    addItem({ id: '1', price: 99, title: 'Pedigree' })
                  }
                >
                  To cart
                </Button>
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  )
}
