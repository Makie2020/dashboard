/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Pagination from './Pagination';
import { BiDotsVerticalRounded } from "react-icons/bi";
import {DropDown, StyledTable, Button, Th, Img} from "./TableStyles"
import { useNavigate } from 'react-router';
import { BsTrash, BsPencil } from "react-icons/bs";

export const ProductTable = (props, rowsPerPage)  => {
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = props.data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(props.data.length / recordsPerPage)
  const emitId = props.onArchivedClick;
  const deleteBooking = props.onDeleteBooking;
  const navigate = useNavigate();

  const [showOptions, setShowOptions] = useState(false);

  const goToBooking = (id) => {
    navigate("/bookings/" + id);
  };
  const editBooking = (e) => {
    e.preventDefault();
    navigate("/bookings/edit-booking");
  };

    const TableRow = (props) => (
    <tr>      
      {props.column.map((columnItem) => {
        let td = <td key={props.data.id}/>;
        if (columnItem.heading === "Status") {
          td = <td key={props.data.id}><Button value={props.data[`${columnItem.value}`]}>{props.data[`${columnItem.value}`]}</Button></td>
        } else if (columnItem.heading === "Photo"){
          td = <td key={props.data.id}><Img src= {props.data[`${columnItem.value}`]}/></td>
        } else if (columnItem.heading === "Special Request"){
          td = <td key={props.data.id}><Button value={props.data[`${columnItem.value}`]}>View Notes</Button></td>
        } else if (columnItem.heading === "Action"){
          td = <td key={props.data.id}><Button value={props.data[`${columnItem.value}`]} onClick={event => emitId(props.data.id)}>Archive</Button></td>
        } else if (columnItem.heading === "Booking ID"){
          td = <td key={props.data.bookingId} onClick={() => {goToBooking(props.data.bookingId)}}>{props.data[`${columnItem.value}`]}</td>
        } else if  (columnItem.heading === "Actions") {
          td = <td key={props.data.id}>
            <Button onClick={(e) => {setShowOptions(!showOptions)}}>
              <BiDotsVerticalRounded/>
            </Button>
          {showOptions ? (
            <DropDown>
              <div>
                <button onClick={(e) => {editBooking(e, props.data.id)}}><BsPencil/> Edit booking</button>
                <button onClick={(e) => {deleteBooking(e, props.data.id)}}> <BsTrash/> Delete booking</button>
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
            {props.column.map((item) => <Th item={item} key={item.heading}>{item.heading}</Th>)}
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((item) => <TableRow data={item} column={props.column} key={item.id} />)}
        </tbody>
      </StyledTable>
      <Pagination nPages={nPages} currentPage={currentPage}  setCurrentPage={setCurrentPage}/>
    </div>
 
  );
}
