import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../index.css';
import { Input, InputField } from '../../../Shared';
import blitheCollage from '../../../Assets/Images/Blithe-collage.jpg';
import blitheLogo from '../../../Assets/Images/Blithe-logo.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAlert } from '../../../Context/AlertContext';
import { actionSignup } from '../../../Helpers/Services/actions';

const SignUp = () =>{

    const navigate = useNavigate();
    const [showPassword , setShowPassword ] = useState(false);
    const [showConfirmPassword , setShowConfirmPassword ] = useState(false);
    
    const [sigUpData, setSignUpData] = useState(
        {   
            email:'',
            firstName:'',
            lastName:'',
            password:'',
            confirmPassword:'',  
        })
    //here err is for the validation purpose, that is yet to be implemented

    //Handle show/hide password
    const handlePassword = () =>{
        setShowPassword(!showPassword)
    }

    //Handle show/hide confirm password
    const handleConfirmPassword = () =>{
        setShowConfirmPassword(!showConfirmPassword)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        actionSignup(sigUpData)
        .then((response) => {
          if (response.data && response.status === 201) {
            localStorage.setItem("token", response.data.encodedToken);
            navigate("/login");
            setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"You have been registered successfully!"})
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
                        <img src={blitheLogo} className="blithe-logo" alt="blithe-logo" />
                        <form>
                            <p className="heading-md heading">Sign Up</p>
                            <InputField 
                                type='email'
                                title='Email'
                                name='email'
                                placeholder='Enter email'
                                value={sigUpData?.email? sigUpData.email : ''}
                                onChange={(e)=>setSignUpData(prevData => {return  {...prevData, email:e.target.value}})}
                            />
                            <InputField 
                                type='text'
                                title='FirstName'
                                name='firstName'
                                placeholder='Enter firstname'
                                value={sigUpData?.firstName? sigUpData.firstName : ''}
                                onChange={(e)=>setSignUpData(prevData => {return  {...prevData, firstName:e.target.value}})}
                            />
                            <InputField 
                                type='text'
                                title='LastName'
                                name='lastName'
                                placeholder='Enter lastname'
                                value={sigUpData?.lastName? sigUpData.lastName : ''}
                                onChange={(e)=>setSignUpData(prevData => {return  {...prevData, lastName:e.target.value}})}
                            />
                            <InputField 
                                type={showPassword?'text':'password'}
                                title='Password'
                                name='password'
                                placeholder='Enter password'
                                showPassword={showPassword}
                                handlePassword = {handlePassword}
                                value={sigUpData?.password? sigUpData.password : ''}
                                onChange={(e)=>setSignUpData(prevData => {return  {...prevData, password:e.target.value}})}
                            />
                              <InputField 
                                type={showConfirmPassword?'text':'password'}
                                title='Confirm Password'
                                name='confirmPassword'
                                placeholder='Enter confirm password'
                                showPassword={showConfirmPassword}
                                handleConfirmPassword = {handleConfirmPassword}
                                value={sigUpData?.confirmPassword? sigUpData.confirmPassword : ''}
                                onChange={(e)=>setSignUpData(prevData => {return  {...prevData, confirmPassword:e.target.value}})}
                            />
                            <button className="btn btn-sm btn-primary" type="submit" onClick={handleSubmit}>Sign Up</button>
                            <div className="inputBx">
                                {/* <p className="text-md">Do have an account?<a className="btn text-decoration-none btn-sm btn-link"
                                        href="../Login/Login.html">Sign In</a></p> */}
                                <p className="text-md">Do have an account?
                                    <Link to='/login' className="btn text-decoration-none btn-sm btn-link"
                                        >Sign In</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;