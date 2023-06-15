import Header from './ui/Header'
import { Outlet } from 'react-router-dom'
import Content from './ui/Content'
import Footer from './ui/Footer'
import React from 'react'
import { useSelector } from 'react-redux'
import NotificationBody from '@shared/ui/NotificationBody'
import Notification from '@shared/ui/NotificationBody/ui/Notification'


const Layout = () => {
  const notifications = useSelector(state => state.NotificationReducer)

  return (
    <>
      <Header/>
      <Content>
        <Outlet/>
      </Content>
      <Footer/>
      <NotificationBody>
        { notifications.map((element) => {
          return <Notification key={element.id} text={ element.text }/>
        }) }
      </NotificationBody>
    </>
  )
}

export default Layout