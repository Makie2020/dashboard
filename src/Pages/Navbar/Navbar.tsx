/* eslint-disable prettier/prettier */
import React from 'react'
import { HiOutlineHeart, HiOutlineEnvelope, HiArrowRightOnRectangle } from "react-icons/hi2"
import { useNavigate } from "react-router"
import { useAuth } from '../../App';
import { Menubar, LogoBox, Title, IconBox } from './NavbarStyles';
import { nameProp } from '../../Interfaces/interfaces';

function Navbar({name}:nameProp) {
  const navigate = useNavigate();
  const {dispatch} = useAuth();
  
  const handleLogout = () => {
    if(dispatch) {
      dispatch({type:"LOGOUT", payload:false})
    }
    localStorage.removeItem('login')
    navigate('/login')
    }  
 
  return (
    <Menubar >
      <LogoBox>
        <Title>{name}</Title>
      </LogoBox>
      <IconBox>
        <HiOutlineHeart style={{width:"27px", height:"27px", color:"#135846"}}/>
        <HiOutlineEnvelope style={{width:"27px", height:"27px", color:"#135846"}}/>
        <HiArrowRightOnRectangle style={{width:"27px", height:"27px", color:"#135846"}} onClick={handleLogout}/>
      </IconBox>
    </Menubar>
  );
}

export default Navbar;
