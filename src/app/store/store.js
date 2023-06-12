import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/CartSice'


const rootReducer = combineReducers( {
  cartReducer
} )
export const setupStore = () => {
  return configureStore( {
    reducer: rootReducer,
  } )
}

