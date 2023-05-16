import { Dispatch } from "redux";
import { IContact } from "../../model/IContact";
import { ConatctsAction, ContactsActionEnum, SetContactsAction, setErrorAction, setIsLoadingAction } from "../reducers/contacts/types";
import { chatServices } from "../../api/chatServices";
import Storage from "../../utils/Storage";
import phoneToChatId from "../../utils/phoneToChatId";
import chatIdToPhone from "../../utils/chatIdToPhone";
export const setContacts = (payload: IContact): SetContactsAction => ({ type: ContactsActionEnum.SET_CONTACTS, payload })
export const setIsLoading = (payload: boolean): setIsLoadingAction => ({ type: ContactsActionEnum.SET_IS_LOADING, payload })
export const setError = (payload: string): setErrorAction => ({ type: ContactsActionEnum.SET_ERROR, payload })
export const fetchAddContact = (name: string, phone: string,cb:()=>void) => {
    return async (dispatch: Dispatch<ConatctsAction>) => {
        try {
     dispatch({type:ContactsActionEnum.ADD_CONTACT_REQUEST})        
    const user=Storage.get('user')
    const res =await chatServices.sendMessage({
    chatId:phoneToChatId(phone),
    message:`${chatIdToPhone(user.settings.wid)} contact user added you`
    })
    dispatch(setContacts({name,phone}))
    cb()
     dispatch({type:ContactsActionEnum.ADD_CONTACT_SUCCESS})   
        } catch(e:any) {
            dispatch(setError(e.message))
            dispatch({type:ContactsActionEnum.ADD_CONTACT_FAIL})  
        }
    }
}

