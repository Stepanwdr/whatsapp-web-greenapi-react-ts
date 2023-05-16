import React, { lazy } from "react"
import { RouteNames } from "../consts/RoutesNames"

const Chat = lazy(() => import("../pages/Chat/Chat"));
const Login = lazy(() => import("./../pages/Login/Login"));


export interface IRoute{
path:string,
element:React.ReactElement
}

export const publicRoutes:IRoute[]=[
    {
        path:RouteNames.HOME,
        element:<Login/>,
    }
]
export const privateRoutes:IRoute[]=[
    {
        path:RouteNames.CHAT,
        element:<Chat/>,
       
}]  