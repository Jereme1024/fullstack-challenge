import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCollapsed } from '../store/slices/appSlice'

export default function CollapsedButton() {
  const collapsed = useSelector((state: any) => state.app.collapsed)
  const dispatch = useDispatch()

  return (
    <>
      {collapsed ? (
        <MenuUnfoldOutlined
          className="trigger"
          onClick={() => dispatch(toggleCollapsed())}
        />
      ) : (
        <MenuFoldOutlined
          className="trigger"
          onClick={() => dispatch(toggleCollapsed())}
        />
      )}
    </>
  )
}
