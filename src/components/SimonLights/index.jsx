import React, {Fragment} from 'react';

import ButtonLight from '../ButtonLight';

import './style.css';

const SimonLights = ({
  colors = [['red', 'FIRST'], ['yellow', 'SECOND'], ['green', 'THIRD'], ['blue', 'FOURTH']],
  lightStatus = 'red',
}) => (
  <Fragment>
  <div className="simonLayout">
    {
      colors.map(
        color => (
          <ButtonLight
            key={color[0]}
            color={color[0]}
            number={color[1]}
            lightStatus={color[0] === lightStatus}
          />
        )
      )
    }
  </div>
  </Fragment>
);


export default SimonLights;