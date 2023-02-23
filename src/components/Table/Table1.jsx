import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Pagination from './Pagination';

const StyledTable = styled.table `
   width: 100%;
   border-collapse: collapse;
   min-width: 800px;
   background-color: #FFFFFF;
   padding-left: 2em;
   td, th {
    text-align: left;
    padding-left: 1em;
   }
   tr {
        &:hover{
      box-shadow: 0px 4px 30px #00000014;
    }
   }
`
const Button = styled.button.attrs(props =>({className: props.className})) `
  width: 109px;
  height: 48px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-family: "Poppins";
  font-weight: 500;
  &:hover{
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  };
  ${props => (props.value ==="Available") && css`
    background-color: #E8FFEE;
    color: #5AD07A;
  `};
  ${props => (props.value ==="Occupied") && css`
    background-color: #FFEDEC;
    color: #E23428;
  `};
  ${props => (props.value ==="ACTIVE") && css`
    background-color: transparent;
    color: #5AD07A;
  `};
  ${props => (props.value ==="INACTIVE") && css`
    background-color: transparent;
    color: #E23428;
  `};
  ${props => (props.value ==="In Progress") && css`
    background-color: #ffe6cc;
    color: #ff9c33;
  `};
  ${props => (props.value ==="Special Request") && css`
    background-color: #EEF9F2;
  `};
  ${props => (props.value ==="Action") && css`
    color: #E23428;
  `};
`
const Img = styled.img `
  width: 125px;
  height: 77px;
  object-fit:cover ;
`
const Th = styled.th `
  height: 65px;
`

export const ProductTable = (props, rowsPerPage)  => {
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = props.data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(props.data.length / recordsPerPage)
  const emitId = props.onArchivedClick;

    const TableRow = (props) => (
    <tr>      
      {props.column.map((columnItem) => {
        let td = <td key={props.data.id}/>;
        if (columnItem.heading === "Status") {
          td = <td key={props.data.id}><Button value={props.data[`${columnItem.value}`]}>{props.data[`${columnItem.value}`]}</Button></td>
        } else if (columnItem.heading === "Photo"){
          td = <td key={props.data.check_out}><Img src= {props.data[`${columnItem.value}`]}/></td>
        } else if (columnItem.heading === "Special Request"){
          td = <td key={props.data.special_request}><Button value={props.data[`${columnItem.value}`]}>View Notes</Button></td>
        } else if (columnItem.heading === "Action"){
          td = <td key={props.data.id}><Button value={props.data[`${columnItem.value}`]} onClick={event => emitId(props.data.id)}>Archive</Button></td>
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
          {currentRecords.map((item) => <TableRow data={item} column={props.column} key={item.id}/>)}
        </tbody>
      </StyledTable>
      <Pagination nPages={nPages} currentPage={currentPage}  setCurrentPage={setCurrentPage}/>
    </div>
 
  );
}
