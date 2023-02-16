import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Tabs from "../../components/Tab/Tabs"
import { ProductTable, useSortableData } from "../../components/Table/Table1";
import { roomData } from "../../DummyData/roomData";

const Container = styled.div `
  width: 100%;
`
const Header = styled.div `
  display:flex;
  align-items: center;
`
const Aside = styled.aside `
 transition: all 300ms ease-in-out;
`
function Users() {
  const [on, setOn] = React.useState(false);

  const deleteBooking = booking => {
    console.log(`${booking.id} deleted` )
  }

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
  const actions = [
    {name : "Delete Booking", action: deleteBooking}
  ]

  const handleOnClick = () => {
    setOn(!on);
  };
  return (
    <Container>
      <Aside className={on ? 'to-right' : ''}>
        <Header>
          <a onClick={handleOnClick}>
            <AiOutlineMenu style={{margin:" 0 2em"}}/>
          </a>
          <Navbar name="Users" style={{flex:"0 0 80%"}}/>
        </Header>
        <div>
          <Tabs style={{display:"flex"}}>
            <div label="All Employees">
              LIST EMPLOYEES
              <ProductTable data={roomData} column={column} actions = {actions} />
            </div>
            <div label="Active Employee">
              ACTIVE LIST
            </div>
            <div label="Inactive Employee">
              INACTIVE LIST
            </div>
          </Tabs>
        </div>
   
      </Aside>
      {on && <Sidebar openClass="open" />}
    </Container>  
    );
}

export default Users;