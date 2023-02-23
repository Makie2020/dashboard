import * as React from "react";
import { useAuth } from "../../hooks/useAuth";
import styled from "styled-components";
import logo from "../../assets/Logo/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router";


const Container = styled.div `
  background-color: #135846;
  font-family: "Poppins";
  text-align: center;
  height: 100vh;
  margin: 0;
  padding: 0;
`

const Form = styled.form `
  width: 40%;
  border: 1px solid #135846;
  margin:0 auto ;
`
const Img = styled.img `
  margin-top: 5em;
`
const Title = styled.h1`
  font-weight: 600;
  color: white;
`
const Input = styled.input `
  border-radius: 12px;
  border: none;
  width: 220px;
  height: 50px;
  margin: 1em;
  ::placeholder{
    padding-left: 1em;
    font-family: "Poppins";
  }
`
const Button = styled.button `
  border-radius: 12px;
  border: none;
  width: 215px;
  height: 50px;
  background-color: #5AD07A;
  font-family: "Poppins";
`

function LoginPage(props) {
  const {dispatch} = useAuth();
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')
  const navigate = useNavigate();
  const [error, setError] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    if(username ==="Marieke" && token ==="test") {       
      dispatch({type:"LOGIN", value:{username:"", token:""}})
      navigate('/dashboard')
    } else {
      setError(true)
    }  
 }

  return (
    <Container>
      <Img src={logo}/>
      <Form onSubmit={handleLogin}>
        <Title>Hotel Admin Dashboard</Title>
        <Input 
          placeholder="Username" 
          type= "text" 
          name = "username"
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          >
          </Input>
        <Input 
          placeholder="Password"  
          type="password" 
          name="token"
          value={token} 
          onChange={(e) => setToken(e.target.value)} 
          >
          </Input>
        <Button type="submit">Login in</Button>
      </Form>

    </Container>
  );
}

export default LoginPage;