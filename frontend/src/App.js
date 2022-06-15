import React from "react"
import Navigation from "./components/Navigation/Navigation"
import Card from "./components/Card"
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom"
import { useState } from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Content from "./pages/Content"
import styled from "styled-components"

import Home from "./pages/Home"
import Sidebar from "./components/Navigation/Sidebar"
import { useSelector } from "react-redux"

const SidebarContainer = styled.div`
  transform: ${(props) => !props.visible && `translateX(-100%)`};
  transition: 0.5s ease;
  position: fixed;
  width: 30%;
  height: 92vh;
`

const App = () => {
  const [sideBar, setSideBar] = useState(false)
  const isLogin = useSelector((state) => state.user.isLoggedIn)
  return (
    <Router>
      <Navigation onClick={() => setSideBar(!sideBar)} />
      <SidebarContainer visible={sideBar}>
        <Sidebar />
      </SidebarContainer>
      <div style={{ height: "92vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!isLogin ? <Login /> : <Navigate to="/" replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
