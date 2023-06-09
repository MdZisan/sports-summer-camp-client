import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc'

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    return (
        <div>
            <button className="btn btn-square">
        <FcGoogle className='text-3xl'></FcGoogle>
</button>
        </div>
    );
};

export default SocialLogin;