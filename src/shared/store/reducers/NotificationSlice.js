import { createSlice } from '@reduxjs/toolkit'
import uuid4 from 'uuid4'


const initialState = []

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addToNotification(state, action) {
      return [...state, { id: uuid4(),text: action.payload }]
    },
    deleteFromNotification(state) {
      const array =  [...state ]
      array.shift()
      return array
    }
  }
})

export default notificationSlice.reducer