import { DECREMENT, INCREMENT } from "./Action_types";


export const incrementCounter = () => ({
    type: INCREMENT,
})
export const decrementCounter = () => ({
    type: DECREMENT,
})