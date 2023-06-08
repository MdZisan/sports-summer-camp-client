import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
   const {signIn} = useContext(AuthContext);
   const [error,setError] = useState('')
  //  console.log(signIn);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email,data.password)
        .then(result=>{
          console.log(result);
        })
        .catch(err=>{
          setError(err);
          console.log(err);
        })

        console.log(data);
        
    }
    return (
        <div className=' w-full px-9 flex items-center  my-4'>
         <div className='w-1/2  hidden md:block'>
          <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1686237748~exp=1686238348~hmac=71d67d391476d290d03f363db13f7fabe4df121157e6174922d7b4d9dce666e8" alt=""  className='rounded-xl w-[70%]'/>
          </div> 
          <div className='md:w-1/2'>
          <form onSubmit={handleSubmit(onSubmit)}>
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
          <input required {...register("password")} placeholder='Password' type='password'  className="input input-bordered w-full" />
        </div>
      
      <input type="submit" className='btn mt-2' value={'Login Now'} />
      
    </form>
    <p className='text-error'>
{error?<>{error?.message?.split(':')[1]}</>:<> </>}
    </p>
          </div>
        </div>
    );
};

export default Login;