import React, { useState } from "react"
import styled from "styled-components"
import MenuIcon from "@mui/icons-material/Menu"
import SendIcon from "@mui/icons-material/Send"
import { IconButton } from "@mui/material"
import Sidebar from "./Sidebar"
const MainNav = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid lightgray;
  position: sticky;
  top: 0;
  height: 10%;
`
const Left = styled.div``
const Logo = styled.h2``
const Right = styled.div``

const SidebarContainer = styled.div`
  transform: ${(props) => props.visible && `translateX(-30%)`};
  transition: 0.5s ease;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90%;
`

const Header = () => {
  const [sideBar, setSideBar] = useState(false)
  return (
    <>
      <MainNav>
        <HeaderContainer>
          <IconButton onClick={() => setSideBar(!sideBar)}>
            <MenuIcon />
          </IconButton>
          <Logo> Logo </Logo>
          <IconButton>
            <SendIcon />
          </IconButton>
        </HeaderContainer>
        <SidebarContainer visible={sideBar}>
          <Sidebar />
        </SidebarContainer>
      </MainNav>
    </>
  )
}

export default Header
