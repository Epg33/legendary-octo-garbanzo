import { View, Text, Button } from 'react-native'
import React from 'react'
import { useEffect } from 'react/cjs/react.production.min'
import axios from 'axios'

export default function Chats({navigation}) {
	const login = () => {
		axios.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=20')
			.then(res => console.log(res))
	}
  return (
    <View>
      <Text>Chats</Text>
      <Button title='Home' onPress={()=>navigation.navigate('Home')}/>
			<Button title='login' onPress={login}/>
    </View>
  )
}