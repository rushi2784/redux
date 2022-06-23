import { Decrement, five, Increment, Twenty } from "./Action_type";


export const reducerP = (state, action) => {
    switch (action.type) {
        case Increment: {
            return {
                ...state, count: state.count + 1,
            }
        }
        case Decrement: {
            return {
                ...state, count: state.count - 1,
            }
        }
        case five: {
            return {
                ...state, count: state.count + 5,
            }
        }
        case Twenty: {
            return {
                ...state, count: state.count - 20,
            }
        }
        default: {
            return state
        }
    }
}