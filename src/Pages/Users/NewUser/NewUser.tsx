/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { useAppDispatch } from '../../../hooks/hook';
import { Link } from 'react-router-dom';
import { newUser } from '../../../store/features/UsersSlice';
import Layout from '../../../components/Layout';
import {Label, CenteredDiv,Button,Input,TextArea,BackgroundDiv, Form, Title} from './NewUserStyles'

const NewUser = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function onCreateUser(e: React.SyntheticEvent){
    e.preventDefault()
    const data: any= {name, id,email, date,description,phoneNumber,status,password}
    dispatch(newUser(data))
  }
  return (
    <Layout name="Users/new user">
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