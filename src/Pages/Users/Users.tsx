/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { ButtonGroup,Tab, Optionsdiv, Button, Input, Select } from "./UserStyles";
import {Layout} from "../../components/Layout";
import { ProductTable} from "../../components/Table/Table1";
import { fetchUsers, selectAllUsers} from "../../store/features/UsersSlice";
import { UsersDataExtended } from '../../Interfaces/UserDataInterface';
import { HiUserAdd } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../hooks/hook'; 

const types = ['All Employees', 'Active Employee', 'Inactive Employee'];

function Users() {
  const dispatch = useAppDispatch();
  const usersList = useAppSelector(selectAllUsers)
  const usersStatus = useAppSelector(state => state.users.status)
  const [active, setActive] = useState(types[0]);
  const [filteredResults, setFilteredResults] = React.useState<UsersDataExtended[]>([]);
  const [searchInput, setSearchInput] = React.useState<string | null>(null);
  const [ order, setOrder ] = useState('start_date');

  //fetch users
  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchUsers())
    }
  }, [usersStatus, dispatch])

  // SORT CONTACTS
  useEffect(() => {
    console.log(usersList)
    const usersOrderBy = [...usersList];
    usersOrderBy.sort((a, b) => {
        if(a[order] > b[order]) {
            return 1
        } else if (a[order] < b[order]) {
            return -1
        }
        return 0
    });
    setFilteredResults(usersOrderBy)
  }, [order, usersList])


  //UPPDATE USERS
  useEffect(() => searchItems(null), [usersList])
  
   //SEARCH  
  const searchItems = (searchValue: string | null) => {
    setSearchInput(searchValue)
    if (searchInput !== null) {
        const filteredData = usersList.filter((user: any) => {
            return user.full_name.toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    } else {
        setFilteredResults(usersList)
    }
  }

  //THEAD
  const column = [
    { heading: 'Photo', value: 'photo' },
    { heading: 'Name', value: 'full_name' },
    { heading: 'ID', value: 'id' },
    { heading: 'Email', value: 'email' },
    { heading: 'Position', value: 'position' },
    { heading: 'Start Date', value: 'start_date' },
    { heading: 'Description ', value: 'description' },
    { heading: 'Contact ', value: 'phone_number' },
    { heading: 'Status', value: 'status' },
  ]
  
   const handleData = (index: number) => {
    if (index === 0){
      setFilteredResults(usersList)
    } else if (index === 1) {
      const filteredUsers = [...usersList]
      const filteredActiveUsers  = filteredUsers.filter((user) =>  user.status === "ACTIVE");
      setFilteredResults(filteredActiveUsers)
    } else if(index === 2) {
      const InActiveUsers = [...usersList]
      const filteredInactiveUsers  = InActiveUsers.filter((user) =>  user.status === "INACTIVE");
      setFilteredResults(filteredInactiveUsers)
    }
  };
  return (
    <Layout name="Users">
      <div style={{backgroundColor: "#FFFFFF"}}>
        <>
          <ButtonGroup>
            {types.map((type, index) => (
              <Tab
                key={type}
                active={active === type}
                value ={index}
                onClick={() =>{ setActive(type); handleData(index)}}>
                  {type}
                </Tab>
            ))}
          </ButtonGroup>
          <Optionsdiv>
            <Link to='/users/new-user' style={{textDecoration : "none"}}><Button><HiUserAdd/> New Employee</Button></Link>
            <Input
              placeholder='Search...'
              onChange={(e) => searchItems(e.target.value)}
           />
           <Select value={order} onChange={({ target }) => setOrder(target.value)}>
              <option value="start_date">Start Date</option>
              <option value="full_name">Name</option>
            </Select>
          </Optionsdiv>
          <ProductTable data={filteredResults} column={column} rowsPerPage={10}/>     
        </>
      </div>
    </Layout>
    );
}

export default Users;