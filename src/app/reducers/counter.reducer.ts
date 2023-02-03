import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "../actions/counter.action";
import { initState } from "../states/counter.state";


const _counterReducer = createReducer(initState , on(increment ,(state)=>{
    return {
        ... state ,
        counter :state.counter +1 ,
    }
}),

on(decrement , (state)=>{
    return{
        ...state ,
        counter : state.counter -1
    }
}),
on(reset , (state)=>{
    return{
        ...state,
        counter : 0
    }
})


)

export function counterReducer (state :any , action : any){
 return _counterReducer(state , action) ;
}