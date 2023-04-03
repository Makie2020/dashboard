/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '../../../hooks/hook';
import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import {ProductTable} from "../../../components/Table/Table1";
import {fetchRooms, deleteRoom, selectAllRooms} from "../../../store/features/RoomsSlice";
import { RoomDataExtended } from '../../../Interfaces/RoomsDataInterface';
import {ButtonGroup, Tab,Button,Select,Optionsdiv} from "../RoomsStyles"

const types = ['All Rooms', 'Availible Rooms', 'Occupied Rooms'];

function Rooms() {
  const dispatch = useAppDispatch();
  const roomsList = useAppSelector(selectAllRooms);
  const roomStatus = useAppSelector(state => state.rooms.status);
  const [active, setActive] = useState<any>(types[0]);
  const [filteredResults, setFilteredResults] = useState<RoomDataExtended[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("Room Nr.");

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
    let orderedRooms: RoomDataExtended[] = [...roomsList];
    switch (activeFilter) {
      case "Room Nr.":
        const orderedRoomByNumber = [...roomsList];
        orderedRooms = orderedRoomByNumber.sort((a:RoomDataExtended, b:RoomDataExtended) => a.room_number - b.room_number);
        break;
      case "Highest price first":
        orderedRooms.sort((a: RoomDataExtended, b: RoomDataExtended) => {
        const rateA: string = a.price;
        const rateB: string = b.price;
          if (rateA > rateB) {
            return -1;
          }
          if (rateA < rateB) {
            return 1;
          }
          return 0;
        });
        break;
      case "Lowest price first":
        orderedRooms.sort((a: RoomDataExtended, b: RoomDataExtended) => {
          const rateA: string = a.price;
          const rateB: string = b.price;
          if (rateA < rateB) {
            return -1;
          }
          if (rateA > rateB) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        break;
    }
    setFilteredResults(orderedRooms);
  }, [activeFilter, roomsList]);

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
            <Select onChange={() => setActiveFilter}>
              <option>Room Nr.</option>
              <option>Highest Price Rate</option>
              <option>Lowest Price Rate</option>
            </Select>
          </Optionsdiv>
          <ProductTable data={filteredResults} column={column} rowsPerPage={10} onDeleteRoom={onDeleteRoom}/>     
        </>
      </div>
    </Layout>
    );
}
export default Rooms;