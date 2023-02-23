import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { ProductTable} from "../../components/Table/Table1";
import { fetchRooms, selectAllRooms } from "../../store/slice/RoomsSlice";

const Button = styled.button `
  background-color: #135846;
  color: #FFFFFF;
  font-family:"Poppins";
  font-weight: 16px;
  border-radius: 12px;
  border: none;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  gap: 10px;
`
const Select = styled.select`
  font-family:"Poppins";
  font-weight: 16px;
  margin-left: 2em;
  border-radius: 12px;
  background-color: #135846;
  color: #FFFFFF;
  border: none;
  padding: 1em 2em;
`
const Tab = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: #6E6E6E;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  background: white;
  border: none;
  font-family:"Poppins";
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #135846;
    color: #135846;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const Optionsdiv = styled.div `
  display:flex;
  justify-content: flex-end;
  margin: 1em 1em;
`

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
  }, [roomsStatus, dispatch])

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

  //BUTTON NEW ROOM
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/users/newRoom`; 
    navigate(path);
  }
  return (
    <Layout>
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
            <Button onClick={routeChange}>New Room</Button>
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