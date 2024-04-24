import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function BasicButton({title,onPress,color}:any) {
  return (
    <TouchableOpacity onPress={onPress} style={{borderColor : color,paddingVertical : 5,paddingHorizontal : 8,borderRadius : 15,borderWidth : 1.5,alignItems : 'center',justifyContent : 'center'}} >
      <Text style={{color : color}} >{title}</Text>
    </TouchableOpacity>
  )
}
