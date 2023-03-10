/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/context/AuthContext";
import { Form, Container,Img, Title,Label,Input,Button } from "./LoginStyles.js";
import logo from "../../assets/Logo/logo.png";

function LoginPage() {
  const [user, setUser] = useState<string>('')
  const [token, setToken] = useState<string>('')
  const [error, setError] = useState<boolean | string>(false)
  const {dispatch} = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent)=> {
    e.preventDefault()
    if(user ==="Marieke" && token ==="test") {    
      console.log("ok")   
      dispatch({type:"login", payload:{user:user, token:token}})
      navigate('/dashboard')
    } else {
      alert("Username and/or Password is incorrect.")
      setError(true)
      console.log(error)
    }  
 }

  return (
    <Container>
      <Form onSubmit={(_e: React.SyntheticEvent) => handleLogin}>
        <Img src={logo}/>
        <Title>Hotel Miranda Admin Dashboard</Title>
        <Label>Username</Label>
        <Input 
          placeholder="Marieke" 
          type= "text" 
          name = "user"
          value={user} 
          onChange={(e) => setUser(e.target.value)} 
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