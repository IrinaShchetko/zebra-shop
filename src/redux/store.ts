import { configureStore } from '@reduxjs/toolkit'
import { authReducer, basketReducer, catalogReducer, favoritesReducer, goodsReducer, searchReducer } from '.'
import { combineReducers } from 'redux'

export const reducers = combineReducers({
  catalog: catalogReducer,
  goods: goodsReducer,
  favorites: favoritesReducer,
  basket: basketReducer,
  search: searchReducer,
  auth: authReducer,
})
export const store = configureStore({
  reducer: reducers,
  devTools: true,
})

export type RootStore = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
