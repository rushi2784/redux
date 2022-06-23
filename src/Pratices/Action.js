import { Decrement, Increment } from "./Action_type"


export const incrementCount=()=>({
    type:Increment
})

export const decrementCount=()=>({
    type:Decrement
})