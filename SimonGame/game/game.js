import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button} from 'react-native';

const {width, height} = require('Dimensions').get('window');
const CELL_SIZE = Math.floor(width * .3); 
const CELL_PADDING = Math.floor(CELL_SIZE * .02);
const BORDER_RADIUS = 100;
const TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
const LETTER_SIZE = 50;

let mainSequence = [];
let currSequence = [];

function random(min, max){
    return  (min + Math.floor(Math.random() * (max + 1 - min)));
}

let bestScore = 0;

export default class Game extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {lit: 0};
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textBox}>
                    <Text>Score :{mainSequence.length-1>0?mainSequence.length-1:0}</Text>
                    <Text>Best score :{bestScore}</Text>
                </View>
                <View>
                    <View style={styles.gameBox}>
                       {this._renderTiles(0)}
                       {this._renderTiles(1)} 
                    </View>
                    <View style={styles.gameBox}>
                       {this._renderTiles(2)} 
                       {this._renderTiles(3)}  
                    </View>
                </View>
                <Button title="PLAY!" onPress={()=>this._resetTheGame()}/>
            </View>
        );
    }

    _resetTheGame=()=> {
        mainSequence = [];
        this.setState({lit: 0});
        let startColor = random(1, 4);
        mainSequence.push(startColor);
        currSequence = [];
        this._playColor(mainSequence);
    }

    _playTheGame=(id)=> {
        let gameOver = false;
        currSequence.push(id);
        for(i=0;i<currSequence.length;i++){
            if(currSequence[i]!=mainSequence[i]){
                gameOver = true;
                Alert.alert("Try Again!")
            }
        }
        if (gameOver == false && (currSequence.length == mainSequence.length)){
            currSequence = [];
            mainSequence.push(random(1, 4));
            this._playColor(mainSequence);
        }
    }
    
    _playColor=(sequence)=> {
        var i = 0;
        this.intervalId = setInterval(() => {
            this.setState({lit: sequence[i]});
            setTimeout(() => this.setState({lit: 0}), 300);
            i++;
            if (i > sequence.length) {
                this.setState({lit: 0});
                clearInterval(this.intervalId);
            }
        }, 600);
        if(mainSequence.length > bestScore){
            bestScore = (mainSequence.length - 1)
        }
    }

    _renderTiles=(i)=>{
        let bgColors = ["#3275DD", "#D93333", "#64D23B", "#FED731", "black"];
        return this._renderTile(i+1, {backgroundColor: bgColors[i]}, {backgroundColor: bgColors[4]});
    }


    _renderTile=(id, bgColor, litBgColor)=>{
        return (
            <TouchableOpacity onPress={()=>this._playTheGame(id)}>
                <View style={[styles.tile, this.state.lit == id ? litBgColor : bgColor]}>
                    <Text style={styles.letter}>{id}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height-TILE_SIZE,
        justifyContent:'space-around',
    },
    textBox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        fontSize:30
    },
    gameBox:{
        width:width,
        flexDirection:'row',
        justifyContent:'space-around',
        padding:CELL_PADDING,
    },
    tile: {
        width: TILE_SIZE,
        height: TILE_SIZE,
        borderRadius: BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center',
      },
      letter: {
        color: 'white',
        fontSize: LETTER_SIZE,
        backgroundColor: 'transparent',
        borderRadius: BORDER_RADIUS,
        textAlign: 'center',
      },
});