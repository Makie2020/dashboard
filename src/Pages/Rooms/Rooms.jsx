/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { ProductTable} from "../../components/Table/Table1";
import { fetchRooms, selectAllRooms } from "../../store/slice/RoomsSlice";
import {ButtonGroup, Tab,Button,Select,Optionsdiv} from "./RoomsStyles"

const types = ['All Rooms', 'Availible Rooms', 'Occupied Rooms'];

function Rooms() {
  const dispatch = useDispatch();
  const rooms = useSelector(selectAllRooms)
  const [active, setActive] = useState(types[0]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Room Nr.");

  //fetch data
  useEffect(() => {
    if (rooms.length === 0) {
      dispatch(fetchRooms())
      setFilteredResults(rooms);
    }
  }, [rooms, dispatch])

  // DROPDOWN
  useEffect(() => {
    let orderedRooms;
    switch (activeFilter) {
      case "Room Nr.":
        const orderedRoomByNumber = [...rooms];
        orderedRooms = orderedRoomByNumber.sort((a, b) => a.room_number - b.room_number);
        break;
      case "Highest price first":
        const orderedHighestPrice = [...rooms];
        orderedRooms= orderedHighestPrice.sort((a, b) => b.price - a.price);
        break;
      case "Lowest price first":
        const orderedLowesttPrice = [...rooms];
        orderedRooms = orderedLowesttPrice.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    setFilteredResults(orderedRooms);
  }, [activeFilter, rooms]);

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
  ]
  
  const handleData = (index) => {
    if (index === 0){
      setFilteredResults(rooms)
    } else if (index === 1) {
      const filteredRooms = [...rooms]
      const filteredAvailibleRooms  = filteredRooms.filter((room) =>  room.status === "Available");
      setFilteredResults(filteredAvailibleRooms)
    } else if(index === 2) {
      const filteredOccupied = [...rooms]
      const filteredOccupiedRooms  = filteredOccupied.filter((room) =>  room.status === "Occupied");
      setFilteredResults(filteredOccupiedRooms)
    }
  };

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
            <Link to='/rooms/new-room'><Button>New Room</Button></Link>
            <Select setActiveFilter={setActiveFilter}>
              <option>Room Nr.</option>
              <option>Highest Price Rate</option>
              <option>Lowest Price Rate</option>
            </Select>
          </Optionsdiv>
          <ProductTable data={filteredResults} column={column} rowsPerPage={10}/>     
        </>
      </div>
    </Layout>
    );
}
export default Rooms;