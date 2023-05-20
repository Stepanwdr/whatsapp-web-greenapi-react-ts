import { Routes, Route } from "react-router-dom"
import { Login } from "@mui/icons-material"
import Chat from "../pages/Chat/Chat"
import { privateRoutes, publicRoutes } from "../routes"
import { useTypedSelector } from "../hooks/useTypedSelector"

const Routing = () => {
    const {isAuth}=useTypedSelector(state=>state.auth)
    return (
        <Routes>
            {
                isAuth
                    ?
                     privateRoutes.map(({ path, element }) => (
                            <Route path={path} element={element} />
                    ))
                    :
            
                      publicRoutes.map(({ path, element }) => (
                         <Route path={path} element={element} />
                                       
                    ))
            }
        </Routes>
    )
}
export default Routing