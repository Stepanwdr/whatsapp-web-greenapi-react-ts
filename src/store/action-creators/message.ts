import { Dispatch } from "redux";
import { MessageAction, MessageActionEnum, SetMessageAction, SetErrorAction, SetIsLoadingAction } from "../reducers/message/types";
import { chatServices } from "../../api/chatServices";

export const setMessages = (payload: any): SetMessageAction => ({ type: MessageActionEnum.SET_MESSAGES, payload })
export const setError = (payload: string): SetErrorAction => ({ type: MessageActionEnum.SET_ERROR, payload })
export const setIsLoading = (payload: boolean): SetIsLoadingAction => ({ type: MessageActionEnum.SET_IS_LOADING, payload })
export const fetchChatHistory = (chatId: string) => {
  return async (dispatch: Dispatch<MessageAction>) => {
    try {
      dispatch(setIsLoading(true))
      dispatch(setMessages([]))
      const res = await chatServices.getChatHistory({ chatId })
      dispatch(setMessages(res.data))
      dispatch(setIsLoading(false))
    } catch (e: any) {
      setError(e.message)
    }
  }
}
export const fetchSendMessage = (chatId: string, message: string) => {
  console.log(chatId)
  return async (dispatch: Dispatch<MessageAction>) => {
    try {
      dispatch({ type: MessageActionEnum.SEND_MESSAGE_REQUEST })
      const res = await chatServices.sendMessage({ chatId, message })
      dispatch({ type: MessageActionEnum.SEND_MESSAGE_SUCCESS, payload: res.data.idMessage })
    } catch (e: any) {
      dispatch({ type: MessageActionEnum.SEND_MESSAGE_FAIL, payload: e.message })
    }
  }
}
export const fetchGetNotification = () => {
  return async (dispatch: Dispatch<MessageAction>) => {
    try {
      dispatch(setIsLoading(true))
      const res = await chatServices.getNotification()
      if (res.data != null) {
        dispatch(setMessages(res.data))
      }
    } catch (e: any) {
      setError(e.message)
    }
  }
}
