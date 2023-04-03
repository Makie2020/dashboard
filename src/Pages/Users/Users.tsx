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
  const {users} = useAppSelector(selectAllUsers)
  const usersStatus = useAppSelector(state => state.users.status)
  const [active, setActive] = useState(types[0]);
  const [filteredResults, setFilteredResults] = React.useState<UsersDataExtended[]>([]);
  const [searchInput, setSearchInput] = React.useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Ascending");

  //fetch users
  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchUsers())
    }
  }, [usersStatus, dispatch])

  // SORT CONTACTS
  useEffect(() => {
    let orderedUsers: UsersDataExtended[] = [...users];
    switch (activeFilter) {
      case "Ascending.":
        orderedUsers.sort((a: UsersDataExtended, b: UsersDataExtended) => {
          const personA: string = a.full_name;
          const personB: string = b.full_name;
            if (personA < personB) {
              return -1;
            }
            if (personA > personB) {
              return 1;
            }
            return 0;
          });
          break;
      case "Descending":
        orderedUsers.sort((a: UsersDataExtended, b: UsersDataExtended) => {
        const personA: string = a.full_name;
        const personB: string = b.full_name;
          if (personA > personB) {
            return -1;
          }
          if (personA < personB) {
            return 1;
          }
          return 0;
        });
        break;

      default:
      break;
    }
    setFilteredResults(orderedUsers);
  }, [activeFilter, users]);


  //UPPDATE USERS
  useEffect(() => searchItems(null), [users])
  
   //SEARCH  
  const searchItems = (searchValue: string | null) => {
    setSearchInput(searchValue)
    if (searchInput !== null) {
      console.log("User:", users)
        const filteredData = users.filter((user: any) => {
            return user.full_name.toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    } else {
        setFilteredResults(users)
    }
  }

  //THEAD
  const column = [
    { heading: 'Photo', value: 'photo' },
    { heading: 'Name', value: 'full_name' },
    { heading: 'ID', value: 'id' },
    { heading: 'Email', value: 'email' },
    { heading: 'Start Date', value: 'start_date' },
    { heading: 'Description ', value: 'description' },
    { heading: 'Contact ', value: 'phone_number' },
    { heading: 'Status', value: 'status' },
  ]
  
   const handleData = (index: number) => {
    if (index === 0){
      setFilteredResults(users)
    } else if (index === 1) {
      const filteredUsers = [...users]
      const filteredActiveUsers  = filteredUsers.filter((user) =>  user.status === "ACTIVE");
      setFilteredResults(filteredActiveUsers)
    } else if(index === 2) {
      const InActiveUsers = [...users]
      const filteredInactiveUsers  = InActiveUsers.filter((user) =>  user.status === "INACTIVE");
      setFilteredResults(filteredInactiveUsers)
    }
  };
  return (
    <Layout name="Users">
      <div>
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
            <Link to='/users/new-user'><Button><HiUserAdd/> New Employee</Button></Link>
            <Input
              placeholder='Search...'
              onChange={(e) => searchItems(e.target.value)}
           />
            <Select onChange={() => setActiveFilter}>
              <option>Ascending</option>
              <option>Descending</option>
            </Select>
          </Optionsdiv>
          <ProductTable data={filteredResults} column={column} rowsPerPage={10}/>     
        </>
      </div>
    </Layout>
    );
}

export default Users;