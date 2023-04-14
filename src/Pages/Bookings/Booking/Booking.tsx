/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { getBooking} from "../../../store/features/BookingsSlice";
import { DateBookingData, ContainerData, ContainerBookingData, ContainerRoomDetails,ButtonMessage,Iconbox,Line,Id,Name,ButtonPhone,BookingContainer,TitleBookingData,RoomDetailText,RoomDetailsData,RoomDetailsFacilitiesBox,RoomDetailsFacilitiesButton,RoomDetailsTitle, SwiperContainer, Tag } from "./BookingStyles";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbMessage,TbDotsVertical } from "react-icons/tb";
import Layout from '../../../components/Layout';
import SwiperBooking from '../../../components/Swiper/Swiper';

function Booking() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const booking = useAppSelector((state) => state.bookings.booking)
  const { id }: any = params;
  const [currentBooking, setCurrentBooking] = useState<any>(booking);

  useEffect(() => {
    dispatch(getBooking(id));
    setCurrentBooking(booking);
  }, [dispatch, id]);

  if (currentBooking) {
    return (
      <Layout name={`Booking/${currentBooking.id}`}>
        <BookingContainer>
          <div style={{flex: "0 0 50%}"}}>
            <ContainerData>
              <img src={currentBooking.image} alt="avatar"></img>
              <div>
                <Name> {currentBooking.full__name}<TbDotsVertical/></Name>
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
                <DateBookingData>{currentBooking.check_in}</DateBookingData>
              </div>
              <div> 
                <TitleBookingData>Check Out</TitleBookingData>
                <DateBookingData>{currentBooking.check_out}</DateBookingData>
              </div>
            </ContainerBookingData>
            <Line/>
            <ContainerRoomDetails>
              <div>
                <RoomDetailsTitle>Room Info</RoomDetailsTitle>
                <RoomDetailsData>{currentBooking.room_type}</RoomDetailsData>
              </div>
              <div>
                <RoomDetailsTitle>Price</RoomDetailsTitle>
                <RoomDetailsData>${currentBooking.price}<span>/night</span></RoomDetailsData>
              </div>
            </ContainerRoomDetails>
            <RoomDetailText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </RoomDetailText>
            <RoomDetailsTitle>Facilities</RoomDetailsTitle>
            <RoomDetailsFacilitiesBox>
              {currentBooking.amenities.map((amenity) => (
                <RoomDetailsFacilitiesButton key={amenity}>{amenity}</RoomDetailsFacilitiesButton>
              ))}
            </RoomDetailsFacilitiesBox>
          </div>
          <div style={{flex: "0 0 40%}"}}>
            <SwiperContainer>
              <Tag currentStatus={currentBooking.status} className="tag">
                {currentBooking.status}
              </Tag>
              <SwiperBooking data={currentBooking} />
              <div className="roomData">
                <h2>{currentBooking.roomType}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </SwiperContainer>
          </div>
        </BookingContainer>
      </Layout>      
    );  
  } else {
    return null;
 }
}

export default Booking;