import React, { useEffect, useState } from 'react'
import { Card, Layout, Typography } from 'antd'
const { Content } = Layout
const { Text } = Typography
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import Breadcrumbs, { BreadCrumb } from '../components/Breadcrumbs/Breadcrumbs'
import styled from 'styled-components'
import Meta from 'antd/lib/card/Meta'
import PageHeader from '../containers/PageHeader'

const CssWrapper = styled.div`
  .lastBreadCrumb {
    color: black;
  }

  .Breadcrumbs {
    width: 100%;
    margin: 14px 14px 14px 0px !important;
  }

  .ant-breadcrumb-link > a > span {
    color: #1890ff;
  }
`

const ARTICLE = gql`
  query Article($id: String!) {
    article(id: $id) {
      id
      author
      title
      content
    }
  }
`

export default function ArticlePage() {
  const params = useParams()
  const { id } = params
  const [article, setArticle] = useState({
    id: '',
    author: '',
    title: '',
    content: '',
  })

  const { loading, error, data, refetch } = useQuery(ARTICLE, {
    variables: { id },
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
    console.log('article', data, params)
    if (data) {
      const { article } = data
      setArticle(article)
    }
  }, [data])

  const breadcrumbs: BreadCrumb[] = [
    { to: `/articles`, text: 'Articles' },
    { text: `${id}` },
  ]

  return (
    <Layout className="site-layout">
      <PageHeader />
      <Content className="site-layout-background my-content">
        <CssWrapper>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Card hoverable title={article.title}>
            <Meta description={article.author} />
            <Text>{article.content}</Text>
          </Card>
        </CssWrapper>
      </Content>
    </Layout>
  )
}
