import { Dispatch } from "redux";
import { IContact } from "../../model/IContact";
import { ConatctsAction, ContactsActionEnum, SetContactsAction, setErrorAction, setIsLoadingAction, setSelectedContactAction } from "../reducers/contacts/types";
import { chatServices } from "../../api/chatServices";
import Storage from "../../utils/Storage";
import phoneToChatId from "../../utils/phoneToChatId";
import { toast } from "react-toastify";
export const setContacts = (payload: IContact): SetContactsAction => ({ type: ContactsActionEnum.SET_CONTACTS, payload })
export const setIsLoading = (payload: boolean): setIsLoadingAction => ({ type: ContactsActionEnum.SET_IS_LOADING, payload })
export const setError = (payload: string): setErrorAction => ({ type: ContactsActionEnum.SET_ERROR, payload })
export const selectContact = (payload: IContact): setSelectedContactAction => ({ type: ContactsActionEnum.SET_SELECTED_CONTACT, payload })
export const fetchAddContact = (phone: string, cb: () => void) => {
    return async (dispatch: Dispatch<ConatctsAction>) => {
        try {
            dispatch({ type: ContactsActionEnum.ADD_CONTACT_REQUEST })
            const user = Storage.get('user')
            const res = await chatServices.getContactInfo({chatId:phoneToChatId(phone)})
            dispatch(setContacts(res.data))
            toast('Contact successfuly added!')
            cb()
            dispatch({ type: ContactsActionEnum.ADD_CONTACT_SUCCESS })
        } catch (e: any) {
            toast(e.message)
            dispatch(setError(e.message))
            dispatch({ type: ContactsActionEnum.ADD_CONTACT_FAIL })
        }
    }
}
          
