import React from "react";
import { TextInput, View } from "react-native";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Searching: React.FC = () => {
    return (
        <View className="border border-gray-400 m-5 flex h-11 flex-row items-center rounded-full bg-white" >
            <View className="ml-3">
                <FontAwesomeIcon icon={faSearch} style={{ marginRight: 10 }} />
            </View>
            <TextInput
                placeholder="Search"
                placeholderTextColor="#A9A9A9"
            />
        </View>
    )
}

export default Searching