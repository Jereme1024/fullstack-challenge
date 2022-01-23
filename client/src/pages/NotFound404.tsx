import React from 'react'
import { Layout, Typography } from 'antd'
const { Content } = Layout
const { Title } = Typography
import PageHeader from '../containers/PageHeader'

export default function NotFound404() {
  return (
    <Layout className="site-layout">
      <PageHeader />
      <Content className="site-layout-background my-content">
        <Title>404 Not Found</Title>
      </Content>
    </Layout>
  )
}
