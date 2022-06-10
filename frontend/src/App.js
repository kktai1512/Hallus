import React from "react"
import Navigation from "./components/Navigation/Navigation"
import Card from "./components/Card"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"

import Home from "./pages/Home"

const App = () => {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Router>
  )
}

export default App
