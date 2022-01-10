import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '../../config/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function InputFeild({name,size=15,color,placeholder,style,...otherProps}) {
    return (
        <View style={[styles.InputFeildContainer,style]}>
            {name && <Icon style={styles.icon} name={name} size={size} color={color} />}
            <TextInput placeholder={placeholder} {...otherProps}  />
        </View>
    )
}

const styles = StyleSheet.create({
    InputFeildContainer: {
        width: "100%",
        height: 50,
        backgroundColor: colors.light,
        borderRadius: 25,
        padding: 5,
        flexDirection: 'row',
        alignItems:'center',
        margin:5
    },
    icon: {
        paddingRight: 5,
        paddingHorizontal:10
    }
})
