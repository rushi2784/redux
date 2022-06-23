import { legacy_createStore as createStore } from "redux";
import { reducer } from "../Reducer/Reducer";

const initialState={
    count:0,
    todo:[],
}
export const store=createStore(reducer,initialState);