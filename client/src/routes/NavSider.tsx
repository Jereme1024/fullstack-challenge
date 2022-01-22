import React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { ProfileOutlined, EditOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'

const { Sider } = Layout

const links = [
  {
    text: 'Articles',
    to: '/articles',
    icon: <ProfileOutlined />,
  },
  {
    text: 'Post article',
    to: '/postArticle',
    icon: <EditOutlined />,
  },
]

export default function NavSider() {
  const collapsed = useSelector((state) => state.app.collapsed)

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
        {links.map((link, index) => (
          <Menu.Item key={index} icon={link.icon}>
            <NavLink to={link.to}>{link.text}</NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}
