import React from 'react'
import { CountryCard } from './CountryCard.jsx'
import { Col, Row } from 'react-bootstrap'

export const CountryGrid = ({countries}) => {
  const countryChunks = []

  // we want our country objects split into groups of three
  for (let i = 0; i < countries.length; i += 3) {
    countryChunks.push(countries.slice(i, i + 3))
  }

  return (
    <div className="container">
      {
        countryChunks.map((countryRow, rowIndex) => (
          <Row key={rowIndex}>
            {
              countryRow.map((country, colIndex) => (
                <Col md="6" lg='4' className='p-0 mb-5'>
                  <CountryCard country={country} key={colIndex}/>
                </Col>
              ))
            }
          </Row>
        ))
      }
    </div>
  )
}