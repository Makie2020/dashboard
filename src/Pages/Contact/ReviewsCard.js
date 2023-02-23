import React,  { useState}  from "react";
import { useSelector } from "react-redux";
import { SlClose } from "react-icons/sl";
import { BsCheckCircle  } from "react-icons/bs";
import { selectAllContacts } from "../../store/slice/ContactSlice";
import { Review,ReviewContainer,ReviewData,ReviewDataText,ReviewDataTime,ReviewDataTitle,ReviewIconBox,ReviewText } from "./styles";
import Modal from "@material-ui/core/Modal";
import { DialogContent } from "@material-ui/core";
import { ReviewDetails } from "./DetailsReview";

export function ReviewCards (){
  const contacts = useSelector(selectAllContacts).slice(0,3)
  const ref = React.createRef();
  const [openModal, setOpenModal] = useState(false);
  const [isClicked, setIsClicked] = useState([]);


  const handleOpen = (id) => {
    setIsClicked(contacts.find(contact => contact.id === id));
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setIsClicked([]);
  };

  return(
     <ReviewContainer>
      {contacts.map(data => (
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
        {isClicked && (
          <DialogContent>
            <ReviewDetails
              id={`${isClicked.id}-${isClicked.full_name}`}
              data ={isClicked}
              ref={ref}
            />
          </DialogContent>
        )}
      </Modal>
    </ReviewContainer>
  )
}