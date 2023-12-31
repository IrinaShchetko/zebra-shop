import Api from '.'
import { GoodsProps } from './types'

class FavoritesApi extends Api {
  endpoint = 'favorites/'

  async fetchFavorites(): Promise<GoodsProps[]> {
    const response = await this.api.get<GoodsProps[]>(this.endpoint)
    const products = response.data

    products.forEach(item => {
      if (Array.isArray(item.images) && item.images.length > 0) {
        item.images = item.images.map(img => img)
      }
    })
    return products
  }

  async addToFavorites(item: GoodsProps): Promise<void> {
    await this.api.post(this.endpoint, item)
  }

  async removeFromFavorites(item: GoodsProps): Promise<void> {
    await this.api.delete(`${this.endpoint}:${item._id}`, { data: item })
  }
}
export default new FavoritesApi()
