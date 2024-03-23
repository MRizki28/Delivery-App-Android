import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomBar from "./src/components/BottomBar";
import 'react-native-gesture-handler';
import { Text } from "react-native";


const App: React.FC = () => {
  return (
      <NavigationContainer independent={true}>
        <BottomBar></BottomBar>
      </NavigationContainer>
  )
}

export default App