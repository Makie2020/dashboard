/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Form, Container,Img, Title,Label,Input,Button} from './LoginStyles';
import logo from "../../assets/Logo/logo.png";
import {useLogin}  from '../../hooks/useLogin';
import fetch from 'cross-fetch';

function LoginPage() {
  const [userName, setName] = useState<string>('')
  const [passwordLogin, setPassword] = useState<string>('')
  const navigate = useNavigate();
  const {login} = useLogin();

  const handleLogin = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {    
    e.preventDefault();
    const response = await fetch("http://localhost:3002/login",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          password: passwordLogin,
        }),
      }
    );
    const token = await response.json();
    if (token !== "Missing credentials") {
      login(userName, token);
      localStorage.setItem(
        "dashboard",
        JSON.stringify({
          isAuth: true,
          name: userName,
          token: token,
        })
      );
      navigate('/dashboard')
    } else {
      alert("Username and/or Password is incorrect.");
      (e.target as HTMLFormElement).reset();
    }
  }  
  return (
    <Container>
      <Form>
        <Img src={logo}/>
        <Title>Hotel Miranda Admin Dashboard</Title>
        <Label>Username</Label>
        <Input 
          placeholder="Marieke" 
          type= "text" 
          name = "name"
          value={userName} 
          onChange={(e) => setName(e.target.value)} 
          >
          </Input>
        <Label>Password</Label>
        <Input 
          placeholder="test"  
          type="password" 
          name="password"
          value={passwordLogin} 
          onChange={(e) => setPassword(e.target.value)} 
          >
        </Input>
        <Button onClick={(e) => {handleLogin(e)}}>Login in</Button>
      </Form>
    </Container>
  );
}

export default LoginPage;