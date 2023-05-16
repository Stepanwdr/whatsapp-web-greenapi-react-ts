import { IContact } from "../../../model/IContact"

export interface ContactsState {
    contacts: IContact[],
    isLoading: boolean,
    error: string | null,
    selectedContact:IContact | null
}

export enum ContactsActionEnum {
    SET_CONTACTS = 'SET_CONTACTS',
    ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST',
    ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS',
    ADD_CONTACT_FAIL = 'ADD_CONTACT_SUCCESS',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_SELECTED_CONTACT='SET_SELECTED_CONTACT'
}

export interface SetContactsAction {
    type: ContactsActionEnum.SET_CONTACTS,
    payload: IContact
}
export interface SetSelectedContactAction {
    type: ContactsActionEnum.SET_SELECTED_CONTACT,
    payload: IContact
}
export interface AddContactRequestAction {
    type: ContactsActionEnum.ADD_CONTACT_REQUEST,
}
export interface AddContactSuccessAction {
    type: ContactsActionEnum.ADD_CONTACT_SUCCESS,
}
export interface AddContactFailAction {
    type: ContactsActionEnum.ADD_CONTACT_FAIL,
    payload: string
}
export interface setIsLoadingAction {
    type: ContactsActionEnum.SET_IS_LOADING,
    payload: boolean
}
export interface setErrorAction {
    type: ContactsActionEnum.SET_ERROR,
    payload: string
}
export interface setSelectedContactAction{
    type: ContactsActionEnum.SET_SELECTED_CONTACT,
    payload: IContact
}
export type ConatctsAction =
    SetContactsAction |
    AddContactRequestAction |
    AddContactSuccessAction |
    AddContactFailAction |
    setIsLoadingAction |
    setErrorAction |
   setSelectedContactAction

