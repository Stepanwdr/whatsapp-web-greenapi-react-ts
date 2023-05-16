import { TypedUseSelectorHook, useSelector } from "react-redux"
import { rootReducerType } from "../store"


       
export const useTypedSelector:TypedUseSelectorHook<rootReducerType> =useSelector
