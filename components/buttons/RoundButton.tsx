import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RoundButton({onPress}:any) {
    return (
        <TouchableOpacity onPress={onPress} style={{ width: 35, height: 35, backgroundColor: '#4457ff', alignItems: 'center', justifyContent: 'center', borderRadius: 100 }} >
            <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', padding: 0, margin: 0 }} >+</Text>
        </TouchableOpacity>
    )
}