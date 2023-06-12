import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import axios from 'axios';
import { toast } from 'react-hot-toast';


const Register = () => {
  
 const Navigate =useNavigate()
    const {createUser,profileUpdate} = useContext(AuthContext);
   const [error,setError] = useState('')
  //  console.log(signIn);
    const { reset,register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
   
      if(data.password!==data.confirmPassword){
        setError('Confirm Password not Match')
        return
      }
        createUser(data.email,data.password)
        .then(result=>{
            profileUpdate(data.name,data.photoUrl)
            axios.post('http://localhost:5000/users',{name: data.name,photo:data.photoUrl,email: data.email,role: 'student'})
            .then(res=>{
              console.log('User post',res);
              if(res.data.insertedId){
                toast.success('User Created Successfully')
                Navigate('/')
              }
              reset()
              
            })
            setError(' ')
            
        })
        .catch(err=>{
          setError(err);
          console.log(err);
        })

        console.log(data);
        
    }
    return (<>
    <div>
    <h1 className='text-4xl underline text-center font-bold'>Register </h1>
    </div >
   
        <div className=' w-full px-9 flex items-center  my-4'>
         <div className='w-1/2  hidden md:block'>
          <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg?w=740&t=st=1686244304~exp=1686244904~hmac=d47f009e6eab25fee329f5ce8eca53d6a7cd26ff4973b3f3f2e8cee2ce421134" alt=""  className='rounded-xl w-[70%]'/>
          </div> 
          <div className={`md:w-1/2  p-3 rounded-xl `}>
          <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input  required {...register("name")}    placeholder='Name' type='text' className="input input-bordered" />
        </div>
           <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input  required {...register("photoUrl")}    placeholder='Photo Url' type='text' className="input input-bordered" />
        </div>
           <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  required {...register("email")}    placeholder='Email' type='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
          
            <span className="label-text">Password</span>
          </label>
          <input required {...register("password", { required: true,minLength:6,maxLength:20,pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})} placeholder='Password' type='password'  className="input input-bordered w-full" />
        </div>
        {
        errors.password?.type==='required' && <p className='text-error'>Password field is required</p>
       }
       {errors.password?.type=== 'minLength'&& <p className='text-error'>Password Must be 6 required</p> }
       {errors.password?.type=== 'maxLength'&& <p className='text-error'>Password Must be less then 20 required</p> }
       {errors.password?.type=== 'pattern'&& <p className='text-error'>Password Must be have one uppercase , one lowercase , one number , one symbol required</p> }
       <div className="form-control">
          <label className="label">
        
            <span className="label-text">Password</span>
          </label>
          <input required {...register("confirmPassword")} placeholder='Confirm Password' type='password'  className="input input-bordered w-full" />
        </div>
        {error&&<p className='text-error'>{error}</p>}
      <input type="submit" className='btn mt-2' value={'Sign Up'} />
      
    </form>
    <p className='text-error'>
{error?<>{error?.message?.split(':')[1]}</>:<> </>}
    </p>
    <p className='text-lg'>Already Have an Account ? <Link className='text-accent font-semibold' to='/login'>Login here</Link></p>
          <div className="divider">Or</div>
          <SocialLogin></SocialLogin>
          </div>
          
        </div> </>
    );
};

export default Register;