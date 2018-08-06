import React, { Fragment } from 'react';

import { getRndInteger } from '../../utils/random';

import SimonLights from '../SimonLights';

import './style.css';

const POSSIBLE_COLORS = [
  'red',
  'yellow',
  'green',
  'blue',
];

class SimonApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
      currentOn: POSSIBLE_COLORS[0],
      playerguess: 0,
    };
  }

  startAdding () {
    const { colors } = this.state;
    const newcolornmb = getRndInteger(0, 4);
    const newcolor = POSSIBLE_COLORS[newcolornmb];

    this.setState({
      colors: [
        ...colors,
        newcolor,
      ],
      currentOn: newcolor,
    });

    

  }

  GameTime () {
    this.setState({
      colors: [],
      currentOn: 'red',
      playerguess: 0,
    });
    const timer = setInterval(this.startAdding.bind(this), 750);
    this.setState({
      timer,
    });
  }

  noGameTime () {

    const { timer } = this.state;
    clearInterval(timer);
  }

  playercolorselect (color) {

    const { colors } = this.state;
    const { playerguess } = this.state;


    if (colors.length == playerguess) {
      alert('WINNER WINNER CHICKEN DINNER');
    }
    if (colors[playerguess] == color){
      this.setState({
        playerguess: playerguess+1,
      });
    } else {
      alert('SELECCION INCORRECTA');
    }


  }

  render() {
    const { currentOn } = this.state;
    return (
      <Fragment>
        <SimonLights 
          lightStatus={currentOn}
        />
        <button onClick= {this.GameTime.bind(this)}>Start Game (resets game)</button>
        <button onClick={this.noGameTime.bind(this)}>Stop Game</button>

        <div className='opciones'>
          <button  onClick={() => this.playercolorselect(POSSIBLE_COLORS[0])}>ROJO</button>
          <button  onClick={() => this.playercolorselect(POSSIBLE_COLORS[1])}>AMARILLO</button>
          <button  onClick={() => this.playercolorselect(POSSIBLE_COLORS[2])}>VERDE</button>
          <button  onClick={() => this.playercolorselect(POSSIBLE_COLORS[3])}>AZUL</button>
        </div>
      </Fragment>
    );
  }

}

export default SimonApp;
