import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: null,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: null,
    cName: "nav-text",
  },
  {
    title: "Register",
    path: "/register",
    icon: null,
    cName: "nav-text",
  },
]
const SidebarWrapper = styled.ul`
  background-color: #164846;
  opacity: 100%;
  width: 30%;
  text-decoration: none;
  height: 100%;

  li {
    padding: 10px;
    color: #ffffff;
    font-weight: 900;
  }
  li:after {
    content: ".";
  }
  a {
    text-decoration: none;
  }
`
const Sidebar = () => {
  return (
    <SidebarWrapper>
      {SidebarData.map((tabs) => (
        <Link to={tabs.path}>
          <li>{tabs.title}</li>
        </Link>
      ))}
    </SidebarWrapper>
  )
}

export default Sidebar
