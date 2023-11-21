import * as React from 'react';
import { Row, FormControl, Button } from 'react-bootstrap';

const CitySelector = ({ onClick }) => {
  const [city, setCity] = React.useState('Сочи');
  const [flag, setFlag] = React.useState(false);

  return (
    <>
      <h1>Введите название города:</h1>
      <FormControl
        onChange={(event) => { setCity(event.target.value) }}
        value={city}
      />
      <input type="checkbox" id="ch1" name="5" onChange={(event) => { setFlag(!flag) }} />
      <label htmlFor="ch1">5 дней</label>
      <Row>
        <Button onClick={() => onClick(city, flag)}>Прогноз погоды</Button>
      </Row>
    </>
  );
  
};

export default CitySelector;