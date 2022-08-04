import classes from './avilableMeals.module.css'
import FormMeal from './formMeals';
import { useContext } from 'react';
import CartContext from '../../store/cartContext';
const Mealitem =(props)=>{
 const crtx=useContext(CartContext)
    const addToCartHandler=(amount)=>{
        crtx.additem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }
    return(<>
    <div className={classes.container}>
        <li>
            {props.name}
            {props.discription}
            {props.price}
            {props.amount}
        </li>
        <div>
            <FormMeal onAddtoCart={addToCartHandler}/>
        </div>
    </div>
    </>)
};
export default Mealitem;