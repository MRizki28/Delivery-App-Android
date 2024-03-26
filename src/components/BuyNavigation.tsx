import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Vegetables from "../pages/Vegetables/Vegetables";
import Buy from "../pages/Buy/Buy";
import Home from "../pages/Home";

export type RootStackParamList = {
    Home: undefined;
    Vegetables: undefined;
    Buy: undefined;
};

const BuyNavigation: React.FC = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Buy"
                component={Buy}
                options={{
                    headerShown: false,
                    headerTitleAlign: "center"
                }}
            />
        </Stack.Navigator>
    )
}

export default BuyNavigation;
