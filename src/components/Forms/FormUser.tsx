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
  currentRoom: any;
  handleInput: any;
  handleSubmit: any;
  formTitle: string;
  handleCancel: any;
};

const RoomForm= ({
  currentRoom,
  handleInput,
  handleSubmit,
  formTitle,
  handleCancel,
}:Props) => {
  const listOfAmenities = [
    "Air Conditioner",
    "Kitchen",
    "Swimming pool",
    "Recreational activities",
    "Parking",
    "High speed WiFi",
    "Towels",
    "Single Bed",
    "Electronic Safe / Locker",
    "Mini Bar / Mini Fridge",
    "Breakfast",
    "Tea / Coffee Maker",
    "Bath Rob",
    "Beach Towels",
  ];

  return (
    <>
      <Container style={{ minHeight: "80%" }}>
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
              <RadioDescription>Photo one</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo"
                value={currentRoom.photo}
                placeholder="First photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Photo one</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo2"
                value={currentRoom.photo2}
                placeholder="Second photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Photo one</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo3"
                value={currentRoom.photo3}
                placeholder="Third photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Photo one</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo4"
                value={currentRoom.photo4}
                placeholder="Fourth photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Photo Fiv</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo5"
                value={currentRoom.photo5}
                placeholder="Fifth photo URL"
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
                name="bed_type"
                onClick={handleInput}
                defaultChecked={currentRoom.bed_type === "Single Bed"}
              />
              <RadioLabel htmlFor="singleBed">Single Bed</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="doubleBed"
                value="Double Bed"
                name="bed_type"
                onClick={handleInput}
                defaultChecked={currentRoom.bed_type === "Double Bed"}
              />
              <RadioLabel htmlFor="doubleBed">Double Bed</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="doubleSuperior"
                value="Double Superior"
                name="bed_type"
                onClick={handleInput}
                defaultChecked={currentRoom.bed_type === "Double Superior"}
              />
              <RadioLabel htmlFor="doubleSuperior">Double Superior</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="suite"
                value="Suite"
                name="bed_type"
                onClick={handleInput}
                defaultChecked={currentRoom.bed_type === "Suite"}
              />
              <RadioLabel htmlFor="suite">Suite</RadioLabel>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Room number</RadioDescription>
              <Input
                required
                type="text"
                className="input-user"
                name="room_number"
                value={currentRoom.room_number}
                placeholder="Room Number"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Room description</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="description"
                value={currentRoom.description}
                placeholder="Room description"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Offer</RadioDescription>
              <RadioInput
                required
                type="radio"
                id="yes"
                value="Yes"
                name="discount"
                onClick={handleInput}
                defaultChecked={currentRoom.discount === "Yes"}
              />
              <RadioLabel htmlFor="yes">Yes</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="no"
                value="No"
                name="discount"
                onClick={handleInput}
                defaultChecked={currentRoom.discount === "No"}
              />
              <RadioLabel htmlFor="no">No</RadioLabel>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Room rate</RadioDescription>
              <Input
                required
                type="number"
                className="input-user"
                placeholder="Price per night"
                name="price"
                value={currentRoom.price}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            {currentRoom.discount === "Yes" ? (
              <InputContainer>
                <RadioDescription>Discount %</RadioDescription>
                <Input
                  required
                  type="number"
                  className="input-user"
                  name="discountPercent"
                  value={currentRoom.discountPercent}
                  placeholder="Discount %"
                  onChange={handleInput}
                ></Input>
              </InputContainer>
            ) : null}

            <InputContainer>
              <RadioDescription>Cancellation Policy</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="cancellationPolicy"
                value={currentRoom.cancellationPolicy}
                placeholder="Cancellation Policy"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>
                Select the amenities included in the new room
              </RadioDescription>
              {listOfAmenities.map((amenity, index) => (
                <div key={index} style={{ display: "inline-block" }}>
                  {currentRoom.amenities.includes(amenity) ? (
                    <RadioInput
                      type="checkbox"
                      name="amenities"
                      id={amenity}
                      value={amenity}
                      onClick={handleInput}
                      defaultChecked
                    />
                  ) : (
                    <RadioInput
                      type="checkbox"
                      name="amenities"
                      id={amenity}
                      value={amenity}
                      onClick={handleInput}
                    />
                  )}

                  <RadioLabel htmlFor={amenity}>{amenity}</RadioLabel>
                </div>
              ))}
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
                defaultChecked={currentRoom.status === "Available"}
              />
              <RadioLabel htmlFor="available">Available</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="booked"
                value="Booked"
                name="status"
                onClick={handleInput}
                defaultChecked={currentRoom.status === "Booked"}
              />
              <RadioLabel htmlFor="booked">Booked</RadioLabel>
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

export default RoomForm;