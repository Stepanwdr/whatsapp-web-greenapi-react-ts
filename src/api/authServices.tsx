import { AxiosPromise } from "axios";
import { axiosInstance } from ".";
import { ISettings } from "../model/ISettings";

export class authServices{
    static getAccountSettings(idInstance:number,apiTokenInstance:string):Promise<AxiosPromise<ISettings>>{
         return axiosInstance(`waInstance${idInstance}/GetSettings/${apiTokenInstance}`)
    }
}