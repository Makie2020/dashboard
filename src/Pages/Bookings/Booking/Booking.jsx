import React, {useState} from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Sidebar from "../../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbMessage,TbDotsVertical } from "react-icons/tb";
import room from "../../../assets/images/Room1.jpg"

const BookingContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  background-color: #FFFFFF;
  width: 90%;
  margin:0 auto ;
  border-radius: 12px;
  padding: 1em;
`
const Container = styled.div `
  display: flex;
  background-color: #F8F8F8;
`
const Header = styled.div `
  display:flex;
  align-items: center;
`
const Aside = styled.aside `
  transition: all 300ms ease-in-out;
  width: 100%;
`
const ContainerData = styled.div `
  display: flex;
`
const Name = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color:#212121;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Id = styled.p `
  font-weight: 14px;
  font-weight: 400;
  color:#799283;
`
const Iconbox = styled.div `
  display: flex;
  align-items: center;
  gap: 1em;
`
const ButtonPhone = styled.button `
  width: 59px;
  height: 59px;
  border: 1px solid #E8F2EF;
  border-radius: 12px;
  color: #135846;
  background-color: transparent;
`
const ButtonMessage = styled.button `
  background-color: #135846;
  width: 209px;
  height: 59px;
  border: none;
  color: #FFFFFF;
  font-family: "Poppins";
  border-radius: 12px;
`
const ContainerBookingData = styled.div `
  display:flex;
  justify-content:space-between;
`
const TitleBookingData = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #799283;
`
const DateBookingData = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #212121;
`
const Line = styled.hr`
  border-bottom: 1px solid #799283;
`
const Image = styled.img `
  width: 635px;
  height: 692px;
  object-fit: cover;
`
const ContainerRoomDetails = styled.div `
  display: flex;
  justify-content: space-between;
`
const RoomDetailsTitle = styled.h3 `
  font-size: 14px;
  color: #6E6E6E;
  font-weight: 400;
`
const RoomDetailsData = styled.h3 `
  font-size: 24px;
  color: #212121;
  font-weight: 500;
  span{
    color:#799283;
    font-size: 14px;
    font-weight: 400;
  }
`
const RoomDetailText = styled.p`
  color:#363636;
  font-weight: 400;
  font-size: 14px;
`
const RoomDetailsFacilitiesBox = styled.div `
  display: flex;
  gap: 1em;

`
const RoomDetailsFacilitiesButton = styled.button`
  background-color: #E8F2EF;
  color: #135846;
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 600;
  border:none ;
  border-radius: 12px;
  padding: 2em;

`

function Booking() {
  const [on, setOn] = useState(false);

  const handleOnClick = () => {
    setOn(!on);
  };
  let { id } = useParams();

  return (
    <Container>
      <Aside className={on ? 'to-right' : ''}>
        <Header>
          <a onClick={handleOnClick}>
            <AiOutlineMenu style={{margin:" 0 2em"}}/>
          </a>
          <Navbar name="Bookings" style={{flex:"0 0 80%"}}/>
        </Header>
        <BookingContainer>
          <div style={{flex: "0 0 50%}"}}>
            <ContainerData>
              <img alt="avatar"></img>
              <div>
                <Name> <TbDotsVertical/></Name>
                <Id>ID {id}</Id>
                <Iconbox>
                  <ButtonPhone><BsFillTelephoneFill style={{color:"#135846", width:"20px", height:"20px"}}/></ButtonPhone>
                  <ButtonMessage><TbMessage style={{width:"20px", height:"20px", marginRight:"1em"}}/>Send Message</ButtonMessage>
                </Iconbox>
              </div>
            </ContainerData>
            <ContainerBookingData>
              <div> 
                <TitleBookingData>Check In</TitleBookingData>
                <DateBookingData>--/--/--</DateBookingData>
              </div>
              <div> 
                <TitleBookingData>Check Out</TitleBookingData>
                <DateBookingData>--/--/--</DateBookingData>
              </div>
            </ContainerBookingData>
            <Line/>
            <ContainerRoomDetails>
              <div>
                <RoomDetailsTitle>Room Info</RoomDetailsTitle>
                <RoomDetailsData>Deluxe Z - 002424</RoomDetailsData>
              </div>
              <div>
                <RoomDetailsTitle>Price</RoomDetailsTitle>
                <RoomDetailsData>$145<span>/night</span></RoomDetailsData>
              </div>
            </ContainerRoomDetails>
            <RoomDetailText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

            </RoomDetailText>
            <RoomDetailsTitle>Facilities</RoomDetailsTitle>
            <RoomDetailsFacilitiesBox>
              <RoomDetailsFacilitiesButton>2 Bathroom</RoomDetailsFacilitiesButton>
              <RoomDetailsFacilitiesButton>Free Wifi</RoomDetailsFacilitiesButton>
              <RoomDetailsFacilitiesButton>Air Conditioning</RoomDetailsFacilitiesButton>
              <RoomDetailsFacilitiesButton>Television</RoomDetailsFacilitiesButton>
              <RoomDetailsFacilitiesButton>4 Bed Space</RoomDetailsFacilitiesButton>
            </RoomDetailsFacilitiesBox>
          </div>
          <div style={{flex: "0 0 40%}"}}>
            <Image src={room}/>
          </div>
        </BookingContainer>
        
        
      </Aside>
      {on && <Sidebar openClass="open" />}
    </Container>
  );
}

export default Booking;