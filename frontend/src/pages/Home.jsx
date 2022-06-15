import { lightBlue } from "@mui/material/colors"
import React from "react"
import { useSelector } from "react-redux"

const Home = () => {
  const users = useSelector((state) => state.user)
  console.log(users)
  return <div style={{ backgroundColor: "grey", height: "200vh" }}></div>
}

export default Home
