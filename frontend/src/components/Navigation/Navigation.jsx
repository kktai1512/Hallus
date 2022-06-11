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
  height: 8vh;
  background-color: white;
`
const Left = styled.div``
const Logo = styled.h2``
const Right = styled.div``

const Header = ({ onClick }) => {
  return (
    <>
      <HeaderContainer>
        <IconButton onClick={onClick}>
          <MenuIcon />
        </IconButton>
        <Logo> Logo </Logo>
        <IconButton>
          <SendIcon />
        </IconButton>
      </HeaderContainer>
    </>
  )
}

export default Header
