import { createContext } from "react";
const CartContext =createContext({
    items:[],
    totalAmount:0,
    additem:()=>{},
    removeitem:()=>{},
})
export default CartContext;