import { Space } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import CollapsedButton from './CollapsedButton'
import UserPanel from './UserPanel'

export default function PageHeader() {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <CollapsedButton />
      <Space style={{ float: 'right', margin: '0px 24px' }}>
        <UserPanel />
      </Space>
    </Header>
  )
}
