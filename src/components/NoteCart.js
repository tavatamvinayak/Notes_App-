import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const NoteCart = ({title ,id ,description}) => {
    let Description = description.substring(0, 200);
    const navigation = useNavigation();
  return (
    <View className="border-b-2 border-gray-300 pb-3 mt-2 bg-gray-200 rounded-xl px-2">
        <View className="mb-5">
            <Text className=" py-3" name="title">{title}</Text>
            <Text>{Description}</Text>
        </View>
       <View className="flex-row justify-end">
       <TouchableOpacity onPress={()=> navigation.navigate('UpdateDelete',{id}) } className="border rounded-xl px-5 py-2 w-32 items-center" >
            <Text>more</Text>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default NoteCart