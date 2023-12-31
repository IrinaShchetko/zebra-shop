import styles from './styles.module.css'
import { CardProduct } from '../../components/cardProduct'
import { useNavigate } from 'react-router-dom'
import { addToBasketAsync, addToFavoritesAsync, removeFromBasketAsync, removeFromFavoritesAsync } from '../../redux'
import { useFavoritesAndBasket } from '../../shared/hooks/useFavoritesAndBasket'
import { BackButton } from '../../components/backButton'
import { usePrivate } from '../../shared/context/PrivateContext'
import { useEffect } from 'react'

export const Favorites = () => {
  const { favorites, basket, handleActionForFavorites, handleActionForBasket } = useFavoritesAndBasket()
  const { privateVisibility } = usePrivate()
  const navigate = useNavigate()
  useEffect(() => {
    if (!privateVisibility) {
      const timeoutId = setTimeout(() => {
        navigate('/account', { replace: true })
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [navigate, privateVisibility])

  return (
    <div className="container">
      <BackButton />
      <>
        {privateVisibility ? (
          <section className={styles.favorites}>
            {favorites.map(item => {
              const isFavorite = favorites.some(favoritesItem => favoritesItem._id === item._id)
              const isInBasket = basket.some(basketItem => basketItem._id === item._id)
              return (
                <CardProduct
                  key={item._id}
                  item={item}
                  onFavoriteClick={() => handleActionForFavorites(item, isFavorite, addToFavoritesAsync, removeFromFavoritesAsync)}
                  isFavorite={isFavorite}
                  onBasketClick={() => handleActionForBasket(item, isInBasket, addToBasketAsync, removeFromBasketAsync)}
                  isInBasket={isInBasket}
                />
              )
            })}
          </section>
        ) : (
          <h2 className={styles.greeting}>Please log in or register to view your favorites.</h2>
        )}
      </>
    </div>
  )
}
