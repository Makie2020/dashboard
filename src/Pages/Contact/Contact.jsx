import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Tabs from "../../components/Tab/Tabs";

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
function Contact() {
  const [on, setOn] = React.useState(false);

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
          <Navbar name="Contact" style={{flex:"0 0 80%"}}/>
        </Header>
        <div>
          <Tabs style={{display:"flex"}}>
            <div label="All Customer Reviews">All Customer Reviews</div>
            <div label="Published">Published</div>
            <div label="Archived">Archived</div>
          </Tabs>
        </div>
   
      </Aside>
      {on && <Sidebar openClass="open" />}
    </Container>  
    );
}

export default Contact;