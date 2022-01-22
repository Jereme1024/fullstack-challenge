import './App.css'
import React from 'react'
import reduxStore from './store/redux'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import NavSider from './routes/NavSider'
import RouterView from './routes/RouteView'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const serverUri = process.env.SERVER_URI || 'http://localhost:9000'
const client = new ApolloClient({ uri: serverUri })

function App() {
  return (
    <>
      <Provider store={reduxStore}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Layout>
              <NavSider />
              <RouterView />
            </Layout>
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
      <ToastContainer
        position="top-center"
        transition={Slide}
        autoClose={1024}
      />
    </>
  )
}

export default App
