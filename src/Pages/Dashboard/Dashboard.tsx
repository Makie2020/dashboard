/* eslint-disable prettier/prettier */
import React, { useEffect} from "react";
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import styled from "styled-components";
import Layout from "../../components/Layout";
import { BiBed } from "react-icons/bi";
import { BsBoxArrowInLeft, BsBoxArrowInRight } from "react-icons/bs";
import { HiOutlineDocumentCheck} from "react-icons/hi2";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import "./Dashboard.css"
import { ReviewCards } from "../Contact/ReviewsCard";
import { fetchContacts } from "../../store/features/ContactSlice";

const ContainerDiv = styled.div `
  padding: 2em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: calc(100% - 120px);
  gap: 2em;
  background-color: #F8F8F8;
`
const Div1 = styled.div `
  flex: 0 0 22%;
  height: 105px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  display:flex;
  align-items: center;
  gap: 1em;
`
const IconConatiner = styled.div `
  background-color: #FFEDEC;
  border-radius: 8px;
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content:center;
  color: #E23428;
  margin-left: 1em;
`
const TextContainer = styled.div `
`
const Number = styled.p `
  font-weight: 600;
  font-size: 30px;
  line-height: 0;
`
const Text = styled.p `
  font-weight: 300;
  font-size: 14px;
  color: #787878;
`
const Div5 = styled.div `
  flex: 0 0 46.5%;
  height: 350px;
`
const Div6 = styled.div `
  flex: 0 0 46.5%;
  background-color: pink ;
  height: 350px;
`
const Div7 = styled.div `
  flex: 0 0 96%;
  background-color: yellow ;
  height: 350px;
`
const Div8 = styled.div `
  flex: 0 0 96%;
  height: 350px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 20px;
  padding: 1em;
`
const ReviewTitle = styled.h1 `
  color:#393939;
  font-size: 20px;
  font-weight: 500;
`
function Dashboard() {
  const dispatch = useAppDispatch();
  const contactStatus = useAppSelector(state => state.contacts.status)

  useEffect(() => {
    if (contactStatus === 'idle') {
      dispatch(fetchContacts())
    }
  }, [contactStatus, dispatch])

  return (
    <Layout name="Dashboard">
      <ContainerDiv>
        <Div1>
          <IconConatiner>
            <BiBed style={{width:"28px", height:"28px"}}/>
          </IconConatiner>
          <TextContainer>
            <Number>8,461</Number>
            <Text>New Booking</Text>
          </TextContainer>
        </Div1>
        <Div1>       
          <IconConatiner style={{backgroundColor:"#E23428"}}>
            <HiOutlineDocumentCheck style={{width:"28px", height:"28px", color: "#FFFFFF"}}/>
          </IconConatiner>
          <TextContainer>
            <Number>963</Number>
            <Text>Scheduled Room</Text>
          </TextContainer>
        </Div1>
        <Div1>
          <IconConatiner>
            <BsBoxArrowInRight style={{width:"28px", height:"28px"}}/>
          </IconConatiner>
          <TextContainer>
            <Number>753</Number>
            <Text>Check In</Text>
          </TextContainer>
        </Div1>
        <Div1>
          <IconConatiner>
            <BsBoxArrowInLeft style={{width:"28px", height:"28px"}}/>
          </IconConatiner>
          <TextContainer>
            <Number>516</Number>
            <Text>Check Out</Text>
          </TextContainer>
        </Div1>
        <Div5>
          <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          weekends={false}
          contentHeight= "285px"
          events={[
            { title: 'event 1', date: '2019-04-01' },
            { title: 'event 2', date: '2019-04-02' }
          ]}
        /></Div5>
        <Div6>6</Div6>
        <Div7>7</Div7>
        <Div8>
          <ReviewTitle>Latest Review by Customers</ReviewTitle>
          <ReviewCards/>
        </Div8>
      </ContainerDiv>
   </Layout>
   
  );
}

export default Dashboard;