/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../hooks/hook';
import { getBooking, editBooking } from '../../../store/features/BookingsSlice';
import BookingForm from '../../../components/Forms/FormBooking';

const EditBooking = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const {id}:any = params;
  const singleBooking = useAppSelector((state:any) => state.bookings.booking);
  const [currentBooking, setCurrentBooking] = useState<any>();
  const formTitle ="Edit and update the booking";

  useEffect(() => {
    dispatch(getBooking(id));
    console.log(singleBooking)
    setCurrentBooking(singleBooking);
  }, [singleBooking, dispatch, id]);


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void  => {
    let name: string = e.target.name;
    let checked: boolean = e.target.checked;
    let type: string = e.target.type;
    let value: string = e.target.value;
    let valToUpdate: string | string[];
    if (type === "checkbox") {
      const newVal = [...currentBooking[name]];
      if (checked) {
        newVal.push(checked);
      } else {
        const index = newVal.indexOf(checked);
        newVal.splice(index, 1);
      }
      valToUpdate = newVal;
    } else {
      valToUpdate = value;
    }
    setCurrentBooking((prevState:string[]) => ({ ...prevState, [name]: valToUpdate }));
  };

  const handleCancel = (e: Event) => {
    e.preventDefault();
    setCurrentBooking({undefined});
    navigate("/bookings");
  };

  const handleSubmit = () => {
    dispatch(editBooking(currentBooking));
    setCurrentBooking({});
    navigate("/bookings");
  };

  return !currentBooking ? (
    <div>Loading Page</div> 
    ) : (
    <BookingForm
      formTitle={formTitle}
      currentBooking={currentBooking}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};

export default EditBooking;