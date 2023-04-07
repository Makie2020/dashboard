/* eslint-disable prettier/prettier */
import React, { useEffect} from "react";
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import {Div1,Div5,Div6,Div7,ContainerDiv, IconConatiner, TextContainer, Number, Text, ReviewTitle,Div8,TitleChart, Square, SquareText, SquareRed, SquareDiv} from './DashboardStyles';
import Layout from "../../components/Layout";
import { BiBed } from "react-icons/bi";
import { BsBoxArrowInLeft, BsBoxArrowInRight } from "react-icons/bs";
import { HiOutlineDocumentCheck} from "react-icons/hi2";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import "./Dashboard.css"
import { ReviewCards } from "../Contact/ReviewsCard";
import { fetchContacts } from "../../store/features/ContactSlice";
import {GroupedBarChart} from '../../components/Chart/Chart';
import { IGroupedData } from '../../Interfaces/ChartInterfaces';

function Dashboard() {
  const dispatch = useAppDispatch();
  const contactStatus = useAppSelector(state => state.contacts.status);

  const GROUPED_BAR_CHART_DATA: IGroupedData[] = [
    { label: "Sunday", values: [55, 22] },
    { label: "Monday", values: [33, 8] },
    { label: "Tuesday", values: [22, 27] },
    { label: "Wednesday", values: [49, 31] },
    { label: "Thursday", values: [39, 25] },
    { label: "Friday", values: [49, 22] },
    { label: "Saturday", values: [51, 2] }, 
  ];
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
        <Div6>
          <TitleChart>Reservation Stats</TitleChart>
          <SquareDiv>
            <div style={{display:"flex", gap: "2em"}}>
              <Square/>
              <SquareText>Check In</SquareText>
            </div>
            <div style={{display:"flex", gap: "2em"}}>
              <SquareRed/>
              <SquareText>Check Out</SquareText>
            </div>
          </SquareDiv>
          <GroupedBarChart data={GROUPED_BAR_CHART_DATA} />
        </Div6>
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