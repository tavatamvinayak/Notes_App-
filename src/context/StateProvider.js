import { useEffect, useState } from "react"
import NoteContext from "./createContext";

// storage store
import AsyncStorage from '@react-native-async-storage/async-storage';

const StateProvider = ({ children }) => {

    const [NotesList, setNotesList] = useState([])


    // Local storage Notes get
    const getNotesStorage =()=>{
        AsyncStorage.getItem('Notes_VT').then(value =>{
            const store = JSON.parse(value)
            store==null ? null : setNotesList(store)
            // console.warn(store)
        }
        ).catch((e)=>console.error(e));
    }
    useEffect(()=>{
      getNotesStorage()
  },[])

    /// localstorage to set
    const saveTheNotes = () => {
        // Function to save the value in AsyncStorage
        if (NotesList.length) {
            AsyncStorage.setItem('Notes_VT', JSON.stringify(NotesList));
            // alert('Note Saved store');
        } else {
            // alert('Notes not found & Error Note storage store');
        }
    };

    useEffect(() => {
        saveTheNotes()
    }, [NotesList])


// /// check user login already
const [Token, setToken] = useState(null)
const token = async()=>{
    AsyncStorage.getItem('Notes_VT_App_Login_Token').then(value =>{
        value == null ? null : setToken(value)
    //   console.warn(value)
  }
  ).catch((e)=>console.error(e));
  }
useEffect(()=>{token()},[])


    console.log(NotesList)

    return (
        <NoteContext.Provider value={{ NotesList, setNotesList ,Token ,setToken}}>
            {children}
        </NoteContext.Provider>
    )
}
export default StateProvider;