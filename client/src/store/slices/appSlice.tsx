import { createSlice } from '@reduxjs/toolkit'
import { user, token } from '../../config'

export const slice = createSlice({
  name: 'app',
  initialState: {
    collapsed: false,
    user,
    token,
  },
  reducers: {
    toggleCollapsed: (state: any) => {
      state.collapsed = !state.collapsed
    },
  },
})

export const { toggleCollapsed } = slice.actions

export default slice.reducer
