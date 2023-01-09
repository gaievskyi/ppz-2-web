export type Product = {
  id: string
  description: string
  name: string
  price: number
  type: string
  productPicture: {
    source: string
  }
}

export type ProductsResponse = {
  message: string
  product: Product[]
  success: boolean
}
