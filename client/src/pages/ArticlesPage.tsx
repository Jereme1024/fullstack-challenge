import React, { useEffect, useState } from 'react'
import { Layout, Typography, List, Avatar } from 'antd'
const { Header, Content } = Layout
const { Title } = Typography
import CollapsedButton from '../containers/CollapsedButton'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import { toast } from 'react-toastify'

const ARTICLES = gql`
  query Articles($skip: Int, $limit: Int) {
    articles(skip: $skip, limit: $limit) {
      total
      data {
        id
        author
        title
        content
      }
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

const pageSize = 3

export default function ArticlesPage() {
  const [skip, setSkip] = useState(0)
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [current, setCurrent] = useState(1)

  const { loading, error, data, refetch } = useQuery(ARTICLES, {
    variables: { skip, limit: pageSize },
  })

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    if (loading) {
      toast.info(`Loading...`)
    }
  }, [loading])

  useEffect(() => {
    if (error) {
      toast.error(`Failed. ${error}`)
    }
  }, [error])

  useEffect(() => {
    console.log('articles', data)
    if (data) {
      const { articles } = data
      setTotal(articles.total)
      const listData = articles.data.map((article: Article) => ({
        ...article,
        avatar: 'https://joeschmoe.io/api/v1/random',
        href: `/articles/${article.id}`,
      }))
      setList(listData)
    }
  }, [data])

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
              setSkip((page - 1) * pageSize)
              setCurrent(page)
            },
            total,
            current,
            defaultCurrent: 1,
            defaultPageSize: pageSize,
          }}
          dataSource={list}
          renderItem={(item: ArticleItem) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title} 🔗</a>}
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
