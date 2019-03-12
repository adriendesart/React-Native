import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button} from 'react-native';

const {width, height} = require('Dimensions').get('window');
const CELL_SIZE = Math.floor(width * .5); // 20% of the screen width
const CELL_PADDING = Math.floor(CELL_SIZE * .02); // 5% of the cell size
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
                    <Text>Count :{mainSequence.length}</Text>
                    <Text>Best score :{bestScore}</Text>
                </View>
                <Button title="PLAY!" onPress={()=>this._resetTheGame()}/>
                {this._renderTiles()}
            </View>
        );
    }

    _resetTheGame=()=> {
        mainSequence = [];
        this.setState({lit: 0});
        let startColor = random(1, 4);
        mainSequence.push(startColor);
        currSequence = mainSequence.slice(0);
        this._playNotes(mainSequence);
    }

    _playTheGame=(id)=> {
        let gameOver = false;
    
        if (currSequence.shift() !== id) {
            gameOver = true;
            Alert.alert("Try Again!")
        }
    
        if (!gameOver && currSequence.length === 0) {
            mainSequence.push(random(1, 4));
            currSequence = mainSequence.slice(0);
            this._playNotes(mainSequence);
        }
    }
    
    _playNotes=(sequence)=> {
        var i = 0;
        this.intervalId = setInterval(() => {
            this.setState({lit: sequence[i]});
            i++;
            if (i >= sequence.length) {
                clearInterval(this.intervalId);
                setTimeout(() => this.setState({lit: 0}), 400);
            }
        }, 1000);
        if(mainSequence.length >= bestScore){
            bestScore = mainSequence.length
        }
    }

    _renderTiles=()=>{
        let result = [];
        let i = 1;
        let bgColors = ["", "", "#3275DD", "#D93333", "#64D23B", "#FED731", "black"];
        for (var row = 0; row < 2; row++) {
            for (var col = 0; col < 2; col++) {
                var position = {
                    left: col * CELL_SIZE + CELL_PADDING,
                    top: row * CELL_SIZE + CELL_PADDING
                };
                result.push(this._renderTile(i++, position, {backgroundColor: bgColors[i]}, {backgroundColor: '#FF0B96'}));
            }
        }
        return result;
    }

    _renderTile=(id, position, bgColor, litBgColor)=>{
        return (
            <TouchableOpacity onPress={()=>this._playTheGame(id)}>
                <View style={[styles.tile, position, this.state.lit == id ? litBgColor : bgColor]}>
                    <Text style={styles.letter}>{id}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        marginTop: CELL_SIZE/2
    },
    textBox:{
        alignItems:'center'
    },
    tile: {
        position: 'absolute',
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