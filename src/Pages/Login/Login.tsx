/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Form, Container,Img, Title,Label,Input,Button } from "./LoginStyles.js";
import logo from "../../assets/Logo/logo.png";
import { useAuth } from '../../App';

function LoginPage() {
  const [username, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const {dispatch, user, token} = useAuth();
  const navigate = useNavigate();


  const handleLogin = (e: React.FormEvent)=> {
    e.preventDefault()
    if(username === user && password === token) {
      if (dispatch) {
        dispatch({type: "LOGIN", payload: true})
      }
      navigate('/dashboard')
      localStorage.setItem('Dashboard', JSON.stringify(user));
    } else {
      alert("Username and/or Password is incorrect.");
      (e.target as HTMLFormElement).reset()
    }  
  }

  return (
    <Container>
      <Form onSubmit={(e: React.SyntheticEvent) => handleLogin(e)}>
        <Img src={logo}/>
        <Title>Hotel Miranda Admin Dashboard</Title>
        <Label>Username</Label>
        <Input 
          placeholder="Marieke" 
          type= "text" 
          name = "username"
          value={username} 
          onChange={(e) => setUserName(e.target.value)} 
          >
          </Input>
        <Label>Password</Label>
        <Input 
          placeholder="test"  
          type="password" 
          name="token"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          >
          </Input>
        <Button type="submit">Login in</Button>
      </Form>
    </Container>
  );
}

export default LoginPage;