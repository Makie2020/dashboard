/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import {ProductTable} from "../../components/Table/Table1";
import {fetchRooms, deleteRoom, selectAllRooms} from "../../store/features/RoomsSlice";
import { RoomDataExtended } from '../../Interfaces/RoomsDataInterface';
import {ButtonGroup, Tab,Button,Select,Optionsdiv} from "./RoomsStyles"

const types = ['All Rooms', 'Availible Rooms', 'Occupied Rooms'];

function Rooms() {
  const dispatch = useAppDispatch();
  const roomsList = useAppSelector(selectAllRooms);
  const roomStatus = useAppSelector(state => state.rooms.status);
  const [active, setActive] = useState<any>(types[0]);
  const [filteredResults, setFilteredResults] = useState<RoomDataExtended[]>([]);
  const [ order, setOrder ] = useState('room_number');

  //fetch data
  useEffect(() => {
    if (roomStatus === 'idle') {
      dispatch(fetchRooms())
    }
  }, [roomStatus, dispatch]) 

    // DELETE Room
    const onDeleteRoom = (e: Event, id:number) => {
      e.preventDefault();
      dispatch(deleteRoom(id));
    };

  // DROPDOWN
  useEffect(() => {
    const roomsOrderBy = [...roomsList];
    roomsOrderBy.sort((a, b) => {
        if(a[order] > b[order]) {
            return 1
        } else if (a[order] < b[order]) {
            return -1
        }
        return 0
    });
    setFilteredResults(roomsOrderBy)
  }, [order, roomsList])


   const handleData = (index: number) => {
    if (index === 0){
      setFilteredResults(roomsList)
    } else if (index === 1) {
      const filteredRooms= [...roomsList]
      const filteredAvailibleRooms  = filteredRooms.filter((room: RoomDataExtended) =>  room.status === "Available");
      setFilteredResults(filteredAvailibleRooms)
    } else if(index === 2) {
      const filteredOccupied = [...roomsList]
      const filteredOccupiedRooms  = filteredOccupied.filter((room:RoomDataExtended) =>  room.status === "Occupied");
      setFilteredResults(filteredOccupiedRooms)
    }
  };
  //THEAD
  const column = [
    { heading: 'Photo', value: 'image' },
    { heading: 'Room Number', value: 'room_number' },
    { heading: 'Room ID', value: 'id' },
    { heading: 'Room Type', value: 'room_type' },
    { heading: 'Amenities', value: 'amenities' },
    { heading: 'Price', value: 'price' },
    { heading: 'Offer Price', value: 'offer_price' },
    { heading: 'Status', value: 'status' },
    { heading: 'Actions Room', value: '' },
  ]

  return (
    <Layout name="Room List">
      <div>
        <>
          <ButtonGroup>
            {types.map((type, index) => (
              <Tab
                key={type}
                active={active === type}
                value ={index}
                onClick={() =>{ setActive(type); handleData(index)}}>
                  {type}
              </Tab>
            ))}
          </ButtonGroup>
          <Optionsdiv>
            <Link to='/rooms/new-room' style={{textDecoration:"none"}}><Button>New Room</Button></Link>
            <Select value={order} onChange={({ target }) => setOrder(target.value)}>
              <option value="room_number">Room Number</option>
              <option value="price">Price</option>
              <option value="status">Status</option>
            </Select>
          </Optionsdiv>
          <ProductTable data={filteredResults} column={column} rowsPerPage={10} onDeleteRoom={onDeleteRoom}/>     
        </>
      </div>
    </Layout>
    );
}
export default Rooms;