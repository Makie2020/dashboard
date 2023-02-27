import React from 'react';
import styled from 'styled-components';
import { Review,ReviewData,ReviewDataText,ReviewDataTime,ReviewDataTitle,ReviewIconBox,ReviewText,ReviewDataContact } from "./styles";
import { SlClose } from "react-icons/sl";
import { BsCheckCircle  } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Container = styled.div `
  font-family: "Poppins" ;
`

export const ReviewDetails = React.forwardRef(({data}, ref) => {

  return (
    <Container ref={ref}>
      <Review key={data.id}>
        <ReviewText>{data.subject}</ReviewText>
          <ReviewData>
            <img alt="person" src={data.photo}></img>
            <div>
              <ReviewDataText>
                <ReviewDataTitle>{data.full_name}</ReviewDataTitle>
                <ReviewDataContact><HiOutlineMail/>{data.email}</ReviewDataContact>
                <ReviewDataContact><BsFillTelephoneFill/>{data.phone_number}</ReviewDataContact>
                <ReviewDataTime>4m ago</ReviewDataTime>
              </ReviewDataText>
              <ReviewIconBox>
                <BsCheckCircle style={{marginRight: "10px", color:"#5AD07A"}}/>
                <SlClose style ={{color: "#E23428"}}/>
              </ReviewIconBox>
            </div>
          </ReviewData>
        </Review>
    </Container>
  );
});
