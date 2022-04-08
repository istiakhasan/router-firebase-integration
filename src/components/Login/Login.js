import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle}=useFirebase();
    return (
        <div>
            <h3>Please Log in</h3>
            <div style={{"margin":"20px"}}>

            <button onClick={signInWithGoogle}>Sign In Using Google</button>
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