import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
  align-items: center;
  border-bottom: 1px solid lightgray;
  background-color: lightcoral;
`
const FormContainer = styled.form`
  width: 60%;
  margin: auto;
  height: 20%;
  display: flex;
  flex-direction: column;
  border: 1px white solid;
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
  return (
    <Container>
      <FormContainer>
        <Input>
          <label>Username</label>
          <input></input>
        </Input>
        <Input>
          <label>Password</label>
          <input></input>
        </Input>
      </FormContainer>
    </Container>
  )
}

export default Login
