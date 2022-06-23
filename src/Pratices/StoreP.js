import { legacy_createStore as createStore } from "redux";
import { reducerP } from "./Reducer";

const intialState = {
    count: 10,
}

export const StoreP = createStore(reducerP, intialState);