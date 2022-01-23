import React from 'react'
import { Avatar, Dropdown, Menu, Space } from 'antd'
import { Typography } from 'antd'
import { useSelector } from 'react-redux'
const { Text } = Typography
import { UserOutlined, GitlabOutlined, LogoutOutlined } from '@ant-design/icons'

export default function UserPanel() {
  const userName = useSelector((state: any) => state.app.userName)
  const token = useSelector((state: any) => state.app.token)

  function handleMenuClick(e: any) {
    console.log('click', e)
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<GitlabOutlined />} disabled={token !== ''}>
        Login with MetaMask
      </Menu.Item>
      <Menu.Divider />
      <Menu.Divider />
      <Menu.Item
        danger
        key="2"
        icon={<LogoutOutlined />}
        disabled={token === ''}
      >
        Logout
      </Menu.Item>
    </Menu>
  )

  return (
    <Space size={10}>
      <Avatar
        style={{
          backgroundColor: '#f56a00',
          verticalAlign: 'middle',
        }}
      >
        JH
      </Avatar>
      <Dropdown.Button
        overlay={menu}
        placement="bottomCenter"
        icon={<UserOutlined />}
      >
        <Text strong={true}>{userName}</Text>
      </Dropdown.Button>
    </Space>
  )
}
