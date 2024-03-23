import React from "react";
import { Image, Text, View } from "react-native";
import Background from "../../assets/Background.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons/faArrowAltCircleLeft"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../components/StackNavigation";
import Searching from "../../components/Searching";


const Vegetables: React.FC = () => {
    const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <>
            <View className="flex-row justify-end">
                <View >
                    <TouchableOpacity onPress={() => navigate('Home')} className="m-2 mt-20">
                        <FontAwesomeIcon size={35} color="#6C0EE4" icon={faArrowAltCircleLeft}></FontAwesomeIcon>
                    </TouchableOpacity>
                    <Text className="m-2 mt-5 text-3xl text-black font-bold">Vegetables</Text>
                </View>
                <View className="flex-1">
                    <Image source={Background} className="ml-10 w-52 h-52" />
                </View>
            </View>
            <View className="relative bottom-3">
                <Searching></Searching>
            </View>

        </>

    );
};

export default Vegetables;
