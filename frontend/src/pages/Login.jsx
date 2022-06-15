import { Button } from "@mui/material"
import React from "react"
import styled from "styled-components"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "./UserSlice"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  height: 100%;
  align-items: center;
  border-bottom: 1px solid lightgray;
  background-color: lightcoral;
`
const FormContainer = styled.form`
  width: 75%;
  height: 25%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 25px;
  justify-content: space-between;
  background-color: white;
`
const Input = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 60%;
    border: none;
    outline: none;
    margin-left: auto;
    border-bottom: 1px solid black;
  }
`

const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user.users)
  const handleChange = (e, setsomething) => {
    setsomething(e.target.value)
  }

  const handleLogin = () => {
    const curr_user = { username, password }
    dispatch(loginUser(curr_user))
    users.filter((user) => user.username === curr_user.username && user.password === curr_user.password)
  }
  return (
    <Container>
      <FormContainer>
        <Input>
          <label>Username</label>
          <input onChange={(e) => handleChange(e, setUsername)}></input>
        </Input>
        <Input>
          <label>Password</label>
          <input type="password" onChange={(e) => handleChange(e, setPassword)}></input>
        </Input>
      </FormContainer>
      <Button onClick={handleLogin} style={{ margin: "20px" }}>
        Login
      </Button>
    </Container>
  )
}

export default Login
