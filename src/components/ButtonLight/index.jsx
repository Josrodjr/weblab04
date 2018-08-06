import React, { Fragment } from 'react';

import './style.css';


const ButtonLight = ({
  lightStatus = false,
  color = 'red',
}) => (
  <button
  className={
    `
      light
      ${ lightStatus ? 'on' : ''}
    `
  }
  style={{
    background: color,
  }}
  />
);

export default ButtonLight;