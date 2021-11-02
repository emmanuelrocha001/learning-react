import React from "react";
import styled from "styled-components";
import Button from "./UI/Button";
const PopUpContainer = styled.div`
  background-color: white;
  width: 600px;
  height: 175px;
  position: absolute;
  border-radius: 12px;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Banner = styled.div`
  opacity: 100%;
  width: auto;
  height: 50px;
  background-color: purple;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  text-align: left;
  padding: 6px;
  margin: none;
  color: white;
`;

const Message = styled.div`
  text-align: left;
  padding: 12px;
`;

const RightAlignedContainer = styled.div`
  width: auto;
  float: right;
`;
const PopUp = (props) => {
  return (
    <PopUpContainer>
      <Banner>
        <h2>Invalid Input</h2>
      </Banner>
      <Message>{props.message}</Message>
      <RightAlignedContainer>
        <Button onClick={props.clearInvalidInputMessage}>Okay</Button>
      </RightAlignedContainer>
    </PopUpContainer>
  );
};

export default PopUp;
