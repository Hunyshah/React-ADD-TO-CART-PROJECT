import Modal from "./layouts/modal";
import { useContext } from "react";
import CartContext from "../store/cartContext";

const Cart =(props)=>{
    const contx =useContext(CartContext);
    const totalAmount =contx.totalAmount;
    const hasItem = contx.items.length>0;
    console.log(totalAmount)

    const cartitems = contx.items.map((item,index)=>
      
        <ul><li>
            
            {item.name}
            </li></ul>
)
console.log(cartitems)
    return (
    <Modal>
    <div>
        {cartitems}
        <div><span>{totalAmount}</span></div>
        <div>
            {hasItem && <button>Order</button>}
            <button onClick={props.onhidehandler}>Close</button>
            </div>
    </div>
    </Modal>)
};
export default Cart;