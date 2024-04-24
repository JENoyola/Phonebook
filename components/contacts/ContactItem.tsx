import { View, Text,  TouchableOpacity } from 'react-native'
import React from 'react'

export default function ContactItem({item,onEdit}:any) {

  return (
    <View style={{width : '100%',paddingVertical : 8,flexDirection : 'row',alignItems : 'center',justifyContent : 'space-between',borderColor : 'rgba(0,0,0,0.08)',borderBottomWidth : 1.5}} >
      <View style={{flex : 5,marginLeft : 5}} >
            <Text style={{fontSize : 25,fontWeight : '600'}} >
                {item.item.Name}
            </Text>
            <Text style={{fontSize : 14}} >
                {item.item.Phone}
            </Text>

      </View>
      <View style={{flex : 1, marginRight  : 5,alignItems : 'flex-end',justifyContent : 'center'}} >
        <TouchableOpacity onPress={onEdit} style={{alignItems : 'center',justifyContent : 'center',paddingVertical : 10}} >
            <Text style={{fontSize : 16,fontWeight : '500'}} >editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}