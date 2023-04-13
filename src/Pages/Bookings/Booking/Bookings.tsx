/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { Div,ButtonGroup,Tab,Input,Optionsdiv,Select } from "../BookingsStyles";
import Layout from "../../../components/Layout";
import { ProductTable} from "../../../components/Table/Table1";
import { fetchBookings, selectAllBookings, deleteBooking } from "../../../store/features/BookingsSlice";

const types = ['All Guests', 'Check in', 'Check out', 'In Progress'];

function Bookings() {
  const dispatch = useAppDispatch();
  const bookings = useAppSelector(selectAllBookings);
  const bookingStatus = useAppSelector(state => state.bookings.status);
  const [active, setActive] = useState(types[0]);
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [ order, setOrder ] = useState('order_date');

  //fetch data
  useEffect(() => {
    if (bookingStatus === "idle") {
      dispatch(fetchBookings())
    }
  }, [dispatch, bookings])

  //UPPDATE BOOKINGS
  useEffect(() => searchItems(""), [bookings])

  // DELETE BOOKING
  const onDeleteBooking = (e: Event, id: number) => {
    e.preventDefault();
    dispatch(deleteBooking(id));
  };

  //SEARCH  
  const searchItems = (searchValue:string) => {
    setSearchInput(searchValue)
    if (searchInput !== null) {
        const filteredData= bookings.filter((booking: any) =>  booking.full__name.toLowerCase().includes(searchInput.toLowerCase()))
        setFilteredResults(filteredData)
    } else {
        setFilteredResults(bookings)
    }
  }
  useEffect(() => {
    const bookingsOrderBy = [...bookings];
    bookingsOrderBy.sort((a, b) => {
        if(a[order] > b[order]) {
            return 1
        } else if (a[order] < b[order]) {
            return -1
        }
        return 0
    });
    setFilteredResults(bookingsOrderBy)
  }, [order, bookings])

  //THEAD
  const column = [
    { heading: 'Photo', value: 'image' },
    { heading: 'Name', value: 'full__name' },
    { heading: 'Booking ID', value: '_id' },
    { heading: 'Check in', value: 'check_in' },
    { heading: 'Check out', value: 'check_out' },
    { heading: 'Special Request', value: 'special_request' },
    { heading: 'Room type', value: 'room_type' },
    { heading: 'Status', value: 'status' },
    { heading: 'Actions Booking', value: '' },
  ]
  
   const handleData = (index: number) => {
    if (index === 0){
      setFilteredResults(bookings)
    } else if (index === 1) {
      const filteredBoookings = [...bookings]
      const filteredCheckIn: string [] = filteredBoookings.filter((booking) => booking.status === "Check In");
      setFilteredResults(filteredCheckIn)
    } else if(index === 2) {
      const filteredCheckOut = [...bookings]
      const filteredCheckOutBookings: string [] = filteredCheckOut.filter((booking) => booking.status === "Check Out");
      setFilteredResults(filteredCheckOutBookings)
    } else if(index === 3) {
      const filteredProgress = [...bookings]
      const filteredInProgressBookings = filteredProgress.filter((booking) => booking.status === "In Progress");
      setFilteredResults(filteredInProgressBookings)
    };
  }
  return (
    <Layout name ="Bookings">
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
            <Input
              placeholder='Search...'
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => searchItems(e.target.value)}
            />
            <Select value={order} onChange={({ target }) => setOrder(target.value)}>
              <option value="order_date">Order Date</option>
              <option value="full__name">Guest</option>
              <option value="check_in">Check in</option>
              <option value="check_out">Check out</option>
            </Select>
          </Optionsdiv>
          <ProductTable data={filteredResults} column={column} rowsPerPage={10} onDeleteBooking={onDeleteBooking}/>     
        </>
      </Div>
    </Layout>
    );
}
export default Bookings