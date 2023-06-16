import MainPage from '@pages/MainPage'
import { Route, Routes } from 'react-router-dom'
import Layout from '@widgets/Layout'
import Error404Page from '@pages/Error404Page'
import React from 'react'
import { withProviders } from '@/app/providers'
import CatalogButterPage from '@pages/CatalogButterPage'
import './styles/index'


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <MainPage/> }/>
          <Route path="catalog" element={ <Layout/> } />
          <Route path="catalog/butter" element={ <CatalogButterPage/> } />
          <Route path="*" element={ <Error404Page/> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default withProviders(App)
