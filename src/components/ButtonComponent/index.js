import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import colors from '../../config/colors'

export default function ButtonComponent({children,style,onpress}) {
    return (
        <TouchableHighlight
        underlayColor={colors.subPrimary}
        onPress={onpress}
        style={[styles.ButtonComponent,style]} >
          <Text>{children}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    ButtonComponent:{
        width: "100%",
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 25,
        alignItems:'center',
        justifyContent:'center',
        margin:5
    }
    
})
