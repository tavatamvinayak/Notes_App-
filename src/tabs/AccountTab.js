import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import NoteContext from '../context/createContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AccountTab = () => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({ title: 'Account' })
  }, [])
  const { Token,setToken } = useContext(NoteContext)


  const Logout = () => {
    const removeLoginToken = async () => {
      try {
        await AsyncStorage.removeItem('Notes_VT_App_Login_Token');
        setToken(null)
        navigation.navigate('Home')
      } catch (error) {
        console.warn(error);
      }
    };

    removeLoginToken()
  }



  return (
    <View>
      <View>
        <Text className="text-center text-2xl font-bold">Account</Text>
      </View>

      {
        Token ? (
          <View className="px-5 mt-10 items-center">
            <Image 
            source={{uri:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"}}
            className="w-[200] h-[200] rounded-full"
            />
            <View className="my-10">
              <Text className="text-2xl font-semibold">Vinayak tavatam</Text>
              <View className="mt-5">
                <View >
                  <TouchableOpacity className="border-b-2 border-gray-400 py-2">
                    <Text className="text-xl">Your Notes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="border-b-2 border-gray-400 py-2">
                    <Text className="text-xl">setting</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity className="border px-5 py-2 mt-10 items-center" onPress={Logout}>
                <Text>LogOut</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View className="px-5 mt-10 items-center">
            <Ionicons name="person-circle-outline" size={110} color="black" />
            <View>

              <TouchableOpacity className="border px-5 py-2 mt-10" onPress={() => navigation.navigate('Login')}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    </View>
  )
}

export default AccountTab