import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from '@shared/store/reducers/CartSice'
import NotificationReducer from '@shared/store/reducers/NotificationSlice'


const rootReducer = combineReducers( {
  cartReducer,
  NotificationReducer
} )
export const setupStore = () => {
  return configureStore( {
    reducer: rootReducer,
  } )
}

