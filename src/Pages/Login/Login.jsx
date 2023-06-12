import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [show,setShow]=useState(true);
 const Navigate = useNavigate()
   const {signIn,user} = useContext(AuthContext);
   const [error,setError] = useState('')
  //  console.log(signIn);
    const {reset, register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email,data.password)
        .then(result=>{
          console.log(result);
          Navigate(from, { replace: true })
         
        })
        .catch(err=>{
          setError(err);
          console.log(err);
          reset();
        })

        console.log(data);
        
    }
    return (<>
    <div> 
      <h1 className='text-4xl underline text-center font-bold'>LOG IN </h1>
    </div>
        <div className=' w-full px-9 flex items-center  my-4'>
         <div className='w-1/2  hidden md:block'>
          <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg?w=740&t=st=1686244304~exp=1686244904~hmac=d47f009e6eab25fee329f5ce8eca53d6a7cd26ff4973b3f3f2e8cee2ce421134" alt=""  className='rounded-xl w-[70%]'/>
          </div> 
          <div className='md:w-1/2'>
            <div className='relative'>
          <form  onSubmit={handleSubmit(onSubmit)}>
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
          <input required {...register("password")} placeholder='Password' type={`${show?'password' : 'text'}`}  className="input input-bordered w-full" />
        </div>
      
      <input type="submit" className='btn mt-2' value={'Login Now'} />
      
    </form>
    <p className={`absolute ${show?'btn-success':'btn-error'} text-white btn-primary bottom-16 btn-sm right-5 btn`}><button onClick={()=>setShow(!show)}>{show?'show':'hide'}</button></p>
    </div>
    <p className='text-error'>
{error?<>{error?.message?.split(':')[1]}</>:<> </>}
    </p>
    <p className='text-lg'>New here ? <Link className='text-accent font-semibold' to='/register'>Register</Link></p>
    <div className="divider">OR</div>
    <SocialLogin></SocialLogin>
          </div>
        </div></>
    );
};

export default Login;