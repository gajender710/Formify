import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { BrowserRouter, Navigate, useNavigate  } from 'react-router-dom';
import GlobalLayout from '../componentts/GlobalLayout'
import HeadingBanner from '../componentts/HeadingBanner'
import { auth } from '../firebase-config';
const LoginRegisterScreen = (props) => {

    
    const[registerEmail,setRegisterEmail] = useState("test@gmail.com");
    const[registerPass,setRegisterPass] = useState("test123");

    const[loginEmail,setLoginEmail] = useState("");
    const[loginPass,setLoginPass] = useState("");
    const[user,setUser]  = useState({});
    const[error,setError] = useState(false);
    let navigate = useNavigate();

    // onAuthStateChanged(auth , (currentuser)=>{
    //     setUser(currentuser);
    // })
    const register =async ()=>{
        try{ const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPass);
        }
        catch(error){
            console.log(error);
        }
    }

    const login =async ()=>{
        try{ const user = await signInWithEmailAndPassword(auth,loginEmail,loginPass);
             navigate("/DashboardScreen" , {state:{ login : true}})
        }
        catch(error){
            setError(true);
            //console.log(error);
        }
    }

    const logOut = async ()=>{
       try{ await signOut(auth);}
       catch(error){
        
        console.log(error);
        }
    }


  return (
    <GlobalLayout heading ="Home">
    <HeadingBanner text={"Login"} headerNav = {"Home"} to={"/"}/> 
    <div className='LoginRegisterBox'>
            
            
            <div>
                <p className='inputLabel'>Enter Email</p>
                <input className="input" placeholder="Type 'test@gmail.com' " onChange={(event)=>{setLoginEmail(event.target.value)}}/>
                <p className='inputLabel'>Enter Password</p>
                <input className="input" placeholder="Type 'test123' " onChange={(event)=>{setLoginPass(event.target.value)}}/>
                
            </div>
            {!error? null :<label>Email or Password is invalid</label>}
            <button className='loginButton' onClick={login} >Login</button>
            

    </div>
        
    </GlobalLayout>
  )
}

export default LoginRegisterScreen