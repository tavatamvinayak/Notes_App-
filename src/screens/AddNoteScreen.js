import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {AsyncStorage} from 'react-native';
import NoteContext from "../context/createContext";
import StateContext from "../context/StateProvider";

//redux toolkit

const AddNoteScreen = () => {
    const [Title, setTitle] = useState("")
    const [Description , setDescription]=useState("")
    const navigation = useNavigation();

    const {NotesList, setNotesList} = useContext(NoteContext)

  const NoteSubmite = () => {
    // console.warn(Title , Description);
    let id = NotesList.length+1
    const CreateNotes = { id ,title:Title,description:Description}
    setNotesList([...NotesList , CreateNotes])

    navigation.navigate('Home')
  };

  
  return (
    <SafeAreaView className="p-5">
      <View>
        <TextInput
          placeholder="write a Title "
          multiline
          className="w-full border rounded-xl p-3 my-2  "
          defaultValue=""
          onChangeText={setTitle}
        />
        <TextInput
          placeholder="write a Description "
          multiline
          className="w-full border rounded-xl p-3  "
          onChangeText={setDescription}
        />
        <View className="flex-row justify-between">
          <TouchableOpacity
            onPress={NoteSubmite}
            className="px-5 py-2 border rounded-xl w-32 items-center my-5"
          >
            <Text>Add Note</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={NoteSubmite}
            className="px-5 py-2 border rounded-xl w-32 items-center my-5"
          >
            <Text>Add Note</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNoteScreen;
