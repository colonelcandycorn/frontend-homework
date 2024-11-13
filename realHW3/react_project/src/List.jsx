import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import MyNav from './MyNav.jsx';
import { CountryGrid } from './CountryGrid.jsx'

const List = ({
  isLoading,
  isError,
  countries
}) => {
  
  return (
    <>
      <MyNav />
      <Container fluid>
        <Row>
          <Col>
            <h1 className="fs-3 mt-3">South American Countries</h1>
          </Col>
        </Row>
        <hr />
        {isLoading && (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading Country Data...</span>
            </Spinner>
          </div>
        )}
        { !isLoading && isError && (
          <p>Failed to fetch country data </p>
        )
        }
        {!isLoading && !isError && (
          <CountryGrid countries={countries} />
        )}
      </Container>
    </>
  );
};

export default List;
