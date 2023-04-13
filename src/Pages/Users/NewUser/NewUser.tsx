/* eslint-disable prettier/prettier */
import React, { useState} from 'react'
import { useAppDispatch } from '../../../hooks/hook';
import { useNavigate } from "react-router";
import { newUser } from '../../../store/features/UsersSlice';
import Layout from '../../../components/Layout';
import UserForm from '../../../components/Forms/FormUser';
import {faker} from '@faker-js/faker';

const NewUser = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
  
    const formTitle = "Please fill the form to create a new user";
    const [currentUser, setcurrentUser] = useState<any>({
      photo: '',
      id: faker.random.numeric(5),
      full_name: '',
      email: '',
      start_date: '',
      description:
        '',
      phone_number: '',
      status: '',
    });
  
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void  => {
      let name: string = e.target.name;
      let checked: boolean = e.target.checked;
      let type: string = e.target.type;
      let value: string = e.target.value;
      let valToUpdate: string | string[];
      if (type === "checkbox") {
        const newVal = [...currentUser[name]];
        if (checked) {
          newVal.push(checked);
        } else {
          const index = newVal.indexOf(checked);
          newVal.splice(index, 1);
        }
        valToUpdate = newVal;
      } else {
        valToUpdate = value;
      }
      setcurrentUser((prevState:string[]) => ({ ...prevState, [name]: valToUpdate }));
    };
  
    const handleCancel = (e: Event) => {
      e.preventDefault();
      navigate("/users");
    };
  
    const handleSubmit = () => {
      dispatch(newUser(currentUser));
      navigate("/users");
    };
  return (
    <Layout name={"Users/new-user"}>    
      <UserForm
        formTitle={formTitle}
        currentUser={currentUser}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />  
    </Layout>
  );
}

export default NewUser;