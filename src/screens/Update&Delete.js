import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import NoteContext from '../context/createContext';

const UpdateDelete = () => {
  const { params: {
   id
  } } = useRoute();
  const navigation =useNavigation()
  
  const { NotesList, setNotesList } = useContext(NoteContext)
  const ID_index = NotesList.findIndex((e)=>e.id==id)
  const Note = NotesList[ID_index]
 

const title = Note.title
const description = Note.description


  const [UpdateTitle, setUpdateTitle] = useState(title)
  const [UpdateDescription, setUpdateDescription] = useState(description)


  const UpdateNote = () => {
    Note.title=UpdateTitle
    Note.description=UpdateDescription
    setNotesList([...NotesList])
    navigation.navigate('Home')
  }
  const DeleteNote = () => {
    let update = NotesList.filter((value)=>{
      return value.id != id
    })
    setNotesList(update)
    navigation.navigate('Home')
  }

  return (
    <View className="px-5 mt-5">
      <TextInput
        placeholder="write a Title "
        multiline
        className="w-full border rounded-xl p-3 my-2  "
        defaultValue={UpdateTitle}
        onChangeText={setUpdateTitle}
      />
      <TextInput
        placeholder="write a Description "
        multiline
        className="w-full border rounded-xl p-3  "
        defaultValue={UpdateDescription}
        onChangeText={setUpdateDescription}
      />
      <View className="flex-row justify-between">
        <TouchableOpacity
          onPress={DeleteNote}
          className="px-5 py-2 border rounded-xl w-32 items-center my-5"
        >
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={UpdateNote}
          className="px-5 py-2 border rounded-xl w-32 items-center my-5"
        >
          <Text>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UpdateDelete