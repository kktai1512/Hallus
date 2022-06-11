import { configureStore } from "@reduxjs/toolkit"
import UserReducer from "./pages/UserSlice"

export default configureStore({
  reducer: {
    user: UserReducer,
  },
})
