import { IUser } from "../../../model/IUser"



export interface AuthState{
isAuth:boolean,
error:string | null,
isLoading:boolean,
succesText:string,
user:IUser
}

export enum AuthActionEnum{
    SET_AUTH='SET_AUTH',
    SET_IS_LOADING='SET_IS_LOADING',
    SET_ERROR='SET_ERROR',
    SET_USER='SET_USER',
}


export interface setAuthAction{
    type:AuthActionEnum.SET_AUTH,
    payload:boolean
}


export interface setUserAction{
    type:AuthActionEnum.SET_USER,
    payload:IUser
}
export interface setErrorAction{
    type:AuthActionEnum.SET_ERROR,
    payload:string | null
}
export interface setIsLoadingAction{
    type:AuthActionEnum.SET_IS_LOADING,
    payload:boolean
}

export type AuthAction=setAuthAction |
                       setErrorAction |
                       setIsLoadingAction |
                       setUserAction
        