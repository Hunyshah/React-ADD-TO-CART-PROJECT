import Mealitem from './mealitem';
const dummyData =[
    {
        id:1,name:'sushi',discription:'germen scincetes',amount:12,price:123
    },
    {
        id:2,name:'turkw',discription:'germen player',amount:12,price:124
    },
    {
        id:3,name:'phonex',amount:12,discription:'pphollpine scincetes',price:193
    }
]
const AvilabeMeals =()=>{
    const dummylist = dummyData.map((item,index)=> 
    <Mealitem key ={index} id={item.id} name={item.name} 
   amount={item.amount}
    discription= {item.discription} price={item.price} />
    )
    console.log(dummylist)
    return (<>
    
        <h3>{dummylist}</h3>
    
    
    </>);
};
export default AvilabeMeals