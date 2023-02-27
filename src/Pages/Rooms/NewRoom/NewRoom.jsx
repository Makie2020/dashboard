import React, { useState} from 'react'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { addRoom } from '../../../store/slice/RoomsSlice';
import Layout from '../../../components/Layout';
import { Checkbox,Div,TitleInput,Title,Form,Input,TextArea, Button, Li } from './NewRoomStyles';
import { MyCheckBoxList } from './Checkbox';

function NewRoom() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
      name: '',
      room_type: '',
      description: '',
      offer: '',
      discount: '',
      cancellation: '',
      room_number: '',

  });

  const onChangeValue = (e) => {
  let field_name = e.target.name;
  let field_value = e.target.value;
  setState(prev => ({...prev, [field_name]: field_value}))
  }

  const onSubmit = (e) => {
  e.preventDefault()
  dispatch(register(state))
  }

  const [checkedBox, setCheckedBox] = useState([]);

  const onChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCheckedBox(checkedBox=> [...checkedBox, value ]);
    } else {
      setCheckedBox(checkedBox.filter(checked => checked !== e.target.value))
    }
  }
/*
  function onCreateRoom(e){
    e.preventDefault()
    const newRRoomData = {name, room_type,room_number,description,offer,price,discount,cancellation,checkedBox}
    dispatch(addRoom(newRRoomData))
  }
*/
  return (
    <Layout name={"Room/new-room"}>
      <Form onSubmit={onCreateRoom}>
        <Title>New Room Form</Title>
        <Div style={{width: "250px" }}>
          <TitleInput> Room Name </TitleInput>
          <Input 
                placeholder="Name" 
                type="text"
                name= "name"
                value ={state.name}
                onChange={onChangeValue}
              /> 
        </Div>
        <Div>
          <TitleInput> Room Type </TitleInput>
          <Input 
                placeholder="Room Type" 
                type="text"
                name= "room_type"
                value ={state.room_type}
                onChange={onChangeValue} 
              /> 
        </Div>
        <Div>
           <TitleInput> Room Number </TitleInput>
          <Input 
                placeholder="Room Number" 
                type="number"
                value ={state.room_number}
                onChange={onChangeValue}
              /> 
        </Div>
        <Div>
          <TitleInput> Description </TitleInput>
          <TextArea 
                placeholder="Description" 
                type="text"
                value ={description}
                onChange={onChangeValue}
              /> 
        </Div>
        <Div>
          <TitleInput> Offer </TitleInput>
            <Checkbox
              type="checkbox"
              value={offer}
              name ={offer}
              onChange={onChangeValue}
            />
            <label>Yes</label>
            <Checkbox
              type="checkbox"
              value={offer}
              onChange={onChangeValue}
            />
            <label>No</label> 
        </Div>
        <Div>
          <TitleInput> Price</TitleInput>
            <Input 
              placeholder="Price" 
              type="number"
              value ={price}
              onChange={onChangeValue} 
            /> 
        </Div>
        <Div>
          <TitleInput> Discount </TitleInput>
          <Input 
            placeholder="Discount" 
            type="number"
            value ={discount}
            onChange={onChangeValue}
          /> 
        </Div>
        <Div> 
          <TitleInput> Cancellation</TitleInput>
          <TextArea 
            placeholder="Cancellation" 
            type="text"
            value ={cancellation}
            onChange={onChangeValue}  
          /> 
        </Div>
        <Div> 
          <TitleInput>Facilities</TitleInput>
            {MyCheckBoxList.map((obj, index) => (
              <Li key={index}>
                <input
                  type="checkbox"
                  id={obj.name}
                  name={obj.name}
                  value={obj.name}
                  onChange={onChange}
                />
                <label htmlFor={obj.name}>{obj.name}</label>
              </Li>
            ))} 
        </Div>
        <div>
          <Link to="/rooms"><Button type='submit'>Add Room</Button></Link>
        </div>              
      </Form>
    </Layout>
  );
}

export default NewRoom;