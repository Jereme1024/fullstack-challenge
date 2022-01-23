import React from 'react'
import { Layout, Typography } from 'antd'
const { Content } = Layout
const { Title } = Typography
import PageHeader from '../containers/PageHeader'

export default function LoadingPage() {
  return (
    <Layout className="site-layout">
      <PageHeader />
      <Content className="site-layout-background my-content">
        <Title level={5}>Loading...</Title>
      </Content>
    </Layout>
  )
}
