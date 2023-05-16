import { IContact } from "../../../model/IContact"
import { ConatctsAction, ContactsActionEnum, ContactsState } from "./types"




const initialState: ContactsState = {
  contacts: [
    {name:"Stepan Manukyan",phone:'37498823987@s.us'}
  ] as IContact[],
  isLoading: false,
  error: '',
  selectedContact:{} as IContact
}



const contactsReducer = (state = initialState, action: ConatctsAction): ContactsState => {
  switch (action.type) {
    case ContactsActionEnum.SET_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case ContactsActionEnum.ADD_CONTACT_REQUEST:
      return {
        ...state,
        error: '',
        isLoading: true
      }
    case ContactsActionEnum.ADD_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
       case ContactsActionEnum.SET_SELECTED_CONTACT:
      return {
        ...state,
        selectedContact:action.payload,
      }
    default:
      return state
  }
}
export default contactsReducer