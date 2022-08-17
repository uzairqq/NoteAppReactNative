import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../misc/colors'
import { Dimensions } from 'react-native'
import colors from '../misc/colors'
import RoundIconBtn from '../components/RoundIconBtn'

const Intro = () => {
    const [user, setUser] = useState("");
    const handleOnChangeText = (text) => {
        setUser(text);
    }
    console.log(user)
    return (
        <>
            <StatusBar hidden />
            <View style={styles.container}>
                <Text style={styles.inputTitle}>Enter Your Name To Continue</Text>
                <TextInput value={user} onChangeText={handleOnChangeText} placeholder='Enter Name' style={styles.textInput} />
                {user.trim().length > 3 ?
                    <RoundIconBtn antIconName={"arrowright"} size={21} color={colors.LIGHT} />
                    : null
                }

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 3,
        borderColor: Colors.PRIMARY,
        color: colors.PRIMARY,
        width: Dimensions.get('screen').width - 50,
        borderRadius: 10,
        height: 50,
        paddingLeft: 15,
        fontSize: 20
    },
    inputTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 30,
        marginBottom: 5,
        opacity: 0.5
    }
})

export default Intro;

