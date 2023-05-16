
import { IUser } from "../../../model/IUser";
import { AuthAction, AuthActionEnum, AuthState } from "./types";

const initialState: AuthState = {
    isAuth: false,
    error: '',
    isLoading: false,
    succesText:'',
    user:{} as IUser
}

export default function authReducer(state = initialState, action: AuthAction):AuthState {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {
                ...state,
                isAuth: action.payload,
                isLoading: false,
                succesText:'',
                error: ''
            }
        case AuthActionEnum.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case AuthActionEnum.SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                succesText:"You are successfuly logined"
                
            }
        case AuthActionEnum.SET_USER:
            return {
                ...state,
            }
        default:
            return state
    }
}