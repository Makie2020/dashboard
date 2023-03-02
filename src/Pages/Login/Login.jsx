/* eslint-disable prettier/prettier */
import * as React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Form, Container,Img, Title,Label,Input,Button } from "./LoginStyles";
import logo from "../../assets/Logo/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router";

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
      alert("Username and/or Password is incorrect.")
      setError(true)
    }  
 }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Img src={logo}/>
        <Title>Hotel Miranda Admin Dashboard</Title>
        <Label>Username</Label>
        <Input 
          placeholder="Marieke" 
          type= "text" 
          name = "username"
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          >
          </Input>
        <Label>Password</Label>
        <Input 
          placeholder="test"  
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