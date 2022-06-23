import { DECREMENT, INCREMENT } from "../Action/Action_types";

export const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state, count: state.count + 1,
            }

        }
        case DECREMENT: {
            return {
                ...state, count: state.count - 1,
            }

        }
        default: {
            return state;
        }
    }
}