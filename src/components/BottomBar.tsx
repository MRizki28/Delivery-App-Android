import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
// import Home from "../pages/Home";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBarChart } from '@fortawesome/free-regular-svg-icons/faBarChart'
import StackNavigation from "./StackNavigation";

const BottomBar: React.FC = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={() => ({
                tabBarIcon: ({ size, focused }) => (
                    <FontAwesomeIcon icon={faBarChart} size={size} color={focused ? '#7203FF' : '#9586A8'} />
                ),
                tabBarShowLabel: false,
                headerShown: false
            })}
        >
            <Tab.Screen
                name="Testing"
                component={StackNavigation}
                options={{
                    headerTitleAlign: "center",
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomBar