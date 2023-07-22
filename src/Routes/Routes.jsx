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
import PaymentHistory from "../Dashboard/StudentPages/PaymentHistory";
import UpdateClass from "../Dashboard/InstructorPages/UpdateClass";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";
import StudentRoutes from "./StudentRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const Routes = createBrowserRouter([

   {
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage/>,
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
    ,element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children:[
        {
            path:'addClass',
            element:<InstructorRoutes>
                <Addclass></Addclass>
            </InstructorRoutes>
        },{
            path:'myClass',
            element:<InstructorRoutes>
                <MyClass></MyClass>
            </InstructorRoutes>
        },{
            path:'updateClass/:id',
            element:<UpdateClass/>,
            loader:({params})=>fetch(`https://sports-summer-camp-server-three.vercel.app/updateClasses/${params.id}`)
        }
        
        
        ,{
            path:'selectedClasses',
            element:<StudentRoutes><SelectedClasses/></StudentRoutes>
        },{
            path:'enrolledClasses',
            element:<StudentRoutes><EnrolledClasses/></StudentRoutes>
        },{
            path:'payment',
            element:<StudentRoutes><Payment/></StudentRoutes>


        },
        {
            path:'paymentHistory',
            element:<StudentRoutes><PaymentHistory/></StudentRoutes>
        }
        ,{
            path:'manageClasses',
            element:<AdminRoutes><ManageClasses/></AdminRoutes>
        },{
            path:'manageUsers',
            element:<AdminRoutes><ManageUsers/> </AdminRoutes>
        }
    ]
   }

])

export default Routes;