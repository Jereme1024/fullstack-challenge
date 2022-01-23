import { createSlice } from '@reduxjs/toolkit'
import { user, token } from '../../config'

export const slice = createSlice({
  name: 'app',
  initialState: {
    collapsed: false,
    userName: user.anonymous,
    token,
  },
  reducers: {
    toggleCollapsed: (state: any) => {
      state.collapsed = !state.collapsed
    },
    logout: (state: any) => {
      state.token = ''
      state.userName = user.anonymous
    },
  },
})

export const { toggleCollapsed } = slice.actions

export default slice.reducer
