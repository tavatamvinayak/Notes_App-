import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddNoteScreen from '../screens/AddNoteScreen';
import UpdateDelete from '../screens/Update&Delete';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import NoteContext from '../context/createContext';
import ButtomTab from './ButtomNavigation';



const Stack = createNativeStackNavigator()
const AppNavigation = () => {
const {Token}=useContext(NoteContext)

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="ButtomTab" component={ButtomTab}  options={{headerShown:false}}/>
            <Stack.Screen name="UpdateDelete" component={UpdateDelete} />
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation