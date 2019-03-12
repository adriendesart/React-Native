import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class Welcome extends React.Component {

    render() {

        return (
          <View style={styles.container}>
            <Text style={styles.titre}>Imitate Simon</Text>
            <Button 
                title="Play Original Game"
                onPress={this.props.test}
            />
            {/* <Button 
                title="Play Hardcore Game"
                onPress={this.props.test}
            /> */}
          </View>
        );
    }
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