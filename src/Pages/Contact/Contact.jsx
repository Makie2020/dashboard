/* eslint-disable prettier/prettier */
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { ProductTable} from "../../components/Table/Table1";
import { fetchContacts, selectAllContacts } from "../../store/slice/ContactSlice";
import { ReviewCards } from "./ReviewsCard";

const Container = styled.div`
  background-color: #F8F8F8;
  padding: 2em;
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
  background-color: #FFFFFF;
  padding-left: 2em ;

`;
const Optionsdiv = styled.div `
  display:flex;
  justify-content: flex-end;
  background-color: #FFFFFF;
  padding-right: 2em;
`
const types = ['All Customer Reviews', 'Archived'];

function Contact() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts)
  const contactStatus = useSelector(state => state.contacts.status)
  const [active, setActive] = useState(types[0]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState(null);
  const [archivedMessages, setArchivedMessage] = useState([]);

  //fetch data
  useEffect(() => {
    if (contactStatus === 'idle') {
      dispatch(fetchContacts())
    }
  }, [contactStatus, dispatch])

  //UPPDATE CONTACTS
  useEffect(() => searchItems(null), [contacts])

   //SEARCH  
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== null) {
        const filteredData = contacts.filter((contact) => {
            return contact.full_name.toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    } else {
        setFilteredResults(contacts)
    }
  }
  // DROPDOWN
  const sortUsers = (e) => {
    const sortDirection = e.target.value;
    const copyArray = [...contacts];
    console.log(copyArray[1].date)
    copyArray.sort((a, b) => {
      return sortDirection === "0" ? a.date - b.date ? -1 : 1 : 0;
      
    });
    setFilteredResults(copyArray); 
  }

  //THEAD
  const column = [
    { heading: 'ID', value: 'id' },
    { heading: 'Date', value: 'date' },
    { heading: 'Customer', value: 'full_name' },
    { heading: 'Comment', value: 'subject' },
    { heading: 'Action', value: 'actions' },
  ]
  const handleArchivedClick = (id) => {
    const message = contacts.find(contact => contact.id === id);
    if (archivedMessages.includes(message)) {
      return  setArchivedMessage([...archivedMessages])
    } else {
      setArchivedMessage([...archivedMessages, message]);
    }
    var toRemove = message;
    var index = contacts.indexOf(toRemove);
    contacts.splice(index,1);
    console.log(contacts)
  };
  
   const handleData = (index) => {
    if (index === 0){
      setFilteredResults(contacts)
    } else if (index === 1) {
      setFilteredResults(archivedMessages)
    } 
  };

  return (
    <Layout name="Reviews">
      <Container>
        <ReviewCards/>
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
            <Input icon='search'
              placeholder='Search...'
              onChange={(e) => searchItems(e.target.value)}
           />
            <Select defaultValue={1} onChange={sortUsers}>
              <option value={0}>Ascending</option>
              <option value={1}>Descending</option>
            </Select>
          </Optionsdiv>
          <ProductTable data={filteredResults} column={column} rowsPerPage={10} onArchivedClick={handleArchivedClick} />     
        </>
      </Container>
    </Layout>
    
    );
}

export default Contact;