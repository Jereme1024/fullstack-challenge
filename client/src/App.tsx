import './App.css'
import React from 'react'
import reduxStore from './store/redux'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import NavSider from './routes/NavSider'
import RouterView from './routes/RouteView'

function App() {
  return (
    <>
      <Provider store={reduxStore}>
        <BrowserRouter>
          <Layout>
            <NavSider />
            <RouterView />
          </Layout>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
