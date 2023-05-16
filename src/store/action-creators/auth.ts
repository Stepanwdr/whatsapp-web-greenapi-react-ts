import { Dispatch } from "redux";
import { IUser } from "../../model/IUser";
import { AuthAction, AuthActionEnum, setAuthAction, setErrorAction, setIsLoadingAction, setUserAction } from "../reducers/auth/types";
import Storage from "../../utils/Storage";
import { authServices } from "../../api/authServices";
export const setAuth = (payload: boolean): setAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload })
export const setError = (payload: string): setErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload })
export const setUser = (payload: IUser): setUserAction => ({ type: AuthActionEnum.SET_USER, payload })
export const setIsLoading = (payload: boolean): setIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload })
export const fetchLogin = (idInstance: number, apiTokenInstance: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch(setError(''))
            dispatch(setIsLoading(true))
            const res = await authServices.getAccountSettings(idInstance,apiTokenInstance)
            console.log(res)
            const data={
                idInstance, 
                apiTokenInstance,
                settings:res.data 
            }
            Storage.set('user', data)
            Storage.set('isAuth', 'true')
            dispatch(setAuth(true))
            dispatch(setUser(data))
            dispatch(setIsLoading(false))
        } catch (e: any) {
            console.log(e)
            dispatch(logout())
            setError(e.message)
        }
    }
}
export const logout = (): setAuthAction => {
    Storage.remove('user')
    Storage.remove('isAuth')
    return { type: AuthActionEnum.SET_AUTH, payload: false }
}