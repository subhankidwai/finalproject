import React, { useState,useRef,useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../Styles/SignUp.css";
import Emoji from './../../Images/emoji-hand.png';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {

    const check = useRef(false);
    const navigate = useNavigate();
    const [User,setUser] = useState({
        Name:"",
        Email:"",
        Pass :""
    });

    const handleChange = (event)=>{
        setUser({...User,[event.target.name]:event.target.value});
        // console.log(event.target.value);
    }

    const handleClick = ()=>{
        console.log(User);
        axios.post("https://e-commersbackend.onrender.com/auth/signUp",{
            User
        }).then((response)=>{
            console.log(response);
            toast.success('🦄 SignUp successful');
        }).catch((error)=>{
            console.log(error);
            toast.error(error.response.data.message);
        });
    }

    useEffect(()=>{
        if(!check.current){
          toast.info('Please SignUp to access profile & add items in cart', {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        check.current = true;
      },[]);
      

    const callSingIn =()=>{
        navigate('/SignIn');
    }

  return (
    <div className='SignUpContainer'>
        <div className="flexItem">
            <h3>WellCome !<img src={`${Emoji}`} height={20} alt=' '/></h3>
            <div className='form'>
                <label htmlFor="Name"><FontAwesomeIcon icon="user" /> Name</label> <br />
                <input type="text" name='Name' id='Name' value={User.Name} onChange={handleChange} placeholder='Enter Name Here'/> <br />
                <label htmlFor="Email"> <FontAwesomeIcon icon="envelope" /> Email</label><br />
                <input type="email" name='Email' id='Email' value={User.Email} onChange={handleChange}/> <br />
                <label htmlFor="Pass"> <FontAwesomeIcon icon="lock" /> Password</label><br />
                <input type="password" name='Pass' id='Pass' value={User.Pass} onChange={handleChange}/> <br />
                <input type="submit" value="SignUp" id='submit' onClick={handleClick}/>
                <div className='clickSignIn'>
                    <p>alredy have an account </p>
                    <button onClick={callSingIn}><span>Sign in</span></button>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                closeOnClick
                rtl={false}
                theme="light"
            />
        </div>
    </div>
  )
}

export default SignUp