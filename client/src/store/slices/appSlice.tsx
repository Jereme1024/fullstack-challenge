import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'app',
  initialState: {
    collapsed: false,
  },
  reducers: {
    toggleCollapsed: (state: any) => {
      state.collapsed = !state.collapsed
    },
  },
})

export const { toggleCollapsed } = slice.actions

export default slice.reducer
