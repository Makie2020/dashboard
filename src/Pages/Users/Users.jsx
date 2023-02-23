import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { ProductTable} from "../../components/Table/Table1";
import { fetchUsers, selectAllUsers} from "../../store/slice/UsersSlice";
import { HiUserAdd } from "react-icons/hi";


const Button = styled.button `
  background-color: #135846;
  color: #FFFFFF;
  font-family:"Poppins";
  font-weight: 16px;
  border-radius: 12px;
  border: none;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  gap: 10px;
`
const Input = styled.input `
  padding: 1em 2em;
  border-radius: 12px;
  color: #135846;
  border: 1px solid #135846;
  font-family:"Poppins";
  font-weight: 16px;
  margin-left: 2em;
`
const Select = styled.select`
  font-family:"Poppins";
  font-weight: 16px;
  margin-left: 2em;
  border-radius: 12px;
  background-color: #135846;
  color: #FFFFFF;
  border: none;
  padding: 1em 2em;
`
const Tab = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: #6E6E6E;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  background: white;
  border: none;
  font-family:"Poppins";
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #135846;
    color: #135846;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const Optionsdiv = styled.div `
  display:flex;
  justify-content: flex-end;
  margin: 1em 1em;
`

const types = ['All Employees', 'Active Employee', 'Inactive Employee'];

function Users() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers)
  const usersStatus = useSelector(state => state.users.status)
  const [active, setActive] = useState(types[0]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState(null);


  //fetch data
  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchUsers())
    }
  }, [usersStatus, dispatch])

  
  //UPPDATE USERS
  useEffect(() => searchItems(null), [users])

   //SEARCH  
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== null) {
      console.log("User:", users)
        const filteredData = users.filter((user) => {
            return user.full_name.toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    } else {
        setFilteredResults(users)
    }
  }
  // DROPDOWN
  const sortUsers = (e) => {
    const sortDirection = e.target.value;
    const copyArray = [...users];
    console.log(copyArray[1].full_name)
    copyArray.sort((a, b) => {
      return sortDirection === "0" ? a.full_name < b.full_name ? -1 : 1 : 0;
    });
    setFilteredResults(copyArray); 
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
  
   const handleData = (index) => {
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

  //BUTTON NEW USER
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/users/newUser`; 
    navigate(path);
  }
  return (
    <Layout>
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
            <Button onClick={routeChange}><HiUserAdd/> New Employee</Button>
            <Input icon='search'
              placeholder='Search...'
              onChange={(e) => searchItems(e.target.value)}
           />
            <Select defaultValue={1} onChange={sortUsers}>
              <option value={0}>Ascending</option>
              <option value={1}>Descending</option>
            </Select>
          </Optionsdiv>
          <ProductTable data={filteredResults} column={column} rowsPerPage={10}/>     
        </>
      </div>
    </Layout>
    
    );
}

export default Users;