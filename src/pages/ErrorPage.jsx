import React from "react";

import {
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useRouteError,useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
    const navigate=useNavigate();
    console.log(error)
  return (
    <Container>
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
         <div className="mt-5 text-center">
             <h1>Opps!</h1>
             <p>Sorry Unexpected error has occured</p>
             <p>
                <li>{error.statusText||error.message}</li>
             </p>
             <Button variant="Link" onClick={()=>navigate('/',{replace:true})}>Link</Button>
         </div>
      </Col>
    </Row>
  </Container>
  );
};

export default ErrorPage;