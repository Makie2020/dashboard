import React, { useState, useEffect } from 'react';
import styled, {css} from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { BookingData } from '../../DummyData/bookingData';
import { FilterMatchMode} from 'primereact/api';
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';              
import 'primeicons/primeicons.css';                          
import 'primeflex/primeflex.css';  
import 'primereact/resources/themes/lara-light-indigo/theme.css';

const Container = styled.div `
  display:flex;
`
const Header = styled.div `
  display:flex;
  align-items: center;
`
const Aside = styled.aside `
 transition: all 300ms ease-in-out;
 width: 100%;
`
const ContainerTab = styled.div `
  position: relative;
  display: flex;
`
const Guestdiv = styled.button `
  display: flex ;
  align-items: center;
  gap: 1em;
  border: none;
  text-align: left;
  background-color: transparent;
`
const GuestImg = styled.img`
  width: 45px;
  height: 45px;
`
const GuestName = styled.h1`
  font-size: 16px;
  font-family: "Poppins";
  line-height: 0;
  margin-bottom: 1em;
`
const GuestId = styled.p`
  font-size: 14px;
  font-family: "Poppins";
  color: #799283;
  line-height: 0;
`
const Button = styled.button `
  width: 109px;
  height: 48px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-family: "Poppins";
  font-weight: 500;
  &:hover{
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  };
  ${props => props.status ==="Available" && css`
    background-color: #E8FFEE;
    color: #5AD07A;
  `};
  ${props => (props.status ==="Occupied") && css`
    background-color: #FFEDEC;
    color: #E23428;
  `};
`
const ButtonNotes = styled.button `
  font-family: "Poppins";
  width: 160px;
  height: 48px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  color:#212121;
  background-color: #EEF9F2;
  &:hover{
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.04), 0 17px 50px 0 rgba(0,0,0,0.2);
  };
  ${props => (props.special_request === null) && css`
    border: 1px solid #799283;
    color: #799283;
    background-color: #FFFFFF;
  `};

`
const Input = styled.input `
  font-family: "Poppins";
  padding-left: 2.2em;
  border-radius: 12px;
  border: none;
  background-color: #135846;
  height: 49px;
  width: 170px;
  &::placeholder{
    color: #FFFFFF;
  }

`

function Bookings() {
  const [on, setOn] = React.useState(false);
  const handleOnClick = () => {
    setOn(!on);
  };

  const [bookings, setBookings] = useState([]);
  const [filters, setFilters] = useState({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
    'full__name': { value: null, matchMode: FilterMatchMode.CONTAINS },
    'check_out': { value: null, matchMode: FilterMatchMode.IN },
    'check_in': { value: null, matchMode: FilterMatchMode.IN },
    'status': { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const items = [
    {label: 'All Bookings'},
    {label: 'Availible'},
    {label: 'Occupied'},
  ];
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const onGlobalFilterChange = (e) => {
      const value = e.target.value;
      let _filters = { ...filters };
      _filters['global'].value = value;

      setFilters(_filters);
      setGlobalFilterValue(value);
  }

  const renderHeader = () => {
      return (
          <div className="flex justify-content-end">
              <span className="p-input-icon-left">
                  <i className="pi pi-search white" />
                  <Input value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
              </span>
          </div>
      )
  }

  useEffect(() => {
    BookingData.getBookings().then(data => setBookings(data));
  }, []); 

  // REDIRECT TO BOOKING PAGE

  const navigate = useNavigate();
  function handleClick(data) {
    navigate(`/bookings/${data.id}`);
  }

  const guestTemplate = (data) => {
    return (
      <Guestdiv  onClick={() => handleClick(data)}>
        <GuestImg src= {data.image} alt={data.full__name}/>
        <div>
          <GuestName sortable>{data.full__name}</GuestName>
          <GuestId>{data.id}</GuestId>
        </div>      
      </Guestdiv>
    )
  }
  const specialRequestBodyTemplate = (data) => {
    return <ButtonNotes status={data.special_request}>view Notes</ButtonNotes>;
  }

  const statusBodyTemplate = (data) => {
    return <Button status={data.status}>{data.status}</Button>;
  }

    return (
    <Container>
      <Aside className={on ? 'to-right' : ''}>
        <Header>
          <a href="#" onClick={handleOnClick}>
            <AiOutlineMenu style={{margin:" 0 2em"}}/>
          </a>
          <Navbar name="Bookings" style={{flex:"0 0 80%"}}/>
        </Header>
        <TabMenu model={items} />
        <ContainerTab >
          <DataTable value={bookings} paginator rows={10} responsiveLayout="scroll" autoLayout="true" filters={filters} filterDisplay="row" globalFilterFields={['full__name', 'check_in', 'check:out', 'status']} header={renderHeader} >
            <Column header="Guest" field ={bookings.full__name} body={guestTemplate} sortable ></Column>
            <Column field="order_date" header="Order date"></Column>
            <Column field="check_in" header="Check in" sortable></Column>
            <Column field="check_out" header="Check out" sortable></Column>
            <Column header="Special Request" body={specialRequestBodyTemplate}></Column>
            <Column field="room_type" header="Room Type" sortable></Column>
            <Column field="status" header="Status"  body={statusBodyTemplate} sortable></Column>
          </DataTable>
        </ContainerTab>
 
      </Aside>
  
      {on && <Sidebar openClass="open" />}
    </Container>  
    );
}

export default Bookings;