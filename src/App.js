import Header from "./components/layouts/header";
import Meals from './components/layouts/meals';
import Cart from "./components/cart";
import CartProvider from "./store/cartProvider";
import {useState} from 'react'
function App() {
  const[updatestae,setupdatestate]=useState(false);
  const btnopenhandler=()=>{
    setupdatestate(true)
  }
  const btnclosehandler=()=>{
    setupdatestate(false)
  }

  return (
    <CartProvider>
      {updatestae && < Cart onhidehandler ={btnclosehandler}/>}
      <Header onshowhandler={btnopenhandler}/>
      <Meals/>
      </CartProvider>
  );
}

export default App;
