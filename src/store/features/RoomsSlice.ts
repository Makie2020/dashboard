/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { Action } from '../../Interfaces/interfaces';
import { RoomState } from '../../Interfaces/RoomsDataInterface';
import { RoomDataExtended } from '../../Interfaces/RoomsDataInterface';
import { requestGET, requestPOST, requestDELETE, requestPUT } from '../ApiClient';

const initialState : RoomState = {
  rooms: [],
  room: null,
  status: 'idle',
}

export const fetchRooms = createAsyncThunk<any>('rooms/fetchRooms',async() => {
  const dataRooms = await requestGET("http://localhost:3002/rooms");
  const data: RoomDataExtended = dataRooms.data;
  return data;
});
export const getRoom = createAsyncThunk('rooms/getRoom', async (id: number) => {
  const dataRooms = await requestGET(`http://localhost:3002/rooms/${id}`);
  const data: RoomDataExtended = dataRooms.data;
  return data;
});
export const addRoom = createAsyncThunk('rooms/addRoom', async (newRoom: RoomDataExtended) => {
  const data = await requestPOST("http://localhost:3002/rooms", newRoom)
  return data;
});
export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async (id: number) => {
  const dataRoom = await requestDELETE(`http://localhost:3002/rooms/${id}`);
  return dataRoom;
});
export const editRoom = createAsyncThunk('rooms/editRoom', async (currentRoom: RoomDataExtended) => {
  const data = await requestPUT(`http://localhost:3002/rooms/${currentRoom.id}`, currentRoom);
  return data;
});

const RoomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRooms.pending, state => {
        state.status = 'Loading';
      })
      .addCase(fetchRooms.fulfilled, (state: RoomState, action: Action) => {
        state.status = 'Succeeded';
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state: RoomState) => {
        state.status = 'Failed';
        console.log("Not able to load rooms")
      })
      .addCase(getRoom.fulfilled, (state: RoomState, action: Action) => {
        state.status = 'Succeeded';
        state.room = action.payload
      })
      .addCase(getRoom.rejected, (state: RoomState) => {
        state.status = 'Failed';
        console.log("Not able to find the room")
      })
      .addCase(addRoom.fulfilled, (state: RoomState, action:Action) => {
        state.status = 'Succeeded';
        state.rooms = [...state.rooms, action.payload];
      })
      .addCase(addRoom.rejected, (state: RoomState) => {
        state.status = 'Failed';
        console.log("Not able to add room")
      })
      .addCase(deleteRoom.fulfilled, (state:RoomState, action: Action) => {
        state.status = 'Succeeded';
        state.rooms = state.rooms.filter(room => room.id !== action.payload);
      })
      .addCase(deleteRoom.rejected, (state: RoomState) => {
        state.status = 'Failed';
        console.log("Not able to delete the room")
      })
      .addCase(editRoom.fulfilled, (state: RoomState, action:Action) => {
        state.status = 'Succeeded';
        state.rooms = state.rooms = state.rooms.map(room =>
          room.id === action.payload.id ? action.payload : room,
        );
      })
      .addCase(editRoom.rejected, (state:RoomState) => {
        state.status = 'Failed';
        console.log("Not able to edit the room")
      });
  },
});

export default RoomsSlice.reducer;
export const selectAllRooms = (state:any) => state.rooms.rooms;