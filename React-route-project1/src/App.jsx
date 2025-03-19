import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { MainLoader } from "./layout/main";
import { Home, LoaderFunction } from "./pages/Home";
import Error from "./Error/error";
import LogOut from "./logOut/logout";
import LoadAction from './Actions/logOutAction'
import Introaction from "./Actions/introaction";
const App=()=>{
const router=createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<Error />,
        loader:MainLoader,
        children:[
            {
                index:true,
                element:<Home />,
                action:Introaction,
                loader:LoaderFunction
            },
            {
                path:'/logout',
                element:<LogOut />,
                action:LoadAction
            }
        ]
    }
])
return (
    <>
        <RouterProvider router={router} />
       
    </>

)
}
export default App;
