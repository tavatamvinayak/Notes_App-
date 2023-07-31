import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignupScreen = () => {
    const navigation=useNavigation()
    const [FullName, setFullName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const CrateAccount = async()=>{
        if(FullName.length && Email.length && Password.length){
            const SignupInputs = {FullName,Email,Password}
            const res = await fetch('https://notesapp-nodejs-backend.onrender.com/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(SignupInputs)
            })
            const resp = await res.json()
            console.warn(resp)
            if(resp.token){
                AsyncStorage.setItem('Notes_VT_App_Login_Token',resp.token)
                navigation.navigate('AddNotes')
            }else{
                alert("FullName & Email & password something went wrong")
            }
        }else{
            alert('Email , userName , password all emty please fill  ')
        }
    }

    return (
        <View>
            <View className="px-5 mt-10 items-center">
                <Ionicons name="person-circle-outline" size={110} color="black" />
                <View>
                    <View>
                        <TextInput
                            placeholder="UserName"
                            className="border px-5 py-2 w-[300] rounded-xl my-3"
                            onChangeText={setFullName}
                            maxLength={20}
                            minLenght={6}
                        />
                        <TextInput
                            placeholder="Email"
                            className="border px-5 py-2 w-[300] rounded-xl my-3"
                            onChangeText={setEmail}
                        />
                        <TextInput
                            placeholder="PassWord"
                            secureTextEntry={true}
                            className="border px-5 py-2 w-[300] rounded-xl my-2"
                            onChangeText={setPassword}
                            maxLength={20}
                            minLenght={6}
                        />
                    </View>
                    {/* <Text>Vinayak tavatam</Text> */}
                    <View className="items-end">
                    <TouchableOpacity className="border px-5 py-2 mt-2 w-[100] items-center " onPress={CrateAccount}>
                        <Text>Signup</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}  className="items-end mt-3"><Text>already have a  account<Text className="text-green-500">Login</Text></Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignupScreen