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
  currentUser: any;
  handleInput: any;
  handleSubmit: any;
  formTitle: string;
  handleCancel: any;
};

const UserForm= ({
  currentUser,
  handleInput,
  handleSubmit,
  formTitle,
  handleCancel,
}:Props) => {
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
              <RadioDescription>Photo</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo"
                value={currentUser.photo}
                placeholder="image"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Full Name</RadioDescription>
              <Input
                required
                type="text"
                className="input-user"
                name="full_name"
                value={currentUser.full_name}
                placeholder=""
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Email</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="email"
                value={currentUser.email}
                placeholder="...@gmail.com"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Start Date</RadioDescription>
              <Input
                required
                type="string"
                className="input-user"
                placeholder="--/--/----"
                name="start_date"
                value={currentUser.start_date}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Description</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="description"
                value={currentUser.description}
                placeholder=""
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Phone Number</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="phone_number"
                value={currentUser.phone_number}
                placeholder=""
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Room status</RadioDescription>
              <RadioInput
                required
                type="radio"
                id="active"
                value="ACTIVE"
                name="status"
                onClick={handleInput}
                defaultChecked={currentUser.status === "ACTIVE"}
              />
              <RadioLabel htmlFor="active">ACTIVE</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="inactive"
                value="INACTIVE"
                name="status"
                onClick={handleInput}
                defaultChecked={currentUser.status === "INACTIVE"}
              />
              <RadioLabel htmlFor="inactive">INACTIVE</RadioLabel>
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

export default UserForm;