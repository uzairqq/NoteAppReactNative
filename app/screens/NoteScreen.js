import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../misc/colors'

const NoteScreen = ({ user }) => {
    const [greet, setGreet] = useState('');

    const findGreet = () => {
        const hrs = new Date().getHours();
        if (hrs === 0 || hrs < 12) return setGreet('Morning');
        if (hrs > 12 || hrs < 17) return setGreet('Afternoon');
        else setGreet('Evening');
        console.log(hrs);
    }

    useEffect(() => {
        findGreet();
    }, [])

    return (
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.LIGHT} />
            <View style={styles.container}>
                <Text style={styles.titleHeader}>{`Good ${greet} ${user}`}</Text>
            </View>

        </>
    )
}

export default NoteScreen

const styles = StyleSheet.create({
    container: {},
    titleHeader: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})