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

const client = new ApolloClient({ uri: 'http://localhost:5678' })

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
    </>
  )
}

export default App
