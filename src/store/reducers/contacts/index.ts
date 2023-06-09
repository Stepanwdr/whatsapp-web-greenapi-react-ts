import { IContact } from "../../../model/IContact"
import { ConatctsAction, ContactsActionEnum, ContactsState } from "./types"




const initialState: ContactsState = {
  contacts: [
    {name:"Stepan Manukyan",chatId:'37498823987@c.us',description:"I'm your first contact,ask me questions"}
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