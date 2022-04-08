import { useEffect, useState } from "react";
import {getAuth,GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from "../firebase.init";
const auth=getAuth(app)
const provider=new GoogleAuthProvider();

const useFirebase=()=>{
    const [user,setUser]=useState({});
   

    //google Sign In 
    const signInWithGoogle=()=>{
      signInWithPopup(auth,provider)
      .then(res=>{
          const user=res.user
          setUser(user)
          console.log(user)
      })
    }



    const handleSignOut=()=>{
        signOut(auth)
        .then(res=>{
            setUser({})
        })
    }

    useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        setUser(user)
    })
    },[])


    return {user,setUser,signInWithGoogle,handleSignOut}

}



export default useFirebase;