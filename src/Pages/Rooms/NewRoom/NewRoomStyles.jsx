import styled from "styled-components";

export const Form = styled.div `
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px #00000005;
  padding: 2em;
  font-family: "Poppins";
  color:#799283;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap:2em;
  width: 50%;
  height: 50%;
  margin: 0 auto;
`
export const Div = styled.div `
  width: 250px;
`

export const Title=styled.h1`
  font-weight: 600;
  text-align: center; 
  color:  #135846;
`
export const TitleInput = styled.h4`
  line-height: 0;
  color:  #135846;
`
export const Input = styled.input `
  border-radius: 12px;
  font-family: "Poppins";
  padding: 1em 2em;
  border: 1px solid #B2B2B2;
`
export const TextArea = styled.textarea`
  border-radius: 12px;
  font-family: "Poppins";
  padding: 1em 2em;
  border: 1px solid #B2B2B2;
`
export const Checkbox = styled.input `
  border-radius: 12px;
  font-family: "Poppins";
  padding: 1em 2em;
  border: none;
`
export const Button = styled.button `
  padding: 1em 2em;
  font-family: "Poppins";
  border-radius: 12px;
  background-color: #EBF1EF;
  color:  #135846;
  border: none;
`
export const Li = styled.li `
  list-style-type:none;
`