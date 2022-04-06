import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../index.css';
import { Input, InputField } from '../../../Shared';
import blitheCollage from '../../../Assets/Images/Blithe-collage.jpg';
import blitheLogo from '../../../Assets/Images/Blithe-logo.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { actionLogin } from '../../../Helpers/Services/actions';
import { v4 as uuid } from "uuid";
// import { useAlert } from '../../../Context/AlertContext';
import { useAuthContext, useAlert } from '../../../Context';


const Login = () =>{

    const navigate = useNavigate();
    const {alertContent , setAlertContent} = useAlert();
    const [showPassword , setShowPassword ] = useState(false);
    const [loginData, setLoginData] = useState(
        {   
            email:'',
            password:''  
        })
    const { effectTrigger, setEffectTrigger} = useAuthContext();

    //Handle show/hide password
    const handlePassword = () =>{
        setShowPassword(!showPassword)
    }


    const handleLogin = async (e) =>{
        e.preventDefault();

        actionLogin(loginData)
        .then((response) => {
          if (response.data && response.status === 200) {
             navigate("/");
             setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"You have been loggen in successfully!"})
             setEffectTrigger(!effectTrigger);
          } else{
            setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Login Failed"})
          }
        })
        .catch((response) => {
          if (response.data && response.data.error) {
            setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Login Failed"})
          }
        })
    }


    return(
        <>
            <section className="auth">
            <div className="col-7 auth-img-container">
                    <img src={blitheCollage}
                        alt="auth-img" />
                </div> 
                <div className="col-7 auth-content-container">
                    <div className="auth-form">
                        <img src={blitheLogo} className="blithe-logo" alt="blithe-logo"/>
                        <form>
                            <p className="heading-md heading">Login</p>
                            <InputField 
                                type='email'
                                title='Email'
                                name='email'
                                placeholder='Enter email'
                                value={loginData?.email? loginData.email : ''}
                                onChange={(e)=>setLoginData(prevData => {return  {...prevData, email:e.target.value}})}
                            />
                             <InputField 
                                type={showPassword?'text':'password'}
                                title='Password'
                                name='password'
                                placeholder='Enter password'
                                showPassword={showPassword}
                                handlePassword = {handlePassword}
                                value={loginData?.password? loginData.password : ''}
                                onChange={(e)=>setLoginData(prevData => {return  {...prevData, password:e.target.value}})}
                            />

                            <div className="remember">
                                <label>
                                    <Input id='rememberUser' type="checkbox" name ='remember' checked={true}/>
                                    Remember me!
                                </label>
                                <br/>
                                <Link  to="/forgot-password" className="btn-link-forgot-password" target="_blank">Forgot Password ??</Link>
                            </div>
                            <button className="btn btn-sm btn-primary" type="submit" onClick={(e)=>handleLogin(e)}>Sign In</button>
                            <div className="inputBx">
                                <p className="text-md">Don't have an account?
                                    <Link  to="/signup" className="btn text-decoration-none btn-sm btn-link">Sign Up</Link>
                                </p>
                            </div>
                        </form> 
                        <div className="sm-container">
                            <p className="text-lg">Login with social media:</p>
                            <div className="flex-content">
                                <img src="https://img.icons8.com/color/48/000000/facebook-circled--v1.png" className="icon-btn-img"
                                    alt="icon-btn-img" />
                                <img src="https://img.icons8.com/nolan/48/instagram-new.png" className="icon-btn-img"
                                    alt="icon-btn-img" />
                                <img src="https://img.icons8.com/fluency/48/000000/twitter.png" className="icon-btn-img"
                                    alt="icon-btn-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;