import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NoteContext from '../context/createContext'


const LoginScreen = () => {
    const navigation=useNavigation()

    const { setToken } = useContext(NoteContext)

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const Login = async ()=>{
        if(Email.length && Password.length){
            const LoginInputs = {Email,Password}
            const res = await fetch('https://notesapp-nodejs-backend.onrender.com/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(LoginInputs)
            })
          const resp= await res.json();
            console.warn(resp)
            if(resp.token){
                AsyncStorage.setItem('Notes_VT_App_Login_Token',resp.token)
                setToken(resp.token)
                navigation.navigate('AddNote')

            }else{
                alert("Email & password something went wrong")
            }
        }else{
            alert('Email , password all emty please fill  ')
        }
    }

    return (
        <View>

        <View className="items-center mt-20">
            <Text className="text-2xl font-extrabold">Login</Text>
        </View>


            <View className="px-5 mt-10 items-center">
                <Ionicons name="person-circle-outline" size={110} color="black" />
                <View>
                    <View>
                        <TextInput
                            placeholder="Email"
                            className="border px-5 py-2 w-[300] rounded-xl my-3"
                            onChangeText={setEmail}
                        />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={true}
                            className="border px-5 py-2 w-[300] rounded-xl my-2"
                            onChangeText={setPassword}
                        />
                    </View>
                    {/* <Text>Vinayak tavatam</Text> */}
                    <View className="items-end">
                    <TouchableOpacity className="border px-5 py-2 mt-2 w-[100] items-center " onPress={Login}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Signup')}  className="items-end mt-3"><Text>Create New Account <Text className="text-green-500">SignUP</Text></Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen