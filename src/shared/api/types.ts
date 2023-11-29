export interface GoodsProps {
  _id: string
  vendor_code: string | number
  title: string
  desc: string
  price: number
  images: string | string[]
  category: string
  'fabric structure': string
  size: number[]
  color: string[]
}
export interface CatalogProps {
  id: number
  category: string
  img: string
  goods: GoodsProps[]
}
export interface QuantityInBasketProps {
  totalQuantityInBasket: number
}
export interface HeaderButtonProps {
  to: string
  imgSrc: string
  alt: string
  className: string
}
