import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Intro = () => {
    return (

        <>
            <StatusBar hidden />
            <View style={styles.container}>
                <Text>Enter Your Name To Continue</Text>
                <TextInput />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {}
})

export default Intro;

