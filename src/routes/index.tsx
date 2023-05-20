import React, { lazy } from "react"
import { RouteNames } from "../consts/RoutesNames"
import  Chat from "../pages/Chat/Chat";
import  Login from  "./../pages/Login/Login";


export interface IRoute {
    path: string,
    element: React.ReactElement
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.HOME,
        element: <Login />,
    },
    {
        path: '*',
        element: <Login />,
    },
]
export const privateRoutes: IRoute[] = [
    {
        path: RouteNames.CHAT,
        element: <Chat />
    },
    {
        path: '*',
        element: <Chat />
    }
]  