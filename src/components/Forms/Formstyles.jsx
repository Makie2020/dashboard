/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 12px;
  box-shadow: 0px 16px 30px #00000014;
  padding: 2em;
  width: 50rem;
  height: 40rem;
`;
export const InputContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Input = styled.input`
  transition: all 0.1s;
  width: 100%;
  margin-bottom: 1em;
  display: block;
  font-family: 'Poppins';
  border: none;
  border-bottom: 1px solid #c5c5c5;
  &:hover {
    border-bottom: 1px solid #135846;
  }
  &:hover ~ div .input-icon {
    color: #135846;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #135846;
  }
  &:focus ~ div .input-icon {
    color: #135846;
  }
`;

export const RadioInput = styled.input`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  color: #777777;
  margin-right: 1rem;
  margin-bottom: 2rem;
`;
export const FormTitle = styled.p`
  text-align: center;
  font-family: 'Poppins';
  font-size: 28px;
  font-weight: 600;
  color: #4E4E4E;
  margin-bottom: 2em;
`;

export const RadioLabel = styled.label`
  font-family: 'Poppins';
  color: #777777;
  margin-right: 1em;
`;
export const RadioDescription = styled.p`
  font-family: 'Poppins';
  color: #4E4E4E;
`;
export const InputSubmit = styled.input`
  display: inline-block;
  background-color: #ebf1ef;
  border: none;
  border-radius: 12px;
  width: 15em;
  transition: background-color 0.3s;
  text-align: center;
  font-family: 'Poppins';
  text-decoration: none;
  color: #135846;
  font-size: 18px;
  font-weight: 600;
  padding: 1em 2em;
  margin: auto;
  :hover {
    background-color: rgba(19, 87, 69, 0.2);
  }
`;
export const InputCancel = styled.button`
  display: inline-block;
  background-color: rgba(226, 52, 40, 0.1);
  border: none;
  border-radius: 12px;
  width: 15em;
  transition: background-color 0.3s;
  text-align: center;
  font-family: 'Poppins';
  text-decoration: none;
  color: rgba(226, 52, 40, 1);
  font-size: 18px;
  font-weight: 600;
  padding: 1em 2em;
  margin: auto;
  :hover {
    background-color: rgba(226, 52, 40, 0.2);
  }
`;