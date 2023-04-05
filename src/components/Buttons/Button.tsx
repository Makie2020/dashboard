/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Button, DropDown, Container } from '../Table/TableStyles';
import { BsTrash, BsPencil} from "react-icons/bs";
import { useNavigate } from 'react-router';

export function ButtonActions(id:any, data: any) {
  const [state, setState] = useState<any>({open:false})
  const handleButtonClick = () => {setState((state:any) => {
      return {
        open: !state.open,
      };
    });
  };
  const navigate = useNavigate();
  const deleteBooking = data.onDeleteBooking;
  console.log(data)
  const editBooking = (e: React.MouseEvent<HTMLAnchorElement|HTMLElement>, id: string): void => {
    e.preventDefault();
    navigate(`/bookings/edit-booking/${id}`);
  };
  return (
    <Container>
      <Button type="button" onClick={handleButtonClick}><BiDotsVerticalRounded/></Button>
      {state.open && (
        <DropDown>
          <ul>
            <li onClick={(e) => {editBooking(e, id.id)}}><BsPencil/>Edit Booking</li>
            <li onClick={(e) => {deleteBooking(e, id.id)}}><BsTrash/>Delete Booking</li>
          </ul>
        </DropDown>
      )}
    </Container>
  );
};
