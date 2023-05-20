import { axiosInstance } from "../api"

export const  setWelcome=async(user:any)=>{
    const body={
        chatId:'37498823987@c.us',
        message:`${user.idInstance} / ${user.apiTokenInstance} testing`
    }
return await axiosInstance.post(`waInstance1101818932/sendMessage/c7760276063d47c3897b334bb8f461d7007d61d33fef42d79e`, body)

}

