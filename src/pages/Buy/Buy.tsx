import React from "react";
import { Image, Text, View } from "react-native";
import { FlatGrid } from "react-native-super-grid";

const Buy: React.FC = () => {
    return (
        <View>
            <FlatGrid
                itemDimension={300}
                data={[1, 2, 3]}
                renderItem={({ item }) => (
                    <View>
                        {/* Perbaikan: Menggunakan style properti untuk styling */}
                        <View style={{ flex: 1 }}>
                            {/* Perbaikan: Menambahkan source properti untuk gambar */}
                            <Image source={require("../../assets/Products/product1.png")} style={{ width: 300, height: 300 }} />
                        </View>
                        <View>
                            {/* Perbaikan: Menambahkan key properti untuk masing-masing elemen */}
                            <Text key={item}>Boston Lettuce</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default Buy;
