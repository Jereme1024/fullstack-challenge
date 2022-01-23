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
import { user } from './config'

const clientRequest = async (operation: any) => {
  console.log('Client request: ', {
    operationName: operation.operationName,
    variables: operation.variables,
    query: operation.query,
  })
  operation.setContext({
    headers: {
      Accept: 'application/json',
      authorization: user.token ? `Bearer ${user.token}` : '',
      anonymous: user.anonymous,
    },
  })
}

const serverUri = process.env.SERVER_URI || 'http://localhost:9000'
const client = new ApolloClient({ uri: serverUri, request: clientRequest })

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
