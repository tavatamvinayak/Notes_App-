import { AntDesign, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from '../tabs/HomeTab';
import AccountTab from '../tabs/AccountTab';
import SearchTab from '../tabs/SearchTab';
import AddNoteScreen from '../screens/AddNoteScreen';

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60
    }
}
function ButtomTab() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Home"
                component={HomeTab}
                options={{
                    tabBarIcon: ({ focused }) => <Ionicons name={focused ? "home" : "home-outline"}
                        size={24}

                    />
                }} />
            <Tab.Screen
                name="Search"
                component={SearchTab}
                options={{
                    tabBarIcon: ({ focused }) => <Ionicons name={"search-sharp"}
                        size={24}

                    />
                }} />
            <Tab.Screen
                name="AddNote"
                component={AddNoteScreen}
                options={{
                    tabBarIcon: ({ focused }) => <AntDesign name="pluscircle" size={24} color="black" />
                }} />
            <Tab.Screen
                name="Account"
                component={AccountTab}
                options={{
                    tabBarIcon: ({ focused }) => <Ionicons name={"person"}
                        size={24}

                    />
                }} />

        </Tab.Navigator>
    );
}
export default ButtomTab
