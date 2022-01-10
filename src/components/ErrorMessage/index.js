import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'

export default function ErrorMessage({error,visible}) {
    if (!error || !visible) return null;
    return (
            <Text style={styles.ErrorMessage}>{error}</Text>
    )
}

const styles = StyleSheet.create({
    ErrorMessage:{
        padding:5,
        color:colors.secondary,
        marginHorizontal:10,
        fontSize:12
    }
})
