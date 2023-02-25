import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
    console.log('holi');
  return (
    <View>
      <Text>Home</Text>
      <Button title='Chats' onPress={()=>console.log(navigation)}/>
    </View>
  )
}