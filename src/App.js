import React,{useEffect} from 'react';
import './App.css';
import Header from './Header'
import Home from './Home.js'
import Checkout from './Checkout'
import Login from './Login'
import {BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import {auth} from './firebase';
import {useStateValue} from './StateProvider'

  function App() {
    const [{user},dispatch]=useStateValue();
    // it seeems like if else statement
    useEffect(() => {
      //will only run once when the app components loads...........
      // it work in this as a listing when login or logout
     auth.onAuthStateChanged(authUser=>{
       console.log("The user is>>>>>>",authUser);
       if(authUser){
        //  the user just logged in /the user was logged in
          dispatch({
            type:'SET_USER',
            user:authUser,
          })
       }
       else{
        //  the user is logged out
        dispatch({
          type:"SET_USER",
          user:null,  
        })
       }
     })
      
    }, [])

    return (
        <Router>
        <div className = "app" > 
        <Switch>
         <Route path="/login">
         <Login/>

        </Route>
         <Route path="/checkout">
         <Header/> 
         <Checkout/>
        </Route>
        <Route path="/">
          <Header/> 
          <Home/>
        </Route>
       
        </Switch>
        </div>
        </Router>
    );
}

export default App;