/* eslint-disable prettier/prettier */
import React,  { useState}  from "react";
import { useAppSelector } from '../../hooks/hook';
import { SlClose } from "react-icons/sl";
import { BsCheckCircle  } from "react-icons/bs";
import { selectAllContacts, ContactDataExtended } from "../../store/features/ContactSlice";
import { Review,ReviewContainer,ReviewData,ReviewDataText,ReviewDataTime,ReviewDataTitle,ReviewIconBox,ReviewText } from "./styles";
import Modal from "@material-ui/core/Modal";
import { DialogContent } from "@material-ui/core";
import { ReviewDetails } from "./DetailsReview";

export function ReviewCards (){
  const contacts = useAppSelector(selectAllContacts).slice(0,3)
  const ref = React.createRef<HTMLInputElement>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [bookingClicked, setBookingClicked] = useState<ContactDataExtended[]>([]);

  const handleOpen = (id: number) => {
    const message: any =(contacts.find((contact:any) => contact.id === id));
    setBookingClicked(message)
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setBookingClicked([]);
  };

  return(
     <ReviewContainer>
      {contacts.map((data: any) => (
        <Review key={data.id} id={data.id} onClick={() => handleOpen(data.id)}>
          <ReviewText>{data.subject}</ReviewText>
          <ReviewData>
            <img alt="person" src={data.photo}></img>
            <div>
              <ReviewDataText>
                <ReviewDataTitle>{data.full_name}</ReviewDataTitle>
                <ReviewDataTime>4m ago</ReviewDataTime>
              </ReviewDataText>
              <ReviewIconBox>
                <BsCheckCircle style={{marginRight: "10px", color:"#5AD07A"}}/>
                <SlClose style ={{color: "#E23428"}}/>
              </ReviewIconBox>
            </div>
          </ReviewData>
        </Review>
      ))}  
      <Modal
        open={openModal}
        onClose={handleClose}
      >
        {bookingClicked  && (
          <DialogContent>
            <ReviewDetails
              data ={bookingClicked}
              ref={ref}
            />
          </DialogContent>
        )} 
      </Modal>
    </ReviewContainer>
  )
}