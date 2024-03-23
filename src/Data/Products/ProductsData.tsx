import React from "react";
import Product1 from "../../assets/Products/product1.png";
import Product2 from "../../assets/Products/Product2.png";
import Product3 from "../../assets/Products/product3.png";
import Product4 from "../../assets/Products/product4.png";
import Product5 from "../../assets/Products/Product5.png";
import Product6 from "../../assets/Products/product6.png";
import Vegetables from "../../pages/Vegetables/Vegetables";
import { RootStackParamList } from "../../components/StackNavigation";

export interface Product {
    img: string; 
    title: string;
    count: string;
    link: keyof RootStackParamList ;
}
const ProductsData: Product[] = [
    {
        img: Product1,
        title: "Vegetables",
        count: "45",
        link: "Vegetables" 
    },
    {
        img: Product2,
        title: "Fruits",
        count: "32",
        link: "Vegetables" 
    },
    {
        img: Product4,
        title: "Bread",
        count: "22",
        link: "Vegetables" 
    },
    {
        img: Product3,
        title: "Sweets",
        count: "22",
        link: "Vegetables" 
    },
    {
        img: Product5,
        title: "Pasta",
        count: "22",
        link: "Vegetables" 
    },
    {
        img: Product6,
        title: "Drinks",
        count: "22",
        link: "Vegetables" 
    },
];


export default ProductsData;
