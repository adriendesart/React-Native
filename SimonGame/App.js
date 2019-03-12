import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import Welcome from '../SimonGame/homepage/welcome'
import Game from '../SimonGame/game/game'
import Game2 from '../SimonGame/game/game2'

export default class App extends React.Component {
  render(){
    return(
      <Router>
        <Scene key = "root">
           <Scene key = "welcome" component = {Welcome} title = "Welcome" initial = {true} />
           <Scene key = "gameOriginal" component = {Game} title = "Original Game" />
           <Scene key = "gameHardcore" component = {Game2} title = "Hardcore Game" />
        </Scene>
      </Router>
    )
  }
}
