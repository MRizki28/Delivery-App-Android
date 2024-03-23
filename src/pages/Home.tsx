import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import Searching from "../components/Searching";
import { FlatGrid } from "react-native-super-grid";
import ProductsData, { Product } from "../Data/Products/ProductsData";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../components/StackNavigation";

const Home: React.FC = () => {
    const products: Product[] = ProductsData;
    const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <>
            <View className="p-4 mt-8">
                <Text className="text-2xl font-bold text-black">Categories</Text>
            </View>
            <Searching></Searching>
            <FlatGrid
                itemDimension={130}
                data={products}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigate(item.link)} className="border-gray-400 border rounded-lg h-60 bg-white">
                        <Image source={item.img as ImageSourcePropType} className="w-full object-cover"></Image>
                        <View className="m-4">
                            <Text className="text-lg font-bold text-black">{item.title}</Text>
                            <Text className="text-xs">({item.count})</Text>
                        </View>
                    </TouchableOpacity>
                )}
            >
            </FlatGrid>
        </>
    );
}

export default Home;
