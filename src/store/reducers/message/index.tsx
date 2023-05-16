import { MessageActionEnum, MessageState,MessageAction } from "./types"

const initialState = {
    error: '',
    isLoading: false,
    messages:[],
    messagesIds:[],
    currentConversation:[]
}
  export default function messageReducer(state = initialState, action:MessageAction):MessageState {
    switch (action.type) {
        case MessageActionEnum.SEND_MESSAGE_REQUEST:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case MessageActionEnum.SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                messagesIds:[...state.messagesIds,action.payload] 
            }
        case MessageActionEnum.SEND_MESSAGE_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}