import React, {useState} from "react";
import plumber from '../../../images/plumber.png'
import axios from '../../../lib/config'

 const First_Pane = () => {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [suggestion, setSuggestion] = useState('')
    const [isloading, setIsloading] = useState(false)
    const [iserror, setIserror] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [disabled, setDisabled] = useState(false)

    const validation =()=>{
        
    }


    const HandleSubmit = async (e) => {
        setDisabled(true)
        e.preventDefault()
        const payload = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            suggestion: suggestion

        }
       
        
        setIsloading(true)

        

      try{

        await axios.post('/users/suggestion', payload).then((res) => {
            console.log(res)
            setDisabled(false)
            setIsloading(false)
            if(res.data.msg == 'User already exist in our waitlist'){
                setDisabled(false)
                setErrorMsg('User with email address already exist in our waitlist, thank you for trying again')
                setIserror(true)
                return 
            }
            
           
            if (res.data.msg === 'Suggestion sent') {
                setIsSuccess(true)
               return
            }
        })

      }catch(error){
        setDisabled(false)
        setErrorMsg('There is a network error please try again')
        setIserror(true)
      }


    }

    return(
        //Desktop views
        <div className="">

             <div className="indexBg">
                 <div className="uk-container">          
                 <div className="row" >
                     <div className="col-md-6 col-lg-6 col-xs-6" >
                         <div className="uk-margin-xlarge-top">
                       <img src= {plumber}  className="sliderImg"/>
                       </div>
                     </div>

                     <div className="col-md-6 col-lg-6 col-xs-6">
                        {
                            isSuccess ? (
                            <>
                            <h1 className="uk-margin-large-top indexTopPad light">
                         You are now officially on our waitlist --- Stay tuned!
                        </h1>

                        <p className=" light" style={{fontWeight:'bold'}}>
                       We would reach out to you as soon as we are ready to launch with your suggestions and feedback in mind.
                        </p>
                        <h1>Thank you!</h1>
                            
                            </>
                                ) 
                                : 
                                (
                                    <>
                                     <h1 className="uk-margin-large-top indexTopPad light">
                          Join our waitlist 
                        </h1>
                        <div className="light" style={{fontWeight:'bold'}}>Find the best freelance services to meet your needs.</div>
                        {/* we want to build a product with you at heart join our waitlist  */}
                        <p className=" light">
                        We want to build a product with you at heart. <br></br>Join our waitlist to be the first to know when we launch.
                        </p>
                        <div className="row uk-margin-top" style={{display:"flex", justifyContent:'center'}}>
                            {/* if isError */}
                            {
                                iserror ? (
                                    <div className="uk-alert-danger" uk-alert="true">
                                        <a onClick={()=>{
                                        setErrorMsg('')
                                        setIserror(false)
                                        }} className="uk-alert-close" uk-close="true"></a>
                                        <p>{errorMsg}</p>

                                    </div>
                                ) : null
                            }
                           
                            <div className="col-md-6" >
                            <div className="input-group mb-3" style={{ marginRight:10}}> 
                                    <input value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}  type="text" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon2"/>
                            </div>
                             </div>
                             <div className="col-md-6">
                            <div className="input-group mb-3">
                                    <input value={lastName} onChange={(e)=>{setLastName(e.target.value)}} type="text" className="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon2"/>
                            </div>
                             </div>

                             <div className="col-md-12">
                            <div className="input-group mb-3">
                                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2"/>
                            </div>
                             </div>

                             <div className="col-md-12">
                            <div className="input-group mb-3">
                                {/* text area */}
                                <textarea value={suggestion} onChange={(e)=>{setSuggestion(e.target.value)}} placeholder="We would love to hear from you, please share your thoughts and suggestions with us to help us build a better experience for you " class="form-control" id="exampleFormControlTextarea3" rows="4">
                                    
                                </textarea>

                                 
                            </div>
                             </div>

                             <div className="col-md-12">
                            <div className="input-group mb-3">
                                   {/* submit botton */}
                                    <botton disabled={disabled} onClick={HandleSubmit} type="submit" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon2">
                                        {
                                            disabled ? ("Please wait ..."):("submit")
                                        }
                                        </botton>
                            </div>
                             </div>
                        </div>
                                    </>
                                )
                        }

                       
                     </div>
                 </div>
                 </div>


             </div>

           
              <div className="indexBg uk-hidden@s">
                 <div className="uk-container">          
                 <div className="uk-grid " data-uk-grid>
                  

                     <div className="uk-width-3-5@s">
                       <div className="uk-margin-xlarge-top indexTopPad">
                           <h1 className="uk-text-bold  uk-text-left light">Find the best <span className="italic">freelance </span>
                           services to meet your needs</h1>

                           <div className="">
                                 <form className=" uk-padding-small">
                                 <div class="wrap">
                                <div class="import react fro">
                                    <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                                    <button type="submit" class="searchButton">
                                    <span uk-icon="icon: search"></span>
                                    </button>
                                </div>
                                </div>
                                 </form> 
                           </div>
    
                       </div>
                     </div>



                     <div className="uk-width-2-5@s">
                         <div className="uk-margin-xlarge-top">
                       <img src= {plumber}  className="sliderImg"/>
                       </div>
                     </div>
                 </div>
                 </div>


             </div> 
















        </div>
    )
    }


export default First_Pane