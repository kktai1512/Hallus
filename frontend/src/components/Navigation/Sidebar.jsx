import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import useComponentVisible from "./UseVisibleHooks"
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: null,
    cName: "nav-text",
  },
  {
    title: "Content",
    path: "/content",
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
  background-color: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(10px);
  width: 100%;
  text-decoration: none;
  height: 100%;
  li {
    padding: 25px;
    color: #424040;
    font-weight: 800;
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
