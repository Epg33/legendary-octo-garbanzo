import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Chats({navigation}) {
  return (
    <View>
      <Text>Chats</Text>
      <Button title='Home' onPress={()=>navigation.navigate('Home')}/>
    </View>
  )
}