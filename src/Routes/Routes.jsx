import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Addclass from "../Dashboard/InstructorPages/AddClass/Addclass";
import MyClass from "../Dashboard/InstructorPages/AddClass/MyClass";
import SelectedClasses from "../Dashboard/StudentPages/SelectedClasses";
import EnrolledClasses from "../Dashboard/StudentPages/EnrolledClasses";
import ManageClasses from "../Dashboard/AdminPages/ManageClasses";
import ManageUsers from "../Dashboard/AdminPages/ManageUsers";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Payment from "../Dashboard/StudentPages/Payment";


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
    },{
        path:'instructors',
        element:<Instructors/>
    },{
        path:'classes',
        element:<Classes/>
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
        },{
            path:'selectedClasses',
            element:<SelectedClasses/>
        },{
            path:'enrolledClasses',
            element:<EnrolledClasses/>
        },{
            path:'payment',
            element:<Payment/>


        },{
            path:'manageClasses',
            element:<ManageClasses/>
        },{
            path:'manageUsers',
            element:<ManageUsers/>
        }
    ]
   }

])

export default Routes;