import react from 'react'
import Sidebar_Menu from '../../Components/Sidebar_Menu/Sidebar_Menu'
import Layout from '../../Layout/Layout'
import {  Link } from 'react-router-dom'



const Wallet = () =>{
    return(
        <Layout>
       <div className='uk-margin-xlarge-top'>
        <div className='uk-container'>
            <div className='row'>
                <div className='col-sm-4'>
                  <Sidebar_Menu />
                </div>


                <div className='col-sm-8'>
                  <h4 className='uk-text-left uk-text-bold'>Fund Account</h4>

                  <div className='box-shadow uk-margin-medium-top'>
                     <div className='uk-flex uk-padding'>
                        <div className=''>
                            <h5 className='uk-text-bold uk-text-left '>Billing methods</h5>
                        </div>
                        
                        <div className='uk-margin-left'>
                            <Link to="/#" className='button' style={{backgroundColor:'#9CCF31'}}>Add a new billing method</Link>
                        </div>

                    </div>

                    <div className='uk-margin-remove-top uk-padding'>
                        <p className='uk-text-bold uk-text-left '>You have not set up any billing methods yet.</p>
                        <p className='uk-text-left uk-text-small uk-margin-top'>Your billing method will be charged only when your available balance from your earnings is not 
                            sufficient to pay for monthly membership and/or connects</p>
                    </div>

                    


                  </div>
                </div>
            </div>
        </div>
       </div>
       </Layout>
    )
}


export default Wallet