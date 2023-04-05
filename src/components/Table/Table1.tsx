/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Pagination from './Pagination';
import {StyledTable, Button, Th, Img} from "./TableStyles"
import { useNavigate } from 'react-router';
import {ButtonActions} from '../Buttons/Button';
import { ButtonActionsRoom } from '../Buttons/ButtonRooms';
import { ButtonNotes } from '../Buttons/ButtonNotes';

export const ProductTable = (props: any)  => {
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = props.data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(props.data.length / recordsPerPage)
  const emitId = props.onArchivedClick;
  const navigate = useNavigate();
 
  const goToBooking = (id:string) => {
    navigate("/bookings/" + id);
  };

  const data:any = props;
    const TableRow = (props: any) => (
    <tr>      
      {props.column.map((columnItem: any) => {
        let td = <td key={props.data.id}/>;
        if (columnItem.heading === "Status") {
          td = <td key={props.data.id}><Button value={props.data[`${columnItem.value}`]}>{props.data[`${columnItem.value}`]}</Button></td>
        } else if (columnItem.heading === "Photo"){
          td = <td key={props.data.id}><Img src= {props.data[`${columnItem.value}`]}/></td>
        } else if (columnItem.heading === "Special Request"){
          td = <td key={props.data.id}><ButtonNotes value={props.data[`${columnItem.value}`]}></ButtonNotes></td>
        } else if (columnItem.heading === "Action"){
          td = <td key={props.data.id}><Button value={props.data[`${columnItem.value}`]} onClick={(_e) => emitId(props.data.id)}>Archive</Button></td>
        } else if (columnItem.heading === "Booking ID"){
          td = <td key={props.data.id} onClick={() => {goToBooking(props.data.id)}}>{props.data[`${columnItem.value}`]}</td>
        } else if  (columnItem.heading === "Actions Booking") {
          td = <td key={props.data.id}><ButtonActions id={props.data.id} data={data}/></td> 
        } else if (columnItem.heading === "Actions Room") {
          td = <td key={props.data.id}><ButtonActionsRoom id={props.data.id} data={data}/></td> 
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
