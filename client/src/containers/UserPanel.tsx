import React, { useEffect, useState } from 'react'
import { Avatar, Dropdown, Menu, Space } from 'antd'
import { Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
const { Text } = Typography
import { UserOutlined, GitlabOutlined, LogoutOutlined } from '@ant-design/icons'
import MetaMaskOnboarding from '@metamask/onboarding'
import { updateUser, logout } from '../store/slices/appSlice'

declare global {
  interface Window {
    ethereum: any
  }
}

export default function UserPanel() {
  const userName = useSelector((state: any) => state.app.userName)
  const token = useSelector((state: any) => state.app.token)
  const [errorMsg, setErrorMsg] = useState('')
  const dispatch = useDispatch()

  async function requestMetaMask() {
    const addresses = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    console.log({ addresses })
    dispatch(updateUser({ userName: addresses[0], token: addresses[0] }))
  }

  function handleMenuClick(e: any) {
    if (e.key === '1') {
      requestMetaMask()
    } else if (e.key === '2') {
      dispatch(logout())
    }
  }

  useEffect(() => {
    if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
      setErrorMsg('MetaMask is not installed')
    }
  }, [])

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item
        key="1"
        icon={<GitlabOutlined />}
        disabled={token !== '' || !!errorMsg.length}
      >
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
      <Text style={{ color: 'red' }} strong={true}>
        {errorMsg}
      </Text>
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
