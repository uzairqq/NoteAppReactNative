import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../misc/colors'

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.searchBarInput} placeholder='Search Here' />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {

    },
    searchBarInput: {
        borderWidth: 1,
        borderColor: colors.PRIMARY,
        height: 40,
        paddingLeft: 15,
        fontsize: 20,
        borderRadius: 20,
        marginTop: 10

    }
})