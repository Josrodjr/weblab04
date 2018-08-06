import React from 'react';

import './style.css';


const ButtonLight = ({
  lightStatus = false,
  color = 'red',
  number = '',
}) => (
  <button
  className={
    `light ${ lightStatus ? 'on' : ''}`
  }
  id={
    `${number}`
  }
  style={{
    background: color,
  }}
  />
);

export default ButtonLight;