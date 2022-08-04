import { useContext } from 'react';
import CartContext from '../../store/cartContext';
import classes from '../layouts/header.module.css'
const Header=(props)=>{
    const cartctx=useContext(CartContext);
    const numberofcartitems =cartctx.items.reduce((curnum,item)=>{
        return curnum+item.amount;

    },0)
    return(<>
    <header className={classes.header}>
        <h1 className={classes.headerh1}>My Way</h1>
        <button className={classes.headerbutton} onClick={props.onshowhandler}><span className={classes.hspan}>
            {numberofcartitems}</span>Cart</button>
    </header>
    </>)
};
export default Header;