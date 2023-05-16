import { applyMiddleware, combineReducers, createStore } from "redux";
import chatReducer from './reducers/auth'
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import contactsReducer from "./reducers/contacts";
import messageReducer from "./reducers/message";

export const rootReducer=combineReducers({
    auth:authReducer,
    contacts:contactsReducer,
    message:messageReducer
})

export type rootReducerType=ReturnType<typeof rootReducer>

export const store=createStore(rootReducer,applyMiddleware(thunk))

