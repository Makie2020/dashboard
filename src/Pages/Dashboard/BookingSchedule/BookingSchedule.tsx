/* eslint-disable prettier/prettier */
import React from "react";
import {Container, Title,ContainerDetails, NameDetail, TimeDetail, DetailDate, TitleDetail, Image, ImageDetail,DetailDateBooked, ContainerBooked, DetailOccupied} from "./BookingScheduleStyles";
import room from "../../../assets/images/Room1.jpg";
import room2 from "../../../assets/images/Room2.jpg";
import person from "../../../assets/images/Person.jpg";
import person1 from "../../../assets/images/Person2.jpg";
import person2 from "../../../assets/images/Person3.jpg";

function BookingSchedule() {
  return (
    <div>
      <Title>Recent Booking Schedule</Title>
      <Container>
        <div style={{display:"flex", gap: "3em"}}>
          <Image alt='Room' src={room}/>
          <div>
            <TitleDetail>Queen Bed A-12324</TitleDetail>
            <ContainerDetails>
                <ImageDetail src={person}></ImageDetail>
                <NameDetail>James Sukardi</NameDetail>
                <TimeDetail>12min ago</TimeDetail>
            </ContainerDetails>
          </div>
        </div>
        <DetailDate>3</DetailDate>
      </Container>
      <Container>
        <div style={{display:"flex", gap: "3em"}}>
          <Image alt='Room' src={room2}/>
          <div>
            <TitleDetail>Deluxe Room B-1324</TitleDetail>
            <ContainerDetails>
                <ImageDetail src={person1}></ImageDetail>
                <NameDetail>Angela Moss</NameDetail>
                <TimeDetail>12min ago</TimeDetail>
            </ContainerDetails>
          </div>
        </div>
        <ContainerBooked>
          <DetailDateBooked>16</DetailDateBooked>
          <DetailDateBooked>17</DetailDateBooked>
          <DetailDateBooked>18</DetailDateBooked>
        </ContainerBooked>
      </Container>
      <Container>
        <div style={{display:"flex", gap: "3em"}}>
          <Image alt='Room' src={room}/>
          <div>
            <TitleDetail>King Big C-2445</TitleDetail>
            <ContainerDetails>
                <ImageDetail src={person2}></ImageDetail>
                <NameDetail>Geovanny</NameDetail>
                <TimeDetail>12min ago</TimeDetail>
            </ContainerDetails>
          </div>
        </div>
        <DetailOccupied>
          <p>20</p>
        </DetailOccupied>
      </Container>
    </div>
  );
}
export default BookingSchedule;