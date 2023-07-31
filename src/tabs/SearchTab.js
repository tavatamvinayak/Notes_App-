import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import NoteContext from '../context/createContext'
import NoteCart from '../components/NoteCart'

const SearchTab = () => {
    const navigation = useNavigation()
    const {NotesList}=useContext(NoteContext )
    useEffect(()=>{
        navigation.setOptions({title: 'Search'})
    },[])
    const [SearchInput, setSearchInput] = useState(null)
    const [SearchNotes, setSearchNotes] = useState([])
    const SearchHanndle=()=>{
    const search = NotesList.filter((text)=>{
      return text.title == SearchInput || text.description == SearchInput 
    })
    // console.warn(search)
    setSearchNotes(search)
    }
    useEffect(() => {
    SearchHanndle();
    }, [SearchInput])
  return (
    <View className="p-10">
        <View className="flex-row border p-2 rounded-full">
          <TextInput 
          placeholder='Search Notes'
          onChangeText={setSearchInput}
          className="w-[90%]"
          />
          <TouchableOpacity onPress={SearchHanndle}>
          <AntDesign name="search1" size={30} color="black" />
          </TouchableOpacity>
        </View>

        {/* search notes  */}
        <View>
          {
            SearchNotes.length ? 
            SearchNotes.map((e,i)=><NoteCart title={e.title} id={e.id} description={e.description} key={i} />)
            :
            (<View className="w-full h-[600] flex-3 justify-center items-center">
                    <Text>Please Search your notes & go create new note <Text onPress={()=> navigation.navigate('AddNotes')} className="text-red-500" >Click here</Text> </Text>
                 </View>)
          }
        </View>
    </View>
  )
}

export default SearchTab