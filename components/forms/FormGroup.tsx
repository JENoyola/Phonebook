import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function FormGroup({placeholder,onChangeText,label,value}:any) {
    return (
        <View style={{width : '90%',paddingVertical : 15}} >
            <Text style={{fontWeight : "600",fontSize : 18}} >{label}</Text>
            <TextInput onChangeText={onChangeText} value={value} placeholder={placeholder}  style={{fontSize : 18,width : '100%',paddingVertical : 5,paddingHorizontal : 8,borderWidth : 1.5,marginTop : 5}} />
        </View>
    )
}