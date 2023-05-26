import {BrowserRouter,Routes,Route} from "react-router-dom";
import {CreateAccount} from "./signup/CreateAccount";
import {Login} from "./login/Login";

export const Router = ()=>{
    return  <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<CreateAccount/>}/>
                <Route path={"/login"} element={<Login/>}/>
            </Routes>
        </BrowserRouter></>

}