 import React,{useState} from 'react'
 import './Login.css';
 import {Link,useHistory } from 'react-router-dom';
 import { auth } from "./firebase.js";

function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn=e=>{
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                console.log(auth)
                if(auth){
                    history.push('/')
                }
            })
            .catch(error=>alert(error.message))
    }
    const register=e=>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                // it succcessfully create a new member with that email and password
                console.log(auth);
                // we are using histroy for redirect to main page
                if(auth){
                    history.push('/')
                }
            })
            .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
        <Link to="/">
        
         <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="amazon logo"/>
            </Link>
        <div className="login__container">
        <h1>Sign-in</h1>

        <form>
        <h5>E-mail</h5>
        {/* email target the value that connect two things */}
        {/* but we need to track use that he type in using setEmail e.target.value means what the user type in */}
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
         <h5>E-mail</h5>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit" onClick={signIn} className="login__signInButton">Sign in</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        
        <button onClick={register} className="login__registerButton">Create your Amazon account</button>
        </div>  
        </div>
    )
}

export default Login
