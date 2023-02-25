import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import Chats from './views/Chats';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Text>Holi</Text>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Chats' component={Chats}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

