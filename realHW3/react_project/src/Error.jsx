import { useRouteError } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './MyNav.jsx';

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <MyNav />
      <Container fluid>
        <Row>
          <Col>
            <h1> Oopsie </h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error.statusText || error.message}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error;
