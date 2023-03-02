/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Div,ButtonGroup,Tab,Input,Optionsdiv,Select } from "./BookingsStyles";
import Layout from "../../components/Layout";
import { ProductTable} from "../../components/Table/Table1";
import { fetchBookings, selectAllBookings, deleteBooking } from "../../store/slice/BookingsSlice";

const types = ['All Guests', 'Check in', 'Check out', 'In Progress'];

function Bookings() {
  const dispatch = useDispatch();
  const bookings = useSelector(selectAllBookings)
  const bookingsStatus = useSelector(state => state.bookings.status)
  const [active, setActive] = useState(types[0]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState(null);

  //fetch data
  useEffect(() => {
    if (bookingsStatus === 'idle') {
      dispatch(fetchBookings())
    }
  }, [bookingsStatus, dispatch])

  //UPPDATE BOOKINGS
  useEffect(() => searchItems(null), [bookings])

  // DELETE BOOKING
  const onDeleteBooking = (e, id) => {
    e.preventDefault();
    dispatch(deleteBooking(id));
  };

  //SEARCH  
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== null) {
        const filteredData = bookings.filter((booking) =>  booking.full__name.toLowerCase().includes(searchInput.toLowerCase()))
        setFilteredResults(filteredData)
    } else {
        setFilteredResults(bookings)
    }
  }
  // DROPDOWN
  const sortBookings = (e) => {
    const sortDirection = e.target.value;
    const copyArray = [...bookings];
    copyArray.sort((a, b) => {
      return sortDirection === "0" ? a.full_name < b.full_name ? -1 : 1 : 0;
    });
    setFilteredResults(copyArray);
  }

  //THEAD
  const column = [
    { heading: 'Photo', value: 'image' },
    { heading: 'Name', value: 'full__name' },
    { heading: 'Booking ID', value: 'bookingId' },
    { heading: 'Check in', value: 'check_in' },
    { heading: 'Check out', value: 'check_out' },
    { heading: 'Special Request', value: 'special_request' },
    { heading: 'Room type', value: 'room_type' },
    { heading: 'Status', value: 'status' },
    { heading: 'Actions', value: '' },
  ]
  
   const handleData = (index) => {
    if (index === 0){
      setFilteredResults(bookings)
    } else if (index === 1) {
      const filteredBoookings = [...bookings]
      const filteredCheckIn  = filteredBoookings.filter((booking) =>  booking.status === "Available");
      setFilteredResults(filteredCheckIn)
    } else if(index === 2) {
      const filteredCheckOut = [...bookings]
      const filteredCheckOutBookings  = filteredCheckOut.filter((booking) =>  booking.status === "Occupied");
      setFilteredResults(filteredCheckOutBookings)
    } else if(index === 3) {
      const filteredProgress = [...bookings]
      const filteredInProgressBookings  = filteredProgress.filter((booking) =>  booking.status === "In Progress");
      setFilteredResults(filteredInProgressBookings)
    };
  }
  return (
    <Layout name="Bookings">
      <Div>
        <>
          <ButtonGroup>
            {types.map((type, index) => (
              <Tab
                key={type}
                active={active === type}
                value ={index}
                onClick={() =>{ setActive(type); handleData(index)}}>
                  {type}
                </Tab>
            ))}
          </ButtonGroup>
          <Optionsdiv>
            <Input icon='search'
              placeholder='Search...'
              onChange={(e) => searchItems(e.target.value)}
           />
            <Select defaultValue={1} onChange={sortBookings}>
              <option value={0}>Ascending</option>
              <option value={1}>Descending</option>
            </Select>
          </Optionsdiv>
          <ProductTable data={filteredResults} column={column} rowsPerPage={10} onDeleteBooking={onDeleteBooking}/>     
        </>
      </Div>
    </Layout>
    );
}
export default Bookings