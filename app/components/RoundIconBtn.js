import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/colors';

const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
    return <AntDesign
        name={antIconName}
        size={size || 25}
        color={color || colors.DARK}
        style={[styles.icon, { ...style }]}
        onPress={onPress}
    />
}

export default RoundIconBtn

const styles = StyleSheet.create({
    icon: {
        backgroundColor: colors.PRIMARY,
        padding: 20,
        marginTop: 15,
        borderRadius: 60,
        elevation: 5
    }
})