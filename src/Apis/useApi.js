


import React,{useState} from 'react'
import {setUser} from "../State/user"

import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import { setTrxdata } from '../State/trxdata';
import { useNavigate } from "react-router-dom";




const useApi = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.value);
    //const meterdata = useSelector(state => state.meterdata.value);
    //const cart = useSelector(state => state.cart.value);
    const [orderStatus, setOrderStatus] = useState();
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState()
    const [visible, setVisible] = useState(false)
    const [done, setDone] = useState(false)
    const[auth_url, setAuth_url] = useState()

   
    


   const Api = axios.create({
        
 // baseURL: "https://borrowliteapp.herokuapp.com/",
       baseURL: "http://localhost:5000/",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",

        }
    })

   

   
  

    

   

    const login =(payload)=>{
        setLoading(true)

        //email and password validation 
        if(!payload.email || !payload.password){
            setLoading(false)
            return setErrorMsg("Please enter all fields")
        }


       Api.post("users/login", payload).then((res)=>{
        if(res.data.msg === "Login successful"){
            setLoading(false)
            dispatch(setUser(res.data.data));
            if(res.data.data.userType === 'freelancer'){
                
             navigate('/Freelancer_dashboard')    
            }else{
                if(res.data.data.userType === 'client'){
                    navigate('/Client_dashboard')
                }
            }
              
        }else{
            setLoading(false)
            setErrorMsg(res.data.msg)
            //alert(res.data.msg)
        }
       }).catch((error)=>{
        setLoading(false)
        alert("Network error please check your internet connection and try again")
       })
    }



    const register =(payload)=>{

        console.log("here", payload)
        setLoading(true)
        Api.post("users/signup", payload).then((res)=>{
            console.log("res",res)
            if(res.data.msg === "Signup successful"){
                setLoading(false)
                // save to local storage
              navigate("/Signin")
              }else{
                setLoading(false)
                setErrorMsg(res.data.msg)
               // alert(res.data.msg)
              }
        }).catch((error)=>{
            setLoading(false)
            setErrorMsg("Network error please check your internet connection and try again")
          
           }) 
    }


   

    // reset password
    const sendOtp = (payload)=>{
        setLoading(true)
        Api.post("users/sendOtp", payload).then((res)=>{
            setLoading(false)
            console.log("res",res.data.msg)
            if(res.data.msg === "Otp sent successfully"){
           navigate("VerifyOtp")
            }else{
                alert(res.data.msg)
            }
        })

    }

    // verify otp
    const verifyOtp = (payload)=>{
        setLoading(true)
        Api.post("users/verifyOtp", payload).then((res)=>{
            setLoading(false)
            console.log("res",res.data.msg)
            if(res.data.msg === "Otp verified successfully"){
            navigate("ChangePassword", {otp: payload.otp})
            }else{
                alert(res.data.msg)
            }
        })

    }

    const resetPassword = (payload)=>{
        setLoading(true)
        Api.post("users/resetPassword", payload).then((res)=>{
            setLoading(false)
            console.log("res",res.data.msg)
            if(res.data.msg === "Password reset successfully"){
                alert(res.data.msg)
             navigate("Login")
            }else{
                alert(res.data.msg)
            }
        })

    }

    
    return {
      orderStatus,
      login,
      register,
      loading,
      sendOtp,
      verifyOtp,
      resetPassword,
      errorMsg,
    }
}

export default useApi;

