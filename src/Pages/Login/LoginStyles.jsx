import styled from "styled-components";

export const Container = styled.div `
  background-color: #F8F8F8;
  font-family: "Poppins";
  text-align: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Form = styled.form `
  width: 40%;
  border: 1px solid #135846;
  margin:0 auto;
  border:none;
  background-color: #FFFFFF ;
  box-shadow: 0px 16px 30px #00000014;
  border-radius: 12px;
  padding: 2em;
`
export const Img = styled.img `
`
export const Title = styled.h1`
  font-weight: 600;
  color: #262626;
`
export const Label = styled.label`
  font-weight: 400;
  color: #262626;
  font-size: 12px;
`
export const Input = styled.input `
  font-family: "Poppins";
  border-radius: 12px;
  border: none;
  width: 220px;
  height: 50px;
  margin: 1em;
  background-color: #F8F8F8;
  color: #262626;
  box-shadow: 0px 16px 30px #00000014;
  ::placeholder{
    padding-left: 2em;
    font-family: "Poppins";
  }
`
export const Button = styled.button `
  border-radius: 12px;
  border: none;
  width: 215px;
  height: 50px;
  background-color: #135846;
  font-family: "Poppins";
  color: #FFFFFF;
  margin-top: 2em;
`