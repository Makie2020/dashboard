import React from "react";
import styled, {css} from "styled-components";

const StyledTable = styled.table `
   width: 100%;
   border-collapse: collapse;
   min-width: 800px;
   td, th {
    text-align: left;
   }
   tr {
        &:hover{
      box-shadow: 0px 4px 30px #00000014;
    }
   }
`

const Button = styled.button `
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
  ${props => props.value ==="Available" && css`
    background-color: #E8FFEE;
    color: #5AD07A;
  `};
  ${props => (props.value ==="Occupied") && css`
    background-color: #FFEDEC;
    color: #E23428;
  `};
`
const Img = styled.img `
  width: 125px;
  height: 77px;
  object-fit:cover ;
`

const Table = ({ data, column }) => {
  
  return (
    <StyledTable>
      <thead>
        <tr>
          {column.map((item, index) => <TableHeadItem item={item} />)}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => <TableRow item={item} column={column} />)}
      </tbody>
    </StyledTable>
  )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {
      if(columnItem.heading === "Status"){
      return <td key={columnItem.value}><Button value={item[`${columnItem.value}`]}>{item[`${columnItem.value}`]}</Button></td>
      } else if (columnItem.heading === "Photo"){
        return <td key={columnItem.value}><Img src= {item[`${columnItem.value}`]}/></td>
      }
     return <td>{item[`${columnItem.value}`]}</td>
    })}
  </tr>
)

export default Table