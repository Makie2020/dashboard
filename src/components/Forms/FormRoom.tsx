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

const RoomForm = ({
  currentRoom,
  handleInput,
  handleSubmit,
  formTitle,
  handleCancel,
}: Props) => {
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
              <RadioDescription>Photo 1</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo"
                value={currentRoom.image}
                placeholder="First photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Photo 2</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo2"
                value={currentRoom.imageTwo}
                placeholder="Second photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Photo 3</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo3"
                value={currentRoom.imageThree}
                placeholder="Third photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Photo 4</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo4"
                value={currentRoom.imageFour}
                placeholder="Fourth photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Photo 5</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo5"
                value={currentRoom.imageFive}
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
                name="room_type"
                onClick={handleInput}
                defaultChecked={currentRoom.room_type === "Single Bed"}
              />
              <RadioLabel htmlFor="singleBed">Single Bed</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="doubleBed"
                value="Double Bed"
                name="room_type"
                onClick={handleInput}
                defaultChecked={currentRoom.room_type === "Double Bed"}
              />
              <RadioLabel htmlFor="doubleBed">Double Bed</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="doubleSuperior"
                value="Double Superior"
                name="room_type"
                onClick={handleInput}
                defaultChecked={currentRoom.room_type === "Double Superior"}
              />
              <RadioLabel htmlFor="doubleSuperior">Double Superior</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="suite"
                value="Suite"
                name="room_type"
                onClick={handleInput}
                defaultChecked={currentRoom.room_type === "Suite"}
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
                value={currentRoom.name}
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
              <RadioDescription>
                Select the amenities included in the new room
              </RadioDescription>
              {listOfAmenities.map((amenity, index) => (
                <div key={index} style={{ display: "inline-block" }}>
                  {currentRoom.amenities?.includes(amenity) ? (
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
              <RadioLabel htmlFor="occupied">Booked</RadioLabel>
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