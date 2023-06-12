import { createSlice } from '@reduxjs/toolkit'


const initialState = {}

export const cartSlice = createSlice( {
  name: 'cart',
  initialState,
  reducers: {
    addToCart( state, action ) {
      const { name, img, id, price } = action.payload
      if ( state[id] ) {
        state[id].amount += 1
      } else {
        state[id] = { name, img, price, amount: 1 }
      }
    },
    deleteFromCart( state, action ) {
      delete state[action.payload]
    }
  }
} )

export default cartSlice.reducer