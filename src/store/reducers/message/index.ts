import { MessageActionEnum, MessageState, MessageAction } from "./types"

const initialState = {
    error: '',
    isLoading: false,
    messages: [],
    messagesIds: [],
    currentConversation: [],
    newMessages: [] as any
}
export default function messageReducer(state = initialState, action: MessageAction): MessageState {
    switch (action.type) {
        case MessageActionEnum.SEND_MESSAGE_REQUEST:
            return {
                ...state,
                error: ''
            }
        case MessageActionEnum.SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                messagesIds: [...state.messagesIds, action.payload]
            }
        case MessageActionEnum.SEND_MESSAGE_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        case MessageActionEnum.SET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }
        case MessageActionEnum.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case MessageActionEnum.SET_NEW_MESSAGE:
            console.log(action.payload,'action.payload')
            return {
                ...state,
                messages:[...state.messages,action.payload]
            }
        default:
            return state
    }
}