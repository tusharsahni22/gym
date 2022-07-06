import React from 'react'
import { jsx, css } from "@emotion/core";
import Link from "./Link";
// import Button from "../GlobalComponents/Button";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Button=styled.button`
background-color: Transparent;
background-repeat:no-repeat;
font-size: 13px;
font-weight: 400;
color: #fff;
border:none ;
text-decoration: none;

`;
const styles = css`
  width: 100%;
  max-width: 620px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 0 30px 20px 30px;
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;
    position: absolute;
    left: 0;
    top: 70px;
    background: rgba(35, 45, 57, 0.8);
    transition: top 1100ms ease-in-out, opacity 1100ms ease-in-out;
    &.hidden {
      left: 0;
      top: -500px;
      opacity: 0;
    }
    .btn {
      width: 100%;
      text-align: center;
      padding: 16px;
    }
  
}`;

const MainContainer=styled.div`
width: 70%;
    display: flex;
    justify-content: space-evenly;
`;

function LinksContainer() {
  const navigate = useNavigate();
  return (
    <MainContainer >
      <Link name="HOME" linkTo="#home" />
      <Link name="ABOUT" linkTo="#trainers" />
      <Link name="CLASSES" linkTo="#ourClasses" />
      <Link name="SCHEDULES" linkTo="#schedule" />
      <Link name="CONTACT" linkTo="#contact" />
      <Button name="Login" onClick={() => {navigate("/login")}}>Login</Button>
    </MainContainer>
  );

  }

export default LinksContainer