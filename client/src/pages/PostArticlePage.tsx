import React from 'react'
import { Layout, Typography, Form, Button, Input } from 'antd'
const { Header, Content } = Layout
const { Title } = Typography
import CollapsedButton from '../containers/CollapsedButton'
import defaultContent from './mock/content'

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

export default function PostArticlePage() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
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
