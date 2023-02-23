import React, { useState } from 'react'
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { newUser } from '../../../store/slice/UsersSlice';
import Layout from '../../../components/Layout';

const BackgroundDiv = styled.div `
  background-color: #00000014;

`
const CenteredDiv = styled.div `

`
const Form = styled.form `
  background-color: #00000005;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left ;
  width: 100%;
  height: 87.5vh;
  z-index: 10;
  border-radius: 12px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  color: #135846;
`
const Input = styled.input `
  border-radius: 12px;
  font-family: "Poppins";
  padding: 1em 2em;
  border: none;
  width: 75%;
`
const Label = styled.label `
  font-family: "Poppins";
  font-size: 12px;
`
const Button = styled.button `
  padding: 1em 2em;
  background-color: #135846;
  color:#FFFFFF;
  border: none;
  border-radius: 12px;
  font-family: "Poppins";
  margin-top: 1em;
`
const TextArea = styled.textarea`
  font-family: "Poppins";
  border-radius: 12px;
  font-family: "Poppins";
  padding: 1em 2em;
  border: none;
  width: 75%;
`

const NewUser = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");


  function onCreateUser(e){
    e.preventDefault()
    const data = {name, id,email, date,description,phoneNumber,status,password}
    dispatch(newUser(data))
  }
  return (
    <Layout>
       <BackgroundDiv>
        <CenteredDiv>
          <Form onSubmit={onCreateUser}>
            <Label>Name</Label>
            <Input 
              placeholder="Name" 
              type="text"
              value ={name}
              onChange={(e) => setName(e.target.value)}  
            /> 
            <Label>Id</Label>
            <Input 
              placeholder="Id"  
              type="number"
              value ={id}
              onChange={(e) => setId(e.target.value)}  
            />
            <Label> Email</Label>
            <Input 
              placeholder="Email" 
              type="email"
              value ={email}
              onChange={(e) => setEmail(e.target.value)}  
            />
            <Label >Start Date</Label>
            <Input 
              placeholder="--/--/----" 
              type="date"     
              value ={date}
              onChange={(e) => setDate(e.target.value)}  
            />
            <Label>Description</Label>
            <TextArea 
              placeholder="Description" 
              value ={description}
              onChange={(e) => setDescription(e.target.value)}  
            />
            <Label>Phone Number</Label>
            <Input 
              placeholder="---/---/----" 
              type="number"
              value ={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}  
            />
            <Label>Status</Label>
            <Input 
              placeholder="Active/ Inactive"
              type="text"
              value ={status}
              onChange={(e) => setStatus(e.target.value)}  
            />
            <Label>Password</Label>
            <Input 
              placeholder="Password"
              type="Password"
              value ={password}
              onChange={(e) => setPassword(e.target.value)}  
            />
            <Button type='submit' onClick={() => setIsOpen(false)} >Add User</Button>
        </Form>
        </CenteredDiv>
      </BackgroundDiv>
    </Layout>  
    
  );
}

export default NewUser;