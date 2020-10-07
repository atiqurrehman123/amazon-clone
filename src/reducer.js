export const initialState={
    basket:[],
    // adding after auth for user logging
    user:null,
}
// selector
//basket? which use for preventing initial value 0 means initaial value of amount 0
export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=>item.price+amount,0)

const reducer =(state,action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
        return {
            //whatever orginaly state
            ...state,
            // ...state.basket this line means whatever the basket was and second action.item whatever you change
            basket:[...state.basket,action.item],
        };
       case "REMOVE_FROM_BASKET":
       const index=state.basket.findIndex(
           (basketItem)=>basketItem.id===action.id
       )
       let newbasket=[...state.basket];
       if(index>=0){
           newbasket.splice(index,1);
       }else
       {
           console.warn(`Cant remove product (id: ${action.id}) as it is not in basket`);
       }
       return{
           ...state,
           basket:newbasket,
       }
       case "SET_USER":
       return {
           ...state,
           user:action.user,
       }


        default:
        return state;   
    }
}
export default  reducer;