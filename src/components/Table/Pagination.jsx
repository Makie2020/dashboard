/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components';

const List = styled.ul`
  display:flex;
  justify-content: flex-end;
`
const Li = styled.li`
  list-style-type: none;
  margin: 0 1em;
  &:first-child, :last-child{
    width: 91px;
  }
`
const Button = styled.a `
  padding: 1em;
  border: 1px solid #135846;
  border-radius: 12px;
  background-color: #FFFFFF;
  font-family: "Poppins";
  color:#135846;
 
`
const NumberedButtons = styled.a `
  font-family: "Poppins";
  font-size: 16px;
  color: #393939;
  border-radius: 12px;
  &:hover{
    background-color: #135846;
    color: #FFFFFF;
    padding: 1em 1.5em;
  }
`

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
          if(currentPage !== nPages) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
      if(currentPage !== 1) setCurrentPage(currentPage - 1)
  }
  return (
    <nav>
      <List>
        <Li>
          <Button onClick={prevPage} href='#'>Prev</Button>
        </Li>
        {pageNumbers.map(pgNumber => (
          <Li key={pgNumber}>
            <NumberedButtons onClick={() => setCurrentPage(pgNumber)} href='#'>
              {pgNumber}
            </NumberedButtons>
          </Li>
        ))}
        <Li>
          <Button onClick={nextPage} href='#'> Next</Button>
        </Li>
      </List>
    </nav>
  )
}

export default Pagination