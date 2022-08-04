import CartContext from "./cartContext";
import { useReducer } from "react";
const defaultstateitems ={
  items:[],
  totalAmount:0
};
const cartReducer =(state,action)=>{
  if (action.type === 'ADD'){
    const updateitems =state.items.concat(action.item);
    const updateamountitems = state.totalAmount +action.item.price * action.item.amount;
  return {items:updateitems,
          totalAmount:updateamountitems
         }
  }; return defaultstateitems;
};
const CartProvider =(props)=>{

  const[cartState,dispatchCartState]=useReducer(cartReducer,defaultstateitems)
    const additemHandler=(item)=>{
       dispatchCartState({
         type:'ADD',item:item
       });
    };
    const removeitemHandler=(id)=>{
      dispatchCartState({
        type:'REMOVE',id:id
      });
    }

   const cartContext ={
       items:cartState.items,
       totalAmount:cartState.totalAmount,
       additem:additemHandler,
       removeitem:removeitemHandler
   }
    return(<>
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
    </>)
};
export default CartProvider