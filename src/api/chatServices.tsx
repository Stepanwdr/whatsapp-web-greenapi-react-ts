import { AxiosPromise, AxiosResponse } from "axios";
import { axiosInstance } from ".";
import { IMessage } from "../model/IMessage";
import Storage from "../utils/Storage";
import { IUser } from "../model/IUser";

export class chatServices {
  static async sendMessage(body: any): Promise<AxiosPromise<any>> {
    const user = Storage.get('user')
    return await axiosInstance.post(`waInstance${user.idInstance}/sendMessage/${user.apiTokenInstance}`, body)
  }
  static async getChatHistory(body:any) {
    const user = Storage.get('user')
    return await axiosInstance.post(`waInstance${user.idInstance}/GetChatHistory/${user.apiTokenInstance}`, body)
  }
  static async getContactInfo(body:any):Promise<AxiosPromise<any>> {
    const user = Storage.get('user')
    return await axiosInstance.post(`waInstance${user.idInstance}/getContactInfo/${user.apiTokenInstance}`, body)
  }
}