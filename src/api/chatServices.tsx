import { AxiosPromise, AxiosResponse } from "axios";
import { axiosInstance } from ".";
import { IMessage } from "../model/IMessage";
import Storage from "../utils/Storage";

export class chatServices {
  static async sendMessage(body: IMessage): Promise<AxiosPromise<any>> {
    const user = Storage.get('user')
    return await axiosInstance.post(`waInstance${user.idInstance}/sendMessage/${user.apiTokenInstance}`, body)
  }
  static async getOutMessages(body: IMessage): Promise<AxiosPromise<any>> {
    const user = Storage.get('user')
    return await axiosInstance.post(`waInstance${user.idInstance}/sendMessage/${user.apiTokenInstance}`, body)
  }
  static async getNotification(): Promise<AxiosPromise<any>> {
    const user = Storage.get('user')
    return await axiosInstance(`waInstance${user.idInstance}/ReceiveNotification/${user.apiTokenInstance}`)
  }
  static async deleteNotification(receiptId: number) {
    const user = Storage.get('user')
    return await axiosInstance(`waInstance${user.idInstance}/DeleteNotification/${user.apiTokenInstance}`, {
      params: receiptId
    })
  }
}