import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function SplashScreen() {
    return (
        <View style={style.container} >
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBBwjtuXgR-vt4TyapJDIqyemmuxOKZ9HuA&s" }} style={{width : 300,height : 300}} />

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})