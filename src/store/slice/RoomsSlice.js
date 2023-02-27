import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { roomData } from '../../DummyData/roomData';

function delay(roomData, time = 200) {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(roomData);
    }, time);
  })
}

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async()=> {
  return await delay(roomData)
})
export const getRoom = createAsyncThunk('rooms/getRoom', async() => {
  return await delay ()
})
export const addRoom = createAsyncThunk('rooms/addRoom', async() => {
  return await delay ()
})
export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async() => {
  return await delay ()
})
export const editRoom = createAsyncThunk('rooms/editRoom', async() => {
  return await delay ()
})

const RoomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [],
        room: {},
        status: 'idle',
        error: null
    },
    reducers: {
    },
    extraReducers(builder) {
      builder
        .addCase(fetchRooms.pending,(state)=>{
          state.status = "Loading"
        })
        .addCase(fetchRooms.fulfilled,(state, action)=>{
          state.status = "Succeeded"
          state.rooms = action.payload
        })
        .addCase(fetchRooms.rejected,(state, action)=>{
          state.status = "Failed"
          state.message = action.error.message;
        })
        .addCase(getRoom.fulfilled, (state, action)=> {
          state.status = "Succeeded"
          state.room = state.rooms.find(room => room.id === action.payload);
        })
        .addCase(getRoom.rejected,(state, action)=>{
          state.status = "Failed"
          state.message = action.error.message;
        })
        .addCase(addRoom.fulfilled, (state, action)=> {
          state.status = "Succeeded"
          state.rooms = [...state.rooms, action.payload]
        })
        .addCase(addRoom.rejected,(state, action)=>{
          state.status = "Failed"
          state.message = action.error.message;
        })
        .addCase(deleteRoom.fulfilled, (state, action)=> {
          state.status = "Succeeded"
          state.rooms = state.rooms.filter(room => room.id !== action.payload);
        })
        .addCase(deleteRoom.rejected,(state, action)=>{
          state.status = "Failed"
          state.message = action.error.message;
        })
        .addCase(editRoom.fulfilled, (state, action)=> {
          state.status = "Succeeded"
          state.rooms = state.rooms = state.rooms.map(room => room.id === action.payload.id ? action.payload : room)
        })
        .addCase(editRoom.rejected,(state, action)=>{
          state.status = "Failed"
          state.message = action.error.message;
        })
    }
});

export default RoomsSlice.reducer

export const selectAllRooms = state => state.rooms.rooms

export const selectById = (state, roomsId) =>
  state.rooms.find(rooms => rooms.id === roomsId)