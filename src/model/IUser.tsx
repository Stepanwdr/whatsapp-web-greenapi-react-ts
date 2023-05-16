import { ISettings } from "./ISettings"

export interface IUser{
    idInstance:number | null,
    apiTokenInstance:string | null
    settings:ISettings
}