import { AxiosPromise, AxiosResponse } from "axios";
import { axiosInstance } from ".";
import Storage from "../utils/Storage";

export class chatServices {
  static async sendMessage(body: any): Promise<AxiosPromise<any>> {
    const user = Storage.get('user')
    return await axiosInstance.post(`waInstance${user.idInstance}/sendMessage/${user.apiTokenInstance}`, body)
  }

  static async getIncomingMessages(body: any): Promise<AxiosPromise<any>> {
    const user = Storage.get('user')
    return await axiosInstance.post(`waInstance${user.idInstance}/lastIncomingMessages/${user.apiTokenInstance}`, body)
  }

  static async getChatHistory(body:any) {
    const user = Storage.get('user')
    return await axiosInstance.post(`waInstance${user.idInstance}/GetChatHistory/${user.apiTokenInstance}`, body)
  }
  static async getContactInfo(body:any):Promise<AxiosPromise<any>> {
    const user = Storage.get('user')
    return await axiosInstance.post(`waInstance${user.idInstance}/getContactInfo/${user.apiTokenInstance}`, body)
  }

  static async getNotification(): Promise<AxiosPromise<any>> {
    const user = Storage.get('user')
    return await axiosInstance(`waInstance${user.idInstance}/ReceiveNotification/${user.apiTokenInstance}`)
  }
  static async deleteNotification(receiptId: number):Promise<AxiosPromise<any>> {
    const user = Storage.get('user')
    return await axiosInstance.delete(`waInstance${user.idInstance}/DeleteNotification/${user.apiTokenInstance}/${receiptId}`)
  }
  
}