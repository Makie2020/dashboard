/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Pagination from './Pagination';
import { BiDotsVerticalRounded } from "react-icons/bi";
import {DropDown, StyledTable, Button, Th, Img} from "./TableStyles"
import { useNavigate } from 'react-router';
import { BsTrash, BsPencil } from "react-icons/bs";



export const ProductTable = (props: any)  => {
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = props.data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(props.data.length / recordsPerPage)
  const emitId = props.onArchivedClick;
  const deleteBooking = props.onDeleteBooking;
  const deleteRoom = props.onDeleteRoom;
  const navigate = useNavigate();

  const [showOptions, setShowOptions] = useState(false);

  const goToBooking = (id:string) => {
    navigate("/bookings/" + id);
  };
  const editBooking = (e:Event) => {
    e.preventDefault();
    navigate("/bookings/edit-booking");
  };
  
  const editRoom = (e:Event) => {
    e.preventDefault();
    navigate("/rooms/edit-room");
  };

    const TableRow = (props: any) => (
    <tr>      
      {props.column.map((columnItem: any) => {
        let td = <td key={props.data.id}/>;
        if (columnItem.heading === "Status") {
          td = <td key={props.data.id}><Button value={props.data[`${columnItem.value}`]}>{props.data[`${columnItem.value}`]}</Button></td>
        } else if (columnItem.heading === "Photo"){
          td = <td key={props.data.id}><Img src= {props.data[`${columnItem.value}`]}/></td>
        } else if (columnItem.heading === "Special Request"){
          td = <td key={props.data.id}><Button value={props.data[`${columnItem.value}`]}>View Notes</Button></td>
        } else if (columnItem.heading === "Action"){
          td = <td key={props.data.id}><Button value={props.data[`${columnItem.value}`]} onClick={(_e) => emitId(props.data.id)}>Archive</Button></td>
        } else if (columnItem.heading === "Booking ID"){
          td = <td key={props.data.bookingId} onClick={() => {goToBooking(props.data.bookingId)}}>{props.data[`${columnItem.value}`]}</td>
        } else if  (columnItem.heading === "Actions Bookings") {
          td = <td key={props.data.id}>
            <Button onClick={(_e) => {setShowOptions(!showOptions)}}>
              <BiDotsVerticalRounded/>
            </Button>
          {showOptions ? (
            <DropDown>
              <div>
                <button onClick={(_e) => {editBooking(props.data.id)}}><BsPencil/> Edit booking</button>
                <button onClick={(_e) => {deleteBooking(_e, props.data.id)}}> <BsTrash/> Delete booking</button>
              </div>
            </DropDown>
          ) : null}
        </td> 
        } else if (columnItem.heading === "Actions Room") {
          td = <td key={props.data.id}>
            <Button onClick={(_e) => {setShowOptions(!showOptions)}}>
              <BiDotsVerticalRounded/>
            </Button>
              {showOptions ? (
                <DropDown>
                  <div>
                    <button onClick={(_e) => {editRoom(props.data.id)}}><BsPencil/> Edit room</button>
                    <button onClick={(_e) => {deleteRoom(_e, props.data.id)}}> <BsTrash/> Delete room</button>
                  </div>
                </DropDown>
              ) : null}
          </td> 
        } else {
            td = <td key={props.data.check_in}>{props.data[`${columnItem.value}`]}</td>
        }
        return td;
        })}
    </tr>
  )  

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            {props.column.map((item: any) => <Th key={item.heading}>{item.heading}</Th>)}
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((item: any) => <TableRow data={item} column={props.column} key={item.id} />)}
        </tbody>
      </StyledTable>
      <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
 
  );
}
