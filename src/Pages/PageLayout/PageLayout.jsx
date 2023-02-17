import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const Container = styled.div `
  width: 100%;`

const Header = styled.div `
  display:flex;
  align-items: center;
`
const Aside = styled.aside `
  transition: all 300ms ease-in-out;
 `

function PageLayout({name}) {
  const [on, setOn] = useState(false);

  const handleOnClick = () => {
    setOn(!on);
  };

  return (
    <Container>
       <Aside className={on ? 'to-right' : ''}>
        <Header name = {name}>
          <a onClick={handleOnClick}>
            <AiOutlineMenu style={{margin:" 0 2em"}}/>
          </a>
          <Navbar name={name} style={{flex:"0 0 80%"}}/>
        </Header>  
      </Aside>
      {on && <Sidebar openClass="open" />}
    </Container>
  );
}

export default PageLayout;