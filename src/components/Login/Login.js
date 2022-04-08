import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const auth=getAuth(app)
const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // const {signInWithGoogle}=useFirebase();
    const [signInWithGoogle,user]=useSignInWithGoogle(auth)
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
       .then(()=>{
           navigate(from,{replace:true})
           
       })
    }

    return (
        <div>
            <h3>Please Log in</h3>
            <div style={{"margin":"20px"}}>

            <button onClick={handleGoogleSignIn}>Sign In Using Google</button>
            {/* <button onClick={signInWithGoogle}>Sign In Using Google</button> */}
            </div>

            <form action="">
              
                <input type="email" placeholder='Enter your email..' /><br />
                <input type="password" placeholder='Enter your password..' /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;