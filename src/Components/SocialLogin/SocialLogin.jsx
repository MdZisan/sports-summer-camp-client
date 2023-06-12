import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const Navigate = useNavigate()
    const {googleSignIn} = useContext(AuthContext)
    const handleGoogleLogin =()=>{
        googleSignIn()
        .then(result=>{
            const loggedUSer = result.user;
            Navigate(from, { replace: true })
            console.log(loggedUSer);
            axios.post('https://summersportcamp-production.up.railway.app/users',{name: loggedUSer.displayName,email: loggedUSer.email,photo: loggedUSer.photoURL,role:'student'})
            .then(res=>{
              console.log('User google post',res);
              if(res.data.insertedId ){
                toast.success('LOGIN SUCCESSFULL')
               
              } 
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div>
            <button className="btn btn-square" onClick={handleGoogleLogin}>
        <FcGoogle className='text-3xl'></FcGoogle>
</button>
        </div>
    );
};

export default SocialLogin;