import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { newUser } from '../../../store/slice/UsersSlice';
import Layout from '../../../components/Layout';
import {Label, CenteredDiv,Button,Input,TextArea,BackgroundDiv, Form, Title} from './NewUserStyles'


const NewUser = () => {
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
            <Title>New Employee</Title>
            <div>
              <Label>Name</Label>
              <Input 
                placeholder="Name" 
                type="text"
                value ={name}
                onChange={(e) => setName(e.target.value)}  
              /> 
            </div>
            <div>
              <Label> Email</Label>
              <Input 
                placeholder="Email" 
                type="email"
                value ={email}
                onChange={(e) => setEmail(e.target.value)}  
              />          
            </div>
            <div>
              <Label>Id</Label>
              <Input 
                placeholder="Id" 
                type="text"
                value ={id}
                onChange={(e) => setId(e.target.value)}  
              />          
            </div>
            <div>
              <Label >Start Date</Label>
              <Input 
                placeholder="--/--/----" 
                type="date"     
                value ={date}
                onChange={(e) => setDate(e.target.value)}  
              />
            </div>
            <div>
              <Label>Description</Label>
              <TextArea 
                placeholder="Description" 
                value ={description}
                onChange={(e) => setDescription(e.target.value)}  
              />
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input 
                placeholder="Phone Number" 
                type="text"
                value ={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}  
              />
            </div>
            <div>
              <Label>Status</Label>
              <Input 
                placeholder="Active/ Inactive"
                type="text"
                value ={status}
                onChange={(e) => setStatus(e.target.value)}  
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input 
                placeholder="Password"
                type="Password"
                value ={password}
                onChange={(e) => setPassword(e.target.value)}  
              />
            </div>
            <div>
              <Link to="/users"> <Button type='submit' >Add User</Button></Link>
            </div>
        </Form>
        </CenteredDiv>
      </BackgroundDiv>
    </Layout>  
    
  );
}

export default NewUser;