import MainPage from '@pages/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@widgets/Layout'
import { NotFound } from '@widgets/NotFound/NotFound'
import { Provider } from 'react-redux'
import React from 'react'
import { setupStore } from './store/store'
import './styles/index'


const store = setupStore()

const App = () => {
  return (
      <Provider store={ store }>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={ <Layout/> }>
                <Route index element={ <MainPage/> }/>
                <Route path="*" element={ <NotFound/> }/>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
  )
}

export default App
