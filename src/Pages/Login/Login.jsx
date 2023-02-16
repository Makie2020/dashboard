import * as React from "react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import styled from "styled-components";
import logo from "../../assets/Logo/logo.png"

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

function LoginPage() {
  const { login } = useAuth();
  const [usernameInput, setusernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let hardcodedCred = {
      username: 'Marieke',
      password: 'test'
  }

  if ((usernameInput === hardcodedCred.username) && (passwordInput === hardcodedCred.password)) {
      const data = new FormData(event.currentTarget);
      login({
        username: data.get("username"),
        password: data.get("password")
      });
  } else {
      alert('wrong email or password combination');
  }

  };
  return (
    <Container>
      <Img src={logo}/>
      <Form onSubmit={handleSubmit} >
        <Title>Hotel Admin Dashboard</Title>
        <Input 
          placeholder="Username" 
          type= "text" 
          name="username" 
          onChange={(e) => setusernameInput(e.target.value)}
          >
          </Input>
        <Input 
          placeholder="Password"  
          type="password" 
          name="Zassword"
          onChange={(e) => setPasswordInput(e.target.value)}
          >
        </Input>
        <Button type="submit">Login in</Button>
      </Form>

    </Container>
  );
}

export default LoginPage;