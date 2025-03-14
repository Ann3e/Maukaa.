import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    // const [cartItems, setCartItems] = useState({});

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            let itemInfo = products.find((product) => product._id === itemId);
            if (!itemInfo) continue; // Avoid undefined product errors
            for (const size in cartItems[itemId]) {
                try {
                    if (cartItems[itemId][size] > 0) {
                        totalAmount += itemInfo.price * cartItems[itemId][size];
                    }
                } catch (error) {
                    console.error("Error calculating total amount:", error);
                }
            }
        }
        return totalAmount;
    };

    // const getCartCount = () => {
    //     let itemCount = 0;
    //     for (const itemId in cartItems) {
    //         for (const size in cartItems[itemId]) {
    //             itemCount += cartItems[itemId][size];
    //         }
    //     }
    //     return itemCount;
    // };

    const currency = "₹";
    const delivery_fee = 10;
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false)
    const [cartItems,setCartItems]=useState({});

    const addToCart= async (itemId,size)=>{
        if(!size){
            toast.error('Select Product Size');
            return ;
        }
        let cartData=structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }
            else{
                cartData[itemId][size]=1;
            }
        }
        else{
            cartData[itemId]={}
            cartData[itemId][size]=1;

        }
        setCartItems(cartData);
    }

    const getCartCount=()=>{
        let totalCount=0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount+=cartItems[items][item];
                    }
                }
                catch(error){

                }
            }
        }
        return totalCount;
    }
    const value = {
        products,
        currency,
        delivery_fee,
        cartItems,
        getCartCount,
        search,setSearch,showSearch,setShowSearch,
        updateQuantity,
        getCartAmount,
        getCartCount,
        cartItems,addToCart
    };

    return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
