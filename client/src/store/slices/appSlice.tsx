import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { user, token } from '../../config'

interface updateUserInput {
  userName: string
  token: string
}

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
    updateUser: (state: any, action: PayloadAction<updateUserInput>) => {
      const { userName, token } = action.payload
      state.token = token
      state.userName = userName
      user.token = token
      user.gqlClient.resetStore()
    },
    login: (state: any) => {
      // FIXME: skip auth
      // get challenge with publicAddress from auth
      // sign challenge with meta mask
      // verify challenge from auth then get jwt
      // updateUser() by jwt
    },
    logout: (state: any) => {
      state.token = ''
      state.userName = user.anonymous
      user.token = ''
    },
  },
})

export const { toggleCollapsed, updateUser, login, logout } = slice.actions

export default slice.reducer
