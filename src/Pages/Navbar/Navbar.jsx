import styled from "styled-components"
import { HiOutlineHeart, HiOutlineEnvelope, HiArrowRightOnRectangle } from "react-icons/hi2"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"


const Menubar = styled.nav`
  background-color: #FFFFFF;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.02);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100% ;
`
const LogoBox = styled.div `
  display: flex ;
  align-items:center ;
  gap: 35px;
`
 const Title = styled.h1 `
  font-size: 28px;
  font-weight: 600;
  color: #262626;
`
const IconBox = styled.div `
  display: flex;
  gap: 4em;
  margin-right: 4em;
`

function Navbar({name}) {
  const {dispatch} = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch({type:"LOGOUT", value:{username:"", token:""}})
    navigate('/')
    }  
 
  return (
    <Menubar >
      <LogoBox>
        <Title>{name}</Title>
      </LogoBox>
      <IconBox>
        <HiOutlineHeart style={{width:"27px", height:"27px", color:"#135846"}}/>
        <HiOutlineEnvelope style={{width:"27px", height:"27px", color:"#135846"}}/>
        <HiArrowRightOnRectangle style={{width:"27px", height:"27px", color:"#135846"}} key={"logout"} onClick={handleLogout}/>
      </IconBox>
    </Menubar>
  );
}

export default Navbar;
