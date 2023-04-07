/* eslint-disable prettier/prettier */
import styled, {css} from "styled-components";
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
export const SwiperContainer = styled.div`
  height: 75%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: stretch;
  justify-content: stretch;
  .roomData {
    position: relative;
    font-family: var(--font-poppins);
    background: #bdc3c7;
    background: linear-gradient(to top, #333333, #787878);
    padding: 2rem ;
    height: 120px;
    border-radius: 0 0 1.2rem 0;
    h2 {
      font-size: 14px;
      font-weight: 500;
      color: #ffffff;
      margin: 0;
    }
    p {
      font-size: 14px;
      color: #d4d4d4;
      margin-top: 1rem;
    }
  }
  .swiper {
    height: fit-content;
  }
  .swiper-slide {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    border-radius: 0 1.2rem 1.2rem 0;
    height: 100%;
    width: 100% !important;
    img {
      border-radius: 0 1.2rem 0 0;
      height: 31rem;
      width: 100%;
      object-fit: cover;
    }
  }
  .swiper-button-prev {
    left: 1rem;
  }
  .swiper-button-next {
    right: 1rem;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 90%;
    background-color: #c5c5c5;
    border-radius: 1.2rem;
    border: 1px solid #FFFFFF;
    color: white;
    height: 4rem;
    width: 4rem;
    :after {
      font-size: 2rem;
      font-weight: 600;
    }
    :hover {
      border: 1px solid #ffffff;
    }
  }
`;

export const Tag = styled.div<{ currentStatus: string }>`
  position: absolute;
  right: -6rem;
  top: 2rem;
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff;
  padding: 1rem 7rem;
  transform: rotate(45deg);
  z-index: 2;
  ${(props) => {
    switch (props.currentStatus) {
      case "Check In":
        return css`
          background-color: green;
        `;
      case "Available":
        return css`
          background-color: green;
        `;
      case "Check Out":
        return css`
          background-color: red;
        `;
      case "Booked":
        return css`
          background-color: red;
        `;
      case "In Progress":
        return css`
          background-color: #fce205;
          color: #363636;
        `;
      default:
        return css`
          background-color: pink;
          color: white;
        `;
    }
  }}
`;

