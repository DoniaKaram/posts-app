import React from "react";

import { useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import Header from "../components/Header";
import { Outlet } from "react-router-dom";


const  RootLayout = () => {
  const {isLoggedIn}=useSelector(state=>state.auth);
  return (
    <Container>
    <Header />

    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
         <Outlet/>
      </Col>
    </Row>
  </Container>
  );
};

export default RootLayout;