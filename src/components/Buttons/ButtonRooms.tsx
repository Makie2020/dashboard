/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/hook';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Button, DropDown, Container } from '../Table/TableStyles';
import { BsTrash, BsPencil} from "react-icons/bs";
import { useNavigate } from 'react-router';
import { deleteRoom } from '../../store/features/RoomsSlice';

export function ButtonActionsRoom(id:any) {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<any>({open:false})
  const handleButtonClick = () => {setState((state:any) => {
      return {
        open: !state.open,
      };
    });
  };
  const navigate = useNavigate();
  const editRoom = (e: React.MouseEvent<HTMLAnchorElement|HTMLElement>, id: string): void => {
    e.preventDefault();
    navigate(`/rooms/edit-room/${id}`);
  };
  const removeRoom = (e, id: number) => {
    e.preventDefault();
    dispatch(deleteRoom(id));
  }
  return (
    <Container>
      <Button type="button" onClick={handleButtonClick}><BiDotsVerticalRounded/></Button>
      {state.open && (
        <DropDown>
          <ul>
            <li onClick={(e) => {editRoom(e, id.id)}}><BsPencil/>Edit Room</li>
            <li onClick={(e) => {removeRoom(e, id.id)}}><BsTrash/>Delete Room</li>
          </ul>
        </DropDown>
      )}
    </Container>
  );
};