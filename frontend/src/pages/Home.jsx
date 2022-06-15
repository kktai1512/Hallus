import { lightBlue } from "@mui/material/colors"
import React from "react"
import { useSelector } from "react-redux"

const Home = () => {
  const users = useSelector((state) => state.user)
  console.log(users)
  return <div style={{ backgroundColor: lightBlue, height: "100%" }}></div>
}

export default Home
