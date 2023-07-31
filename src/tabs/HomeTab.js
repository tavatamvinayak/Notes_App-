import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import NoteCart from '../components/NoteCart'
import NoteContext from '../context/createContext'


const HomeTab = () => {

    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({title: 'Home'})
    },[])
    const {NotesList, setNotesList} = useContext(NoteContext)

    
  return (
    <View className="px-5 h-[700]">
    <ScrollView showsVerticalScrollIndicator={false}>
        <View>
               {
                 NotesList.length ? 
                 NotesList.map((e,i)=><NoteCart title={e.title} id={e.id} description={e.description} key={i} />)
                 :(<View className="w-full h-[600] flex-3 justify-center items-center">
                    <Text>Not create new notes <Text onPress={()=> navigation.navigate('AddNotes')} className="text-red-500" >Click here</Text> </Text>
                 </View>)
               } 
        </View>
        </ScrollView>
    </View>
  )
}

export default HomeTab