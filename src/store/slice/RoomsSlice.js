import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { roomData } from '../../DummyData/roomData';

function delay(roomData, time = 200) {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(roomData);
    }, time);
  })
}

export const fetchRooms = createAsyncThunk('users/fetchRooms', async()=> {
  return await delay(roomData)
})

export const newRoom = createAsyncThunk('users/saveNewRoom', async(data) => {
  return await delay (data)
})

const RoomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        room: [],
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
          state.room = action.payload
        })
        .addCase(fetchRooms.rejected,(state, action)=>{
          state.status = "Failed"
          state.message = action.error.message;
        })
        .addCase(newRoom.fulfilled, (state, action)=> {
          state.status = "Succeeded"
          state.room = [...state.room, action.payload]
        })
        .addCase(newRoom.rejected,(state, action)=>{
          state.status = "Failed"
          state.message = action.error.message;
        })
    }
});

export default RoomsSlice.reducer

export const selectAllRooms = state => state.rooms.room

export const selectById = (state, roomsId) =>
  state.rooms.find(rooms => rooms.id === roomsId)