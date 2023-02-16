import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import { BsThreeDotsVertical } from "react-icons/bs";
import Pagination from './Pagination';


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
const Icon = styled.button`
  border: none;
  width: 24px;
  height: 24px;
`

const ActionsMenu = styled.ul`
  display: none;
`
const Th = styled.th `
  height: 65px;
  +.descending {
    background-color: green;
    content : "↓"; 
  };
  + .ascending{
  background-color: red;
  }
`
export const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  return { items : sortedItems, requestSort, sortConfig };
};

export const ProductTable = (props, rowsPerPage)  => {
  console.log(props)
  const { items, requestSort, sortConfig } = useSortableData(props.data);
  const getClassNamesFor = (heading) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === heading ? sortConfig.direction : undefined;
  };

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = props.data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(props.data.length / recordsPerPage)

  //ActionsMenu
  const[openActionMenu, setOpenActionsMenu] = useState(null);

  const TableRow = (props) => (
    <tr>      
      {props.column.map((columnItem) => {
        let td;
        if (columnItem.heading === "Status") {
          td = <td key={props.data.id}><Button value={props.data[`${columnItem.value}`]}>{props.data[`${columnItem.value}`]}</Button></td>
        } else if (columnItem.heading === "Photo"){
          td = <td key={props.data.check_out}><Img src= {props.data[`${columnItem.value}`]}/></td>
        } else {
          td = <td key={props.data.check_in}>{props.data[`${columnItem.value}`]}</td>
        }
        return td;
      })}
      {props.actions ?
        <td>
          <Icon onClick={() => setOpenActionsMenu(prevState => prevState === props.data.id ? null: props.data.id)}><BsThreeDotsVertical/></Icon>
          <ActionsMenu visible = {setOpenActionsMenu === props.data.id}>{props.actions.map(action => <li onClick={action.action}>{action.name}</li>)}</ActionsMenu>
        </td>
      : null}
    </tr>
  )  

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            {props.column.map((item) => <Th item={item} key={item.heading}onClick={() => requestSort(item)} className={getClassNamesFor(item)}>{item.heading}</Th>)}
            {props.actions ? <Th>Actions</Th> : null}
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((item) => <TableRow data={item} column={props.column} actions={props.actions}/>)}
        </tbody>
      </StyledTable>
      <Pagination nPages={nPages} currentPage={currentPage}  setCurrentPage={setCurrentPage}/>
    </div>
 
  );
}
