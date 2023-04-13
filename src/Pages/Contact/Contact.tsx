/* eslint-disable prettier/prettier */
import React, { useEffect, useState} from "react";
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import styled from "styled-components";
import Layout from "../../components/Layout";
import { ProductTable} from "../../components/Table/Table1";
import { fetchContacts, selectAllContacts } from "../../store/features/ContactSlice";
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
interface Active {
  active: boolean;
  o?: {
  color: string,
  borderBottom: string }
}

const Tab = styled.button<Active>`
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
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectAllContacts)
  const contactStatus = useAppSelector(state => state.contacts.status)
  const [active, setActive] = useState(types[0]);
  const [filteredResults, setFilteredResults] = useState<string []>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [archivedMessages, setArchivedMessage] = useState<string[]>([]);

  //fetch data
  useEffect(() => {
    if (contactStatus === 'idle') {
      dispatch(fetchContacts())
    }
  }, [contactStatus, dispatch])

  //UPPDATE CONTACTS
  useEffect(() => searchItems(""), [contacts])

   //SEARCH  
  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue)
    if (searchInput !== null) {
        const filteredData = contacts.filter((contact: any) => {
            return contact.full_name.toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    } else {
        setFilteredResults(contacts)
    }
  }

  //THEAD
  const column = [
    { heading: 'ID', value: 'id' },
    { heading: 'Date', value: 'start_date' },
    { heading: 'Customer', value: 'full_name' },
    { heading: 'Comment', value: 'description' },
    { heading: 'Action', value: 'actions' },
  ]
  const handleArchivedClick = (id: number) => {
    const message = contacts.find((contact: any) => contact.id === id);
    if (archivedMessages.includes(message)) {
      return  setArchivedMessage([...archivedMessages])
    } else {
      setArchivedMessage([...archivedMessages, message]);
    }
    setFilteredResults(filteredResults.filter((i:any) => i.id !== message.id));
  };

  console.log(filteredResults)
  
   const handleData = (index: number) => {
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
            <Input
              placeholder='Search...'
              onChange={(e) => searchItems(e.target.value)}
           />
          </Optionsdiv>
          <ProductTable data={filteredResults} column={column} rowsPerPage={10} onArchivedClick={handleArchivedClick} />     
        </>
      </Container>
    </Layout>
    
    );
}

export default Contact;