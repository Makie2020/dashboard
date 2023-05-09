/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/hook';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Button, DropDown, Container } from '../Table/TableStyles';
import { BsTrash, BsPencil} from "react-icons/bs";
import { useNavigate } from 'react-router';
import { deleteBooking } from '../../store/features/BookingsSlice';

export function ButtonActions(id:any) {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<any>({open:false})
  const handleButtonClick = () => {setState((state:any) => {
      return {
        open: !state.open,
      };
    });
  };
  const navigate = useNavigate();
  const editBooking = (e: React.MouseEvent<HTMLAnchorElement|HTMLElement>, id: string): void => {
    e.preventDefault();
    navigate(`/bookings/edit-booking/${id}`);
  };
  const removeBooking = (e, id: number) => {
    e.preventDefault();
    dispatch(deleteBooking(id));
  }
  return (
    <Container>
      <Button type="button" onClick={handleButtonClick}><BiDotsVerticalRounded/></Button>
      {state.open && (
        <DropDown>
          <ul>
            <li onClick={(e) => {editBooking(e, id.id)}}><BsPencil/>Edit Booking</li>
            <li onClick={(e) => {removeBooking(e, id.id)}}><BsTrash/>Delete Booking</li>
          </ul>
        </DropDown>
      )}
    </Container>
  );
};
