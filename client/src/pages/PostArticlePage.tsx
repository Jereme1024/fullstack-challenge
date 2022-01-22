import React from 'react'
import { Layout, Typography, Form, Button, Input } from 'antd'
const { Header, Content } = Layout
const { Title } = Typography
import CollapsedButton from '../containers/CollapsedButton'
import defaultContent from './mock/content'
import { gql } from 'apollo-boost'
import { useMutation } from 'react-apollo'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 2,
    },
    sm: {
      span: 0,
    },
  },
}

const CREATE_ARTICLE = gql`
  mutation CreateArticle($title: String!, $content: String!) {
    createArticle(article: { title: $title, content: $content }) {
      id
    }
  }
`

export default function PostArticlePage() {
  const [createArticle, { data, loading, error }] = useMutation(CREATE_ARTICLE)

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
    if (data) {
      toast.success(`Successful.`)
    }
  }, [data])

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
    createArticle({ variables: values })
  }

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <CollapsedButton />
      </Header>
      <Content className="site-layout-background my-content">
        <Title level={3}>Post an article</Title>
        <Form name="article" {...formItemLayout} onFinish={onFinish}>
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                message: 'Please input the title',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="content"
            label="Content"
            rules={[
              {
                required: true,
                message: 'Please input the content',
              },
            ]}
          >
            <Input.TextArea
              rows={10}
              showCount
              maxLength={512}
              defaultValue={defaultContent}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  )
}
