import React, { useState } from 'react'
import styled from 'styled-components'

const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

  return (
    <Container>
        <LoginContainer>
            <Title>Login - Admin</Title>
            <ContainerInput>
                <Label
                htmlFor="user"
                >
                    user
                </Label>
                <Input 
                    id="user"
                    type="text"
                    placeholder="User Admin"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                />
            </ContainerInput>
            <ContainerInput>
                <Label
                htmlFor="password"
                >
                    password
                </Label>
                <Input 
                    id="password"
                    type="password"
                    placeholder="User Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </ContainerInput>

            <Button>Login</Button>
        </LoginContainer>
    </Container>
  )
}

const Container = styled.div`
    min-height: 70vh;
    width: 100%;
`
const LoginContainer = styled.div`
    background-color: #58555558;
    width: 400px;
    margin: 100px auto;
    border-radius: 15px;
    border: 1px solid #b2adad1a;
    color: white;
    padding: 20px;
`
const Title = styled.h3`
    padding: 20px 0 15px;
    text-align: center;
`

const ContainerInput = styled.div`
    margin: 10px 0;
`

const Label = styled.label`
    display: block;
    text-transform: uppercase;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #c6c4c4;
    padding: 8px 0;
`
const Input = styled.input`
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    width: 100%;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    border-radius: 5px;
    margin: 15px 0 10px;
    width: 100%;
    cursor: pointer;
    background-color: #77cb6e;
    transition: 1s ease all;
    &:hover{
        background-color: #638060;
    }
`
export default Login