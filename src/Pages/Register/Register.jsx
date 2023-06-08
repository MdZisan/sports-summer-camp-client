import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const {createUser,profileUpdate} = useContext(AuthContext);
   const [error,setError] = useState('')
  //  console.log(signIn);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email,data.password)
        .then(result=>{
            profileUpdate(data.name,data.photoUrl)
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
            {/* TODO: SHOW BUTTON ADD */}
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
      
      <input type="submit" className='btn mt-2' value={'Sign Up'} />
      
    </form>
    <p className='text-error'>
{error?<>{error?.message?.split(':')[1]}</>:<> </>}
    </p>
    <p className='text-lg'>Already Have an Account ? <Link className='text-accent font-semibold' to='/login'>Login here</Link></p>
          </div>
        </div>
    );
};

export default Register;