import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

export const CountryCard = ({
  country: {
    name: countryName,
    official_languages: officialLanguages,
    population,
    gdp_billions: gdp,
    flag_png,
    flag_alt,
  },
}) => {
  return (
    <Card style={{ width: '18rem', height: '420px' }}>
      <Card.Img variant="top" src={flag_png} alt={flag_alt} style={{minHeight: '200px', maxHeight: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{countryName}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Population: {population}</ListGroup.Item>
          <ListGroup.Item>GDP: {gdp}</ListGroup.Item>
          <ListGroup.Item>
            Languages: {officialLanguages.join(', ')}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
