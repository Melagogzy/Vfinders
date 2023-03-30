import React,{useState, useEffect} from "react";
import './styles.css'

import useApi from "../../Apis/useApi";
import { useMutation } from "@tanstack/react-query";



const SignUp=(props)=>{
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [isloading, setIsloading, ] = useState(false)
const [iserror, setIserror] = useState(false)
const [pageError, setPageError] = useState('')
const [userType, setUserType] = useState('')


const[color,setColor]=useState('red')

   

    const {register, loading, errorMsg } = useApi()
    const {mutate , isError, } = useMutation(register)

   

    useEffect(()=>{
        if(errorMsg){
            setIserror(true)
        }
    },[errorMsg])
    
    const HandleSignup = async (e) => {
        e.preventDefault()
        if(email === '' || password === '' || firstName === '' || lastName === '' || userType === '' ){
            setPageError('All fields are required')
            setIserror(true)
            return
        }
        const payload = {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
         userType: userType
  
      }


      console.log("payload",payload)


      mutate(payload)
    }
  
   

   

    
    return(
        <div>
          
                          
        <div  class="form  uk-margin-top" >
            {/* uk-alart-danger */}

           
            {iserror ? <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:color, width:'100%', borderRadius:5}} class="uk-margin-top uk-margin-bottom">
               
                <div style={{color:'white', textAlign:'left', padding:10}}>{errorMsg} {pageError}</div>
                <div onClick={()=>{setIserror(false)}} style={{color:'white', padding:10}}>X</div>
               
                </div> : null
                }
          
              
          <div className='uk-grid' data-uk-grid>
           <div className='uk-width-1-2'>
                  <div class="input-container ic2">
                  <input value={firstName} onChange ={(e)=>{setFirstName(e.target.value)}} id="email" class="input" type="text" placeholder=" " />
                  <div class="cut cut-short"></div>
                  <label for="lastName" class="placeholder">First Name</label>
                 </div>
           </div>
  
           <div className='uk-width-1-2'>
                      <div class="input-container ic2">
                      <input value={lastName} onChange ={(e)=>{setLastName(e.target.value)}} id="email" class="input" type="text" placeholder=" " />
                      <div class="cut cut-short"></div>
                      <label for="lastName" class="placeholder">Last  Name</label>
                  </div>
            </div>
  
        </div>
        
        <div class="input-container ic2">
          <input value={email} onChange ={(e)=>{setEmail(e.target.value)}} id="email" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">Email </label>
        </div>

        <div class="" >
            <select 
            onChange={(e)=>{setUserType(e.target.value)}}
             class="uk-margin input-container ic2" aria-label="Select" style={{borderRadius:50,padding:10, paddingRight:10 }}>
                <option value='freelancer'>Freelancer</option>
                <option value='client'>Client</option>
            </select>
        </div>
  
        <div class="input-container ic2">
          <input value={password} onChange ={(e)=>{setPassword(e.target.value)}} id="password" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="FirstName" class="placeholder">Password</label>
        </div>

      

        {/* <div className='uk-grid' data-uk-grid>
           <div className='uk-width-1-5'>
                  <div class="input-container ic2">
          <input value={iagree} onChange = {(e)=>{ setIagree(true)}} id="confirmPassword" type="checkbox" class="uk-checkbox"  placeholder=" " />
                  <div class="cut cut-short"></div>
                 </div>
           </div>
  
           <div className='uk-width-4-5'>
                      <div class="input-container ic2">
                     
                      <p className="formTerms uk-text-left">Yes, I understand and agree to the value-finders Terms of Service, 
                      including the User Agreement and Privacy Policy.</p>
                  </div>
            </div>
  
        </div> */}

        <div className="uk-margin-top">

        <button onClick={HandleSignup} type="submit" value="Submit" class="submit">{
            // isloading <div uk-spinner="ratio: 1"></div> : <span>Sign Up</span>
            isloading ? <div uk-spinner="ratio: 1"></div> : <span>Sign Up</span>
        }</button>
        </div>
      </div> 
        </div>
    )
}

export default SignUp


// export const  MONGO_URL = 'mongodb://localhost:27017/cyberteckacademy';