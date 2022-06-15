import { createSlice } from "@reduxjs/toolkit"

const users = {
  users: [
    { username: "hel", password: "123" },
    { username: "221", password: "190i02" },
  ],
  isLoggedIn: false,
}
const UserSlice = createSlice({
  name: "Users",
  initialState: users,
  reducers: {
    addUser(state, action) {
      state.user += action.payloads
    },
    loginUser(state, action) {
      state.isLoggedIn = true
    },
  },
})

export const { loginUser } = UserSlice.actions
export default UserSlice.reducer
