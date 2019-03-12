import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Welcome =()=> {
    const goToGame = () => {
        Actions.gameOriginal()
    }
    const goToGame2 = ()=>{
        Actions.gameHardcore()
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Simon says</Text>
            <Button 
                title="Play Original Game"
                onPress={goToGame}
            />
            <Button 
                title="Play Hardcore Game"
                onPress={goToGame2}
            />
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titre: {
        fontSize: 40
    },
});

export default Welcome