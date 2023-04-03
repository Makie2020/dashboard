/* eslint-disable prettier/prettier */

import React from "react";
import {
  Container,
  Form,
  InputContainer,
  Input,
  FormTitle,
  RadioInput,
  RadioLabel,
  RadioDescription,
  InputSubmit,
  InputCancel,
} from "./Formstyles";

type Props = {
  currentBooking: any;
  handleInput: any;
  handleSubmit: any;
  formTitle: string;
  handleCancel: any;
};

const BookingForm = ({
  currentBooking,
  handleInput,
  handleSubmit,
  formTitle,
  handleCancel,
}: Props) => {

  return (
    <>
      <Container style={{minHeight: "80%"}}>
        <Form
          style={{ height: "fit-content", margin: "2rem 0", width: "90%" }}
        >
          <FormTitle>{formTitle}</FormTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <InputContainer>
              <RadioDescription>Photo 1</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo"
                value={currentBooking.image}
                placeholder="First photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Full Name</RadioDescription>
              <Input
                required
                type="text"
                className="input-user"
                name="full__name:"
                value={currentBooking.full__name}
                placeholder="Full Name"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Booking ID</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="description"
                value={currentBooking.id}
                placeholder="Booking ID"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription> Order Date</RadioDescription>
              <Input
                required
                type="string"
                className="input-user"
                placeholder="--/--/----"
                name="order_date"
                value={currentBooking.order_date}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Check In</RadioDescription>
              <Input
                required
                type="string"
                className="input-user"
                placeholder="--/--/----"
                name="check_in"
                value={currentBooking.check_in}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Check Out</RadioDescription>
              <Input
                required
                type="string"
                className="input-user"
                placeholder="--/--/----"
                name="check_out"
                value={currentBooking.check_out}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Special Request</RadioDescription>
              <Input
                required
                type="string"
                className="input-user"
                placeholder="Special Requests"
                name="special_request"
                value={currentBooking.special_request}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Select the Room Type</RadioDescription>
              <RadioInput
                required
                type="radio"
                id="singleBed"
                value="Single Bed"
                name="room_type"
                onClick={handleInput}
                defaultChecked={currentBooking.room_type === "Single Bed"}
              />
              <RadioLabel htmlFor="singleBed">Single Bed</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="doubleBed"
                value="Double Bed"
                name="room_type"
                onClick={handleInput}
                defaultChecked={currentBooking.room_type === "Double Bed"}
              />
              <RadioLabel htmlFor="doubleBed">Double Bed</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="doubleSuperior"
                value="Double Superior"
                name="room_type"
                onClick={handleInput}
                defaultChecked={currentBooking.room_type === "Double Superior"}
              />
              <RadioLabel htmlFor="doubleSuperior">Double Superior</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="suite"
                value="Suite"
                name="room_type"
                onClick={handleInput}
                defaultChecked={currentBooking.room_type === "Suite"}
              />
              <RadioLabel htmlFor="suite">Suite</RadioLabel>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Room Number </RadioDescription>
              <Input
                required
                type="string"
                className="input-user"
                placeholder="Room Number"
                name="room_number"
                value={currentBooking.room_number}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Room status</RadioDescription>
              <RadioInput
                required
                type="radio"
                id="available"
                value="Available"
                name="status"
                onClick={handleInput}
                defaultChecked={currentBooking.status === "Available"}
              />
              <RadioLabel htmlFor="available">Available</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="occupied"
                value="Occupied"
                name="status"
                onClick={handleInput}
                defaultChecked={currentBooking.status === "Occupied"}
              />
              <RadioLabel htmlFor="occupied">Occupied</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="progress"
                value="In Progress"
                name="status"
                onClick={handleInput}
                defaultChecked={currentBooking.status === "In Progress"}
              />
              <RadioLabel htmlFor="available">In Progress</RadioLabel>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Price</RadioDescription>
              <Input
                required
                type="number"
                className="input-user"
                placeholder="Price"
                name="price"
                value={currentBooking.price}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "30%",
                margin: "auto",
                gap: "2rem",
              }}
            >
              <InputSubmit type="submit" value={"Save"} />
              <InputCancel
                onClick={(e) => {
                  handleCancel(e);
                }}
              >
                Cancel
              </InputCancel>
            </div>
          </form>
        </Form>
      </Container>
    </>
  );
};

export default BookingForm;