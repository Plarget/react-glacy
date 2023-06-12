import Header from './ui/Header'
import { Outlet } from 'react-router-dom'
import Content from './ui/Content'
import Footer from './ui/Footer'


const Layout = () => {
  return (
      <>
        <Header/>
        <Content>
          <Outlet/>
        </Content>
        <Footer/>
      </>
  )
}

export default Layout