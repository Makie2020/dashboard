/* eslint-disable prettier/prettier */
import React from 'react';
import logo from '../../assets/Logo/logo.png'; 
import image from "../../assets/images/ProfilePic.jpg"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiDashboardLine, RiKeyLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { TbPuzzle } from "react-icons/tb";

const SidebarDiv = styled.div `
  transition: width 0.3s ease-in-out;
  box-shadow: 13px 3px 40px #00000005;
  height: 100vh;
  width: 238px;
  padding: 2em;
  top: 0;
  left: 0;
  overflow-x: hidden;
  position: fixed;
`
const LogoContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 1em;
`
const LogoTitle = styled.h1`
  font-weight: 600;
  line-height: 0;
`
const LogoSubtitle = styled.h4`
  font-size: 12px;
  font-weight: 300;
  color:rgba(93, 84, 73, 1);
`
const List = styled.ul `
  list-style-type: none;
  padding: 0;
`
const LinkList = styled.li `
   color: #799283;
   font-size: 18px;
   font-weight: 400;
   padding: 1em;
`
const Card = styled.div `
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
  width: 233px;
  height: 245px;
  text-align: center;
  padding: 2em 0;
  margin-bottom: 2em;
`
const Title = styled.h1 `
  font-size: 16px;
  font-weight: 500;
  color: #393939;
`
const Mail = styled.p `
  color: #B2B2B2;
  font-size: 12px;
  font-weight: 300;
`
const Button = styled.button`
  width: 158px;
  height: 47px;
  background-color: #EBF1EF;
  color: #135846;
  border: none;
  font-family: 'Poppins', sans-serif;
`
const TitleDashboard = styled.p `
  font-weight: 600;
  font-size: 14px;
  color:rgba(33, 33, 33, 1);
  line-height: 0;
`
const CopyRight = styled.p `
  font-weight: 300;
  font-size: 14px;
  color: rgba(121, 146, 131, 1);
  margin-bottom: 2em;
`
const Made = styled.p `
  font-weight: 300;
  font-size: 14px;
  color: rgba(121, 146, 131, 1);
`
function Sidebar() {
  return (
    <SidebarDiv>
      <LogoContainer>
        <img  src={logo} style={{width:"47px", height:"47px"}} alt="Logo travl"/>
        <div>
          <LogoTitle>travl</LogoTitle>
          <LogoSubtitle>Hotel Admin Dashboard</LogoSubtitle>
        </div>
      </LogoContainer>
      <nav>
        <List>
          <LinkList>
            <Link to="/dashboard" style={{color:"#799283", textDecoration:"none"}}><RiDashboardLine style={{width: "24px", height:"27px", color:"#799283",marginRight:"1em"}}/>Dashboard</Link>
          </LinkList>
          <LinkList>
            <Link to="/bookings" style={{color:"#799283", textDecoration:"none"}}><HiOutlineDocumentCheck style={{width: "24px", height:"27px", color:"#799283",marginRight:"1em"}}/>Bookings</Link>
          </LinkList>
          <LinkList>
            <Link to="/rooms" style={{color:"#799283", textDecoration:"none"}}><RiKeyLine style={{width: "24px", height:"27px", color:"#799283", marginRight:"1em"}}/>Rooms</Link>
          </LinkList>
          <LinkList>
            <Link to="/contact" style={{color:"#799283", textDecoration:"none"}}><RxPerson style={{width: "24px", height:"27px", color:"#799283",marginRight:"1em"}}/>Contact</Link>
          </LinkList>
          <LinkList>
            <Link to="/users" style={{color:"#799283", textDecoration:"none"}}><TbPuzzle style={{width: "24px", height:"27px", color:"#799283", marginRight:"1em"}}/>Users</Link>
          </LinkList>
        </List>
      </nav>
      <Card>
        <img src={image} alt="avatar of Marieke" style={{width:"70px", height:"70px", objectFit:"cover"}}/>
        <Title>Marieke Linneman</Title>
        <Mail>info@hotelMiranda.com</Mail>
        <Button>Edit</Button>
      </Card>
      <TitleDashboard>Travl Hotel Admin Dashboard</TitleDashboard>
      <CopyRight>© 2023 All Rights Reserved</CopyRight>
      <Made>Made with ♥ by Marieke</Made>
    </SidebarDiv>
  );
}

export default Sidebar;