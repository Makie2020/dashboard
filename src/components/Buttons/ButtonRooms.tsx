/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Button, DropDown, Container } from '../Table/TableStyles';
import { BsTrash, BsPencil} from "react-icons/bs";
import { useNavigate } from 'react-router';

export function ButtonActionsRoom(id:any, data: any) {
  const [state, setState] = useState<any>({open:false})
  const handleButtonClick = () => {setState((state:any) => {
      return {
        open: !state.open,
      };
    });
  };
  const navigate = useNavigate();
  const deleteRoom = data.onDeleteRoom;
  console.log(data)
  const editRoom = (e: React.MouseEvent<HTMLAnchorElement|HTMLElement>, id: string): void => {
    e.preventDefault();
    navigate(`/rooms/edit-room/${id}`);
  };
  return (
    <Container>
      <Button type="button" onClick={handleButtonClick}><BiDotsVerticalRounded/></Button>
      {state.open && (
        <DropDown>
          <ul>
            <li onClick={(e) => {editRoom(e, id.id)}}><BsPencil/>Edit Room</li>
            <li onClick={(e) => {deleteRoom(e, id.id)}}><BsTrash/>Delete Room</li>
          </ul>
        </DropDown>
      )}
    </Container>
  );
};