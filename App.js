import React, { useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import Platform from 'react-native/Libraries/Utilities/Platform'

const getRandomInt = () => {
    const randomInt = parseInt(Math.random() * 100)

    return randomInt
} 

const App = () => {
    const [randomNumber, setRandomNumber] = useState(':)')
    const colorButton = Platform.OS === 'ios'? '#f2fdff' : '#4AA9D9'
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Random Number</Text>
            <Text style={styles.number}>{randomNumber}</Text>
            <Button color={colorButton} title='Generate' onPress={() => setRandomNumber(getRandomInt())} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#08628A'
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        color: '#f2fdff'
    },
    number: {
        fontSize: 90,
        textAlign: 'center',
        color: '#f2fdff'
    },
})

export default App