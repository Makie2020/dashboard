import React from 'react';
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Tabs from "../../components/Tab/Tabs";
import Table from "../../components/Table/Table";
import {roomData} from "../../DummyData/roomData";
import { BsSearch } from "react-icons/bs";

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
function Rooms() {
  const [on, setOn] = React.useState(false);

  const handleOnClick = () => {
    setOn(!on);
  };
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

  return (
    <Container>
      <Aside className={on ? 'to-right' : ''}>
        <Header>
          <a href="#" onClick={handleOnClick}>
            <AiOutlineMenu style={{margin:" 0 2em"}}/>
          </a>
          <Navbar name="Rooms" style={{flex:"0 0 80%"}}/>
        </Header>
        <div>

          <Tabs style={{display:"flex"}}>
            <div label="All Rooms">
            <Table data={roomData} column={column} />
            </div>
            <div label="Rooms">
              ROOMS
            </div>
          </Tabs>
        </div>

      </Aside>
      {on && <Sidebar openClass="open" />}
    </Container>  
    );
}
export default Rooms;