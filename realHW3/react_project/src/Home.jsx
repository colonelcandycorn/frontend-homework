import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MyNav from './MyNav.jsx';

const Home = () => {
  return (
    <>
      <MyNav />
      <Container fluid>
        <Row>
          <Col>
            <h1 className="fs-3 mt-3">
              Welcome to the home page of Homework 3
            </h1>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
