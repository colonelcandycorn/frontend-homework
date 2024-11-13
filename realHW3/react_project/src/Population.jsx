import React, { useState, useEffect } from 'react'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { Bar } from "react-chartjs-2"
import MyNav from "./MyNav.jsx"
import { Container, Row, Col, Spinner } from 'react-bootstrap'

export const Population = ({
  isLoading,
  isError,
  countries
}) => {
 

  const chartData = {
    labels: countries.map(country => country.name),
    datasets: [{
      label: "Population",
      data: countries.map(country => country.population),
      borderWidth: 1
    }]
  };
  
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
          <Bar
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Population of South American Countries"
                },
                legend: {
                  display: false
                }
              }
            }}
          />
        )}
      </Container>
    </>
    )
  
}