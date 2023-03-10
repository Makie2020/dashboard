/* eslint-disable prettier/prettier */
import Sidebar from '../Pages/Sidebar/Sidebar'
import Navbar from '../Pages/Navbar/Navbar'
import styled from 'styled-components'
import { AiOutlineMenu } from "react-icons/ai";
import React, {ReactNode } from 'react';

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
interface Props {
  children?: ReactNode,
  name: string
}

export const Layout = ({ children, name } : Props) => {
  const [on, setOn] = React.useState<boolean>(false);
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
        <Navbar name={name}/>
      </Header>
      <Main>{children}</Main>
    </Aside>
    {on && <Sidebar/>}
  </Container>  
  )
}

export default Layout