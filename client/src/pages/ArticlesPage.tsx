import React from 'react'
import { Layout, Typography, List, Avatar } from 'antd'
const { Header, Content } = Layout
const { Title } = Typography
import CollapsedButton from '../containers/CollapsedButton'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'

const ARTICLES = gql`
  query {
    articles {
      id
      author
      title
      content
    }
  }
`
interface Article {
  id: string
  author: string
  title: string
  content: string
}

interface ArticleItem extends Article {
  href: string
  avatar: string
}

export default function ArticlesPage() {
  const { loading, error, data } = useQuery(ARTICLES)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const listData = data.articles.map((article: Article) => ({
    ...article,
    avatar: 'https://joeschmoe.io/api/v1/random',
    href: `/articles/${article.id}`,
  }))

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
            defaultPageSize: 3,
            pageSizeOptions: [3, 5, 8],
          }}
          dataSource={listData}
          renderItem={(item: ArticleItem) => (
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
