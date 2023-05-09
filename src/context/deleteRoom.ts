/* eslint-disable prettier/prettier */  
import React from 'react';
import { useAppDispatch } from '../hooks/hook';
import {deleteRoom} from "../../store/features/RoomsSlice";


const onDeleteRoom = (e: Event, id:number) => {
  const dispatch = useAppDispatch();
  e.preventDefault();
  dispatch(deleteRoom(id));
  setFilteredResults(roomsList); 
};


export const deleteRoomContext = React.createContext(onDeleteRoom);