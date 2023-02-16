import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Sidebar from "../../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbMessage,TbDotsVertical } from "react-icons/tb";


const Container = styled.div `
  display: flex;
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

function Booking(props) {
  const [on, setOn] = React.useState(false);
  console.log(props)

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
          <Navbar name="Guest Details" style={{flex:"0 0 80%"}}/>
        </Header>
        <ContainerData>
          <img alt="avatar"></img>
          <div>
            <Name>{props} <TbDotsVertical/></Name>
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
        
      </Aside>
      {on && <Sidebar openClass="open" />}
    </Container>
  );
}

export default Booking;