import { useRef } from "react";

const FormMeal =(props )=>{
const amountInputRef =useRef(null);

  const submitHandler=(event)=>{
     event.preventDefault();
    const enteredAmount =amountInputRef.current.value;
    const enterdAmiuntNumber = +enteredAmount;
    console.log(enterdAmiuntNumber);
    props.onAddtoCart(enterdAmiuntNumber);
  }
return(<>
       <form onSubmit={submitHandler}>
         <label htmlFor="amount"></label>
         <input ref={amountInputRef} type='number' name="amount" id="amount"/>
         <button>
             ADD
         </button>
       </form>
</>)
};
export default FormMeal