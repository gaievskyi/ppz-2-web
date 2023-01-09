import { Button, Stack } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import Carousel from 'better-react-carousel'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useCart } from 'react-use-cart'
import { client, ProductsResponse } from 'common'

const Skeletons = () => (
  <Carousel cols={4} rows={2} gap={0} loop autoplay={5000} showDots hideArrow>
    {[...Array(8)].map((_, index) => (
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
          <div
            style={{
              backgroundColor: 'lightgray',
              borderRadius: '2rem',
              height: '325px',
              transition: 'all 0.5s ease-in-out',
              width: '325px',
              willChange: 'transform'
            }}
          />
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
)

export const Gallery: React.FC<{ dev: boolean }> = ({ dev }) => {
  const { addItem } = useCart()

  const productsQuery = useQuery(['Get products'], async () => {
    const data = await client
      .get<ProductsResponse>('/products')
      .then((res) => res.data)
    return data
  })

  const notify = () =>
    toast('Product added to cart', {
      position: 'bottom-right',
      type: 'success'
    })

  return (
    <div
      style={{
        margin: '2em 0'
      }}
    >
      {productsQuery.isLoading && <Skeletons />}
      {productsQuery.isError && <p>Error</p>}
      {productsQuery.isSuccess && (
        <Carousel
          cols={4}
          rows={2}
          gap={0}
          loop
          autoplay={5000}
          showDots
          hideArrow
        >
          {productsQuery.data?.product?.map((product) => (
            <Carousel.Item key={product.id}>
              <div
                style={{
                  alignItems: 'center',
                  border: '10px solid white',
                  borderRadius: '2em',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  margin: '3em',
                  padding: '3em'
                }}
              >
                <img
                  width={325}
                  height={325}
                  src={product.productPicture.source}
                  alt="asd"
                />
                {dev && (
                  <Stack
                    gap={2}
                    sx={{
                      marginTop: '1em'
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        '&:hover': {
                          background: '#3c3c3c'
                        },
                        background: 'black'
                      }}
                    >
                      Remove
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        '&:hover': {
                          background: '#3c3c3c'
                        },
                        background: 'black'
                      }}
                    >
                      Edit
                    </Button>
                  </Stack>
                )}
                <div
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    gap: '0.5em'
                  }}
                >
                  <h3>{product.name}</h3>
                  <p>{product.price}€</p>
                </div>
                <Button
                  onClick={() => {
                    addItem(product)
                    notify()
                  }}
                  style={{
                    marginTop: '1em'
                  }}
                >
                  Add to cart
                </Button>
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    color: 'black',
                    marginTop: '1em',
                    textDecoration: 'none'
                  }}
                >
                  Discover
                </Link>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      <ToastContainer />
    </div>
  )
}
