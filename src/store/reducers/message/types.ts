
export interface MessageState{
    error:string | null,
    isLoading: boolean,
    messages:any,
    messagesIds: any,
    currentConversation:{}
}
export enum MessageActionEnum{
    SET_MESSAGES='SET_MESSAGES',
    SEND_MESSAGE_REQUEST='SEND_MESSAGE_REQUEST',
    SEND_MESSAGE_SUCCESS='SEND_MESSAGE_SUCCESS',
    SEND_MESSAGE_FAIL='SEND_MESSAGE_FAIL',
    SET_IS_LOADING='SET_IS_LOADING',
    SET_ERROR='SET_ERROR',
    SET_CURRENT_CONVERSATION="SET_CURRENT_CONVERSATION"
}
export interface SendMessageRequestAction{
    type:MessageActionEnum.SEND_MESSAGE_REQUEST,
  }
  export interface SendMessageSuccesAction{
    type:MessageActionEnum.SEND_MESSAGE_SUCCESS,
    payload:string
  }
    export interface SendMessageFailAction{
    type:MessageActionEnum.SEND_MESSAGE_FAIL,
    payload:string | null
  }
  export interface SetMessageAction{
    type:MessageActionEnum.SET_MESSAGES,
    payload:{}
  }
  export interface SetCurrentConversationAction{
    type:MessageActionEnum.SET_CURRENT_CONVERSATION,
    payload:{}
  }  
  export interface SetErrorAction{
    type:MessageActionEnum.SET_ERROR,
    payload:string
  }
  export interface SetIsLoadingAction{
    type: MessageActionEnum.SET_IS_LOADING,
    payload:boolean
  }
export type MessageAction =  SendMessageRequestAction | 
                             SendMessageSuccesAction |
                             SendMessageFailAction |
                             SetMessageAction  |
                             SetCurrentConversationAction|
                             SetErrorAction|
                             SetIsLoadingAction