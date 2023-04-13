/* eslint-disable prettier/prettier */
import React, { useState} from 'react'
import { useAppDispatch } from '../../../hooks/hook';
import { useNavigate } from "react-router";
import { addRoom } from '../../../store/features/RoomsSlice';
import Layout from '../../../components/Layout';
import RoomForm from '../../../components/Forms/FormRoom';
import {faker} from '@faker-js/faker';

const NewRoom = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
  
    const formTitle = "Please fill the form to create a new room";
    const [currentRoom, setCurrentRoom] = useState<any>({
      id: faker.random.numeric(5),
      room_number: "",
      room_type: "",
      name: "",
      image: "",
      description: "",
      discountPercent: "",
      discount: "",
      price: faker.commerce.price(100, 2500, 0, '€ '),
      cancellationPolicy: "",
      status: "",
      amenities: [],
    });
  
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void  => {
      let name: string = e.target.name;
      let checked: boolean = e.target.checked;
      let type: string = e.target.type;
      let value: string = e.target.value;
      let valToUpdate: string | string[];
      if (type === "checkbox") {
        const newVal = [...currentRoom[name]];
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
      setCurrentRoom((prevState:string[]) => ({ ...prevState, [name]: valToUpdate }));
    };
  
    const handleCancel = (e: Event) => {
      e.preventDefault();
      navigate("/rooms");
    };
  
    const handleSubmit = () => {
      dispatch(addRoom(currentRoom));
      navigate("/rooms");
    };
  return (
    <Layout name={"Room/new-room"}>    
      <RoomForm
        formTitle={formTitle}
        currentRoom={currentRoom}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />  
    </Layout>
  );
}

export default NewRoom;