/* eslint-disable prettier/prettier */
import styled from "styled-components";
export const BookingContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  background-color: #FFFFFF;
  margin:0 auto ;
  border-radius: 12px;
  padding: 1em;
`
export const ContainerData = styled.div `
  display: flex;
  gap: 1em;
`
export const Name = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color:#212121;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Id = styled.p `
  font-weight: 14px;
  font-weight: 400;
  color:#799283;
`
export const Iconbox = styled.div `
  display: flex;
  align-items: center;
  gap: 1em;
`
export const ButtonPhone = styled.button `
  width: 59px;
  height: 59px;
  border: 1px solid #E8F2EF;
  border-radius: 12px;
  color: #135846;
  background-color: transparent;
`
export const ButtonMessage = styled.button `
  background-color: #135846;
  width: 209px;
  height: 59px;
  border: none;
  color: #FFFFFF;
  font-family: "Poppins";
  border-radius: 12px;
`
export const ContainerBookingData = styled.div `
  display:flex;
  justify-content:space-between;
`
export const TitleBookingData = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #799283;
`
export const DateBookingData = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #212121;
`
export const Line = styled.hr`
  border-bottom: 1px solid #799283;
`
export const Image = styled.img `
  width: 100%;
  height: 50%;
  object-fit: cover;
`
export const ContainerRoomDetails = styled.div `
  display: flex;
  justify-content: space-between;
`
export const RoomDetailsTitle = styled.h3 `
  font-size: 14px;
  color: #6E6E6E;
  font-weight: 400;
`
export const RoomDetailsData = styled.h3 `
  font-size: 24px;
  color: #212121;
  font-weight: 500;
  span{
    color:#799283;
    font-size: 14px;
    font-weight: 400;
  }
`
export const RoomDetailText = styled.p`
  color:#363636;
  font-weight: 400;
  font-size: 14px;
`
export const RoomDetailsFacilitiesBox = styled.div `
  display: flex;
  gap: 1em;

`

export const RoomDetailsFacilitiesButton = styled.button`
  background-color: #E8F2EF;
  color: #135846;
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 600;
  border:none ;
  border-radius: 12px;
  padding: 2em;
`
