import React,{useState} from "react";
import './styles.css'

import { useSignupMutation } from "../../Features/api/apiSlice";
import axios from '../../lib/config'




const SignUp=(props)=>{
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [isloading, setIsloading, ] = useState(false)
const [iserror, setIserror] = useState(false)
const [isSuccess, setIsSuccess] = useState(false)
const[errorMsg,setErrorMsg]=useState('')
const[color,setColor]=useState('red')

    // const [signup, {isLoading, isError, isSuccess, data, error}] = useSignupMutation()

    
    const HandleSignup = async (e) => {
        e.preventDefault()
        if(email === '' || password === '' || firstName === '' || lastName === ''){
            setErrorMsg('All fields are required')
            setIserror(true)
            return
        }
        const payload = {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName
  
      }


        setIsloading(true)
        await axios.post('/users/signup', payload).then((res) => {
            setIsloading(false)
            setIsSuccess(true)
            console.log(res)
            if(res.data.msg === 'User already exist'){
              setColor('red')
              setErrorMsg(res.data.msg)
                setIserror(true)
            }
            if(res.data.msg === 'Signup successful'){
              setColor('green')
              setErrorMsg(res.data.msg, 'welocme to the team')
              setIserror(true)
            }
        }).catch((err) => {
            setIserror(true)
            setIsloading(false)
            console.log(err)
        })
    }
  
   

   

    
    return(
        <div>
          
                          
        <div  class="form  uk-margin-top" >
            {/* uk-alart-danger */}

           
            {iserror ? <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:color, width:'100%', borderRadius:5}} class="uk-margin-top uk-margin-bottom">
               
                <div style={{color:'white', textAlign:'left', padding:10}}>{errorMsg}</div>
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
  
        <div class="input-container ic2">
          <input value={password} onChange ={(e)=>{setPassword(e.target.value)}} id="password" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="FirstName" class="placeholder">Password</label>
        </div>

      

        <div className='uk-grid' data-uk-grid>
           <div className='uk-width-1-5'>
                  <div class="input-container ic2">
          <input id="confirmPassword" type="checkbox" class="uk-checkbox"  placeholder=" " />
                  <div class="cut cut-short"></div>
                 </div>
           </div>
  
           <div className='uk-width-4-5'>
                      <div class="input-container ic2">
                     
                      <p className="formTerms uk-text-left">Yes, I understand and agree to the value-finders Terms of Service, 
                      including the User Agreement and Privacy Policy.</p>
                  </div>
            </div>
  
        </div>

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