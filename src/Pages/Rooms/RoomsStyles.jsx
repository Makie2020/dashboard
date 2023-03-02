/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Button = styled.button `
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
export const Select = styled.select`
  font-family:"Poppins";
  font-weight: 16px;
  margin-left: 2em;
  border-radius: 12px;
  background-color: #135846;
  color: #FFFFFF;
  border: none;
  padding: 1em 2em;
`
export const Tab = styled.button`
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
export const ButtonGroup = styled.div`
  display: flex;
  background-color: #FFFFFF;
`;
export const Optionsdiv = styled.div `
  display:flex;
  justify-content: flex-end;
  padding: 1em;
  background-color: #FFFFFF;
`