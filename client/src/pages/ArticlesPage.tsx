import React from 'react'
import { Layout, Typography, List, Avatar } from 'antd'
const { Header, Content } = Layout
const { Title } = Typography
import CollapsedButton from '../containers/CollapsedButton'

const listData: any = []
for (let i = 0; i < 23; i++) {
  listData.push({
    id: `id-${i}`,
    author: 'author',
    avatar: 'https://joeschmoe.io/api/v1/random',
    href: '/articles',
    title: `ant design part ${i}`,
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  })
}

export default function ArticlesPage() {
  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <CollapsedButton />
      </Header>
      <Content className="site-layout-background my-content">
        <Title level={3}>Article List</Title>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page)
            },
            pageSize: 3,
          }}
          dataSource={listData}
          renderItem={(item: any) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.author}
              />
              {item.content}
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  )
}
