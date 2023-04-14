/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../hooks/hook';
import { getRoom, editRoom } from '../../../store/features/RoomsSlice';
import RoomForm from "../../../components/Forms/FormRoom";
import Layout from '../../../components/Layout';

const EditRoom = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const {id}:any = params;
  const singleRoom = useAppSelector((state:any) => state.rooms.room);
  const [currentRoom, setCurrentRoom] = useState<any>();
  const formTitle ="Edit and update the original room";

  useEffect(() => {
    dispatch(getRoom(id));
    setCurrentRoom(singleRoom);
  }, [dispatch,id]);


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
    setCurrentRoom({undefined});
    navigate("/rooms");
  };

  const handleSubmit = () => {
    dispatch(editRoom(currentRoom));
    setCurrentRoom({});
    navigate("/rooms");
  };

  return !currentRoom ? (
    <div>Loading Page</div> 
    ) : (
    <Layout name="Boookings/edit-rooms">
      <RoomForm
        formTitle={formTitle}
        currentRoom={currentRoom}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </Layout>  
  );
};

export default EditRoom;