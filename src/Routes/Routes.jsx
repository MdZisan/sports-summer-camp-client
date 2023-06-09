import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Addclass from "../Dashboard/InstructorPages/AddClass/Addclass";
import MyClass from "../Dashboard/InstructorPages/AddClass/MyClass";


const Routes = createBrowserRouter([

   {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
       { path:'/',
        element:<Home></Home>
    },{
        path:'login',
        element:<Login></Login>
    },{
        path:'register',
        element:<Register></Register>
    }
    ]
   } ,{
    path:'dashboard'
    ,element:<Dashboard></Dashboard>,
    children:[
        {
            path:'addClass',
            element:<Addclass></Addclass>
        },{
            path:'myClass',
            element:<MyClass></MyClass>
        }
    ]
   }

])

export default Routes;