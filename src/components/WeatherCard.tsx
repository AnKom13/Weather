import * as React from 'react';
import { Card } from 'react-bootstrap';
import classes from "../styles/WeatherCard.module.css";

const WeatherCard = ({ dt, temp_min, main, icon, desc }) => {
  const date = new Date(dt);
  return (
    <div className={classes.Card}>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        {/*  дата в милисекундах */}
        <p>
          <span style={{ fontSize: '1rem', fontWeight: '500' }}>
            {date.toLocaleTimeString()}
          </span>
          <br />
          {date.toLocaleDateString()}
        </p>
        <p>Температура: {temp_min}</p>
        <p>Описание: {desc}</p>
      </Card.Body>
    </div>
  );
};
export default WeatherCard;
