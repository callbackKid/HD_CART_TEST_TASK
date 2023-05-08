import { StringMappingType } from 'typescript'

export type ProductType = {
  id: number
  title: string
  description: string
  price: number
  image: string
}

export type IndexPageData = {
  allProducts: ProductType[]
}
