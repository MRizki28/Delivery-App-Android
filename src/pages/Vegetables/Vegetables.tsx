import React from "react";
import { Image, Text, View } from "react-native";
import Background from "../../assets/Background.png";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../components/StackNavigation";
import Searching from "../../components/Searching";
import { FlatGrid } from "react-native-super-grid";


const Vegetables: React.FC = () => {
    const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <>
            <View className="max-h-72">
                <View className="flex-row justify-end">
                    <View >
                        <Text className="m-2 mt-28 text-3xl text-black font-bold">Vegetables</Text>
                    </View>
                    <View className="flex-1">
                        <Image source={Background} className="ml-10 w-52 h-52" />
                    </View>
                </View>
                <View className="relative bottom-3">
                    <Searching></Searching>
                    <View >
                        <FlatGrid
                            itemDimension={500}
                            data={[1, 2, 3, 4, 5, 6]}
                            renderItem={({ item }) => (
                                <View className="">
                                    <View className="flex flex-row">
                                        <Image source={require("../../assets/Products/product1.png")} className="w-50 rounded-lg" />
                                        <View className="ml-3">
                                            <Text className="font-bold text-lg" key={item}>Boston Lettuce</Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>

            </View>

        </>

    );
};

export default Vegetables;
