/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import styled from 'styled-components';

export const Title = styled.h1 `
  color: #393939;
  font-weight: 500;
  font-size: 20px;
  font-family:"Poppins";
  line-height: 0;
  padding: 30px 0 0 30px;
`
export const Container = styled.div `
  display: flex;
  gap: 2em;
  justify-content: space-between;
  align-items:center;
`
export const ContainerDetails = styled.div `
  display:flex;
  gap:2em;
`
export const ContainerBooked = styled.div `
  display:flex;
`
export const Image = styled.img `
  width: 154px;
  height: 92px;
  background-color: #C5C5C5;
  border-radius: 8px; 
  margin-left: 30px;
`
export const TitleDetail = styled.h4`
  color:#393939;
  font-family:"Poppins";
  font-size: 20px;
  font-weight: 500;
  line-height: 0;
`
export const ImageDetail = styled.img `
  width: 39px;
  height: 39px;
  background-color: #C5C5C5;
  border-radius: 50%; 
`
export const NameDetail = styled.p`
  color:#393939;
  font-family:"Poppins";
  font-size: 14px;
  font-weight: 500;
`
export const TimeDetail = styled.p`
  color:#393939;
  font-family:"Poppins";
  font-size: 14px;
  font-weight: 300;
`
export const DetailDate = styled.div`
  background-color: #135846;
  height: 53px;
  width: 53px;
  border-radius: 12px;
  color: #FFFFFF;
  font-family:"Poppins";
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5em;
`
export const DetailDateBooked = styled.div`
  background-color: #E23428;
  min-height: 53px;
  min-width: 53px;
  border-radius: 12px;
  color: #FFFFFF;
  font-family:"Poppins";
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  :last-child{
    margin-right: 5em;
  }
`
export const DetailOccupied = styled.div`
  background-color: #FB9F44;
  height: 53px;
  width: 53px;
  border-radius: 12px;
  color: #FFFFFF;
  font-family:"Poppins";
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5em;
`