import { AxiosPromise } from "axios";
import { axiosInstance } from ".";

export class authServices{
    static async authCheck(idInstance:number,apiTokenInstance:string):Promise<AxiosPromise<any>>{
        return await axiosInstance<any>(`waInstance${idInstance}/getStateInstance/${apiTokenInstance}`)
    }
}