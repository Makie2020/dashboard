/* eslint-disable prettier/prettier */
import styled, {css} from 'styled-components';

export const StyledTable = styled.table `
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
export const Button = styled.button.attrs(props =>({className: props.className})) `
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
  ${props => (props.value ==="Check In") && css`
    background-color: #E8FFEE;
    color: #5AD07A;
  `};
  ${props => (props.value ==="Check Out") && css`
  background-color: #FFEDEC;
    color: #E23428;
  `};
  ${props => (props.value ==="Booked") && css`
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
  ${props => (props.value ==="Actions") && css`
    background-color: #FFFFFF !!important;
  `};
  ${props => (props.value ==="Special Request") && css`
    background-color: #EEF9F2;
  `};
  ${props => (props.value ==="Action") && css`
    color: #E23428;
  `};
`
export const DropDown = styled.div`
  background-color: #777777;
  color: #262626;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;
  width: 170px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #FFFFFF;
    li {
        display: flex;
        align-items: center;
        gap: 1em;
        padding: 0.5em ;
        border: 0.5px solid black;
        margin-bottom: 0.1em;
        border-radius: 12px;
        font-family: "Poppins";
        transition: all 0.3s;
        &:hover {
          background-color: #c5c5c5;
      }
    }
  }
`;
export const Img = styled.img `
  width: 125px;
  height: 77px;
  object-fit:cover ;
`
export const Th = styled.th `
  height: 65px;
`
export const Container = styled.div `
  position: relative;
  display: inline-block;
`
