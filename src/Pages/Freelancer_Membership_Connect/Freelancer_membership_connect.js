import react from 'react'
import Layout from '../../Layout/Layout'
import './styles.css'
import { Link } from 'react-router-dom'
import Sidebar_Menu from '../../Components/Sidebar_Menu/Sidebar_Menu'

const Freelancer_membership_connect = () => {
    return(
        <Layout >
        <div className='uk-margin-xlarge-top'>

            <div className='uk-container'>

              <div className='row'>
                

                {/***Side Bar***/}
                <div className='col-sm-4'>

               <Sidebar_Menu />
                </div>


                   {/***Main Content ***/}
                   <div className='col-sm-8'>

                   <div >
                    <h4 className='uk-text-bold uk-text-left'>Membership & Connect</h4>
                </div>
                    
                    <div className='box-shadow uk-padding uk-margin-large-bottom'>
                        <div style={{borderBottom:'2px solid #e7e9e9', padding:'10px', marginBottom:'0px'}}>
                            <h4 className='uk-text-left uk-text-bold'>Summary</h4>
                        </div>

                          <div>
                          <h6 className='uk-text-left  uk-margin-top'>Available Connect</h6>
                          <p className='uk-text-left ' style={{marginTop:'-10px'}}>120</p>
                          </div>

                          <div>
                          <h6 className='uk-text-left  uk-margin-top'>Connects expiring within 30days</h6>
                          <p className='uk-text-left ' style={{marginTop:'-10px'}}>20</p>
                          </div>

                          <div style={{borderBottom:'2px solid #e7e9e9', padding:'0px', marginBottom:'0px'}}>
                          <h6 className='uk-text-left  uk-margin-top'>Put your expiring connect to good use<Link to="/">
                            <span className='uk-margin-left uk-text-small'>Find work</span></Link></h6>
                         
                          </div>

                          <div className='uk-text-left uk-margin-medium-top'>
                            <div className='uk-flex'>
                                
                           <div> <Link to="/" className='button' style={{backgroundColor:'#9CCF31'}}>Buy Connects</Link></div>
                           
                           <div> <Link to="/" className='button_ghost uk-margin-left' >View connect history</Link></div>

                            </div>
                          </div>

                    </div>
                </div>



            </div>


            </div>
        </div>
        </Layout>
    )
}


export default Freelancer_membership_connect