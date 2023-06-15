import { notificationSlice } from '@shared/store/reducers/NotificationSlice'
import { useDispatch } from 'react-redux'


const useNotification = (text) => {
  const { addToNotification, deleteFromNotification } = notificationSlice.actions
  const dispatch = useDispatch()


  return () => {
    dispatch(addToNotification(text))
    setTimeout(() => dispatch(deleteFromNotification()), 3000)
  }
}

export default useNotification