import Sidebar from '../Pages/Sidebar/Sidebar'
import Navbar from '../Pages/Navbar/Navbar'
import styled from 'styled-components'
import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Container = styled.div `
  width: 100%;
`
const Header = styled.div `
  display:flex;
  align-items: center;
`
const Aside = styled.aside `
 transition: all 300ms ease-in-out;
`
const Main = styled.div `
  background-color: #F8F8F8;
`

export const Layout = ({ children, name }) => {
  const [on, setOn] = useState(false);
  const handleOnClick = () => {
    setOn(!on);
  };
  return (
  <Container>
    <Aside className={on ? 'to-right' : ''}>
      <Header>
        <a onClick={handleOnClick}>
          <AiOutlineMenu style={{margin:" 0 2em"}}/>
        </a>
        <Navbar name={name} style={{flex:"0 0 80%"}}/>
      </Header>
      <Main>{children}</Main>
    </Aside>
    {on && <Sidebar openClass="open" />}
  </Container>  
  )
}

export default Layout