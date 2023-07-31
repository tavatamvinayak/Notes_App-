import { StatusBar } from "react-native";
import AppNavigation from "./src/navigation/AppNavigation";
import StateProvider from "./src/context/StateProvider";


export default function App() {
  return (
    <>
      <StatusBar />
      <>
        <StateProvider>
          <AppNavigation />
        </StateProvider>
      </>
    </>
  );
}
