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
  const roomsStatus = useSelector(state => state.rooms.status)
  const [active, setActive] = useState(types[0]);
  const [filteredResults, setFilteredResults] = useState([]);

  //fetch data
  useEffect(() => {
    if (roomsStatus === 'idle') {
      dispatch(fetchRooms())
    }
  }, [rooms])

  // DROPDOWN
  const sortRooms = (e) => {
    const sortDirection = e.target.value;
    const copyArray = [...rooms];
    copyArray.sort((a, b) => {
      return sortDirection === "0" ? a.price - b.price ? -1 : 1 : 0;
    });
    setFilteredResults(copyArray); 
  }

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
            <Select defaultValue={1} onChange={sortRooms}>
              <option value={0}>Ascending</option>
              <option value={1}>Descending</option>
            </Select>
          </Optionsdiv>
          <ProductTable data={filteredResults} column={column} rowsPerPage={10}/>     
        </>
      </div>
    </Layout>
    );
}
export default Rooms;