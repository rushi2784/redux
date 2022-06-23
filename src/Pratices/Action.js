import { Decrement, five, Increment, Twenty } from "./Action_type"


export const incrementCount = () => ({
    type: Increment
})

export const decrementCount = () => ({
    type: Decrement
})
export const incrementFive = () => ({
    type: five
})

export const decrementTwenty = () => ({
    type: Twenty
})
