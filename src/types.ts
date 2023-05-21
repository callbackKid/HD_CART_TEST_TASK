export type ProductType = {
  id: number
  title: string
  description: string
  price: number
  image: string
}

export type ProductNode = {
  node: ProductType
}

export type QueryType = {
  allProduct: {
    edges: ProductNode[]
  }
}
