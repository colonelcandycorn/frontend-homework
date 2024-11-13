import React, { useState, useEffect } from 'react'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { Bar, Scatter } from "react-chartjs-2"
import MyNav from "./MyNav.jsx"
import { Container, Row, Col, Spinner } from 'react-bootstrap'

export const GDP = ({
  isLoading,
  isError,
  countries = []
}) => {
 

  const chartData = {
    datasets: [{
      label: "Population vs GDP",
      data: countries.map(({ population, gdp_billions: gdp }) => ({
        x: population,
        y: gdp
      })),
      borderWidth: 1,
      backgroundColor: 'rgba(75, 192, 192, 0.6)', // Example color
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
           <Scatter
           data={chartData}
           options={{
             plugins: {
               title: {
                 display: true,
                 text: "GDP vs Population"
               },
               legend: {
                 display: false
               }
             },
             scales: {
               x: {
                 title: {
                   display: true,
                   text: "Population"
                 }
               },
               y: {
                 title: {
                   display: true,
                   text: "GDP (in billions)"
                 }
               }
             }
           }}
         />
        )}
      </Container>
    </>
    )
  
}