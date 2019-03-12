import React from 'react';
import Welcome from '../AwesomeProject/homepage/welcome';
import Game from '../AwesomeProject/game/game'
// import Game2 from '../AwesomeProject/game/game2'
import {Alert} from 'react-native'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        onHomePage : 0
    };
  }
  onPressButton=(i)=>{
    Alert.alert("Let's do it!");
    this.setState({
        onHomePage : 1
    });
  }

  render() {
    if(this.state.onHomePage == 0){
      return (
        <Welcome test={this.onPressButton}/>
      );
    } else if(this.state.onHomePage == 1){
      return (
        <Game/>
      );
    }
    // } else if(this.state.onHomePage == 2){
    //   return (
    //     <Game2/>
    //   );
    // }
  }
}
