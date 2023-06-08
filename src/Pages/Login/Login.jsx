import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        console.log(data);
        
    }
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  required {...register("email")}    placeholder='Email' type='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input required {...register("password")} placeholder='Password' type='password'  className="input input-bordered" />
        </div>
      <input />
      <input  />
     
      <input type="submit" className='btn' value={'Login Now'} />
    </form> 
        </div>
    );
};

export default Login;