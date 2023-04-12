import react from 'react'
import Search_filter from '../../Components/Search-filter/Search_filter';
import Layout from '../../Layout/Layout';
import { Link } from 'react-router-dom';
import './styles.css'

// import free_img from './../../images/Freelancer.png'
import Job_post from '../Freelance_dashboard/Blocks/Job_post';
import Client_job_post from './Blocks/Client_job_post';
import Bio from './Blocks/Bio';
import P1 from '../../images/p1.JPG'
import P2 from '../../images/p2.JPG'
import job_post from '../../images/job_post.JPG'


const Client_dashboard = ( ) => {

          return(
            <Layout>
                 <div className='Mediumcontainer uk-margin-xlarge-top'>
                     <div className='uk-grid' data-uk-grid>
                           <div className='uk-width-1-2@s'>
                             <div style={{textAlign:'left'}}>
                              <h3>Your Dashboard</h3>
                             </div>
                           </div>

                           <div className='uk-width-1-2@s'>
                           <div className='uk-flex uk-flex-right'>
                           <div> <Link to="/" className='button_ghost uk-margin-left' >Browse Project Catalog</Link></div>
     
                                <div> <Link to="/" className='button uk-margin-left' style={{backgroundColor:'#9CCF31'}}>Post a job</Link></div>
                                
                               
                                 </div>
                           </div>
                     </div>

                     
                       <div className='uk-grid' data-uk-grid>
                          {/**left main content***/}
                           <div className='uk-width-3-4@s'>
                           <div className='cLient_draft uk-margin-top uk-margin-bottom'>
                   <div className='row uk-padding-small uk-margin-remove-bottom' >
                        <div className='col-6'>
                          <h5 className='uk-text-left uk-text-bold'>My Drafts</h5>
                        </div>

                        <div className='col-6'>
                          <p className='uk-text-right uk-text-small green'>See all drafts</p>
                        </div>
                   </div>

                   <div className='uk-margin-remove-top' style={{borderBottom:'2px solid #f4f4f4', marginTop:'0px'}}> </div>

                    <div className='uk-margin-top uk-padding-small'>
                        <h6 className='uk-text-left'>Plumber needed for a quick fix</h6>
                         <p className='uk-text-left uk-text-small'>Saved 23 days ago</p>
                    </div>

                    <div className='uk-margin-top uk-padding-small' style={{borderTop:'2px solid #f4f4f4', marginTop:'0px'}}>
                        <h6 className='uk-text-left'>Plumber needed for a quick fix</h6>
                         <p className='uk-text-left uk-text-small'>Saved 23 days ago</p>
                    </div>

                    <div className='uk-margin-top uk-padding-small' style={{borderTop:'2px solid #f4f4f4', marginTop:'0px'}}>
                        <h6 className='uk-text-left'>Plumber needed for a quick fix</h6>
                         <p className='uk-text-left uk-text-small'>Saved 23 days ago</p>
                    </div>

            
             </div>



                     {/**Your Job Postings***/}
                     <div className='cLient_draft uk-margin-medium-top uk-margin-bottom'>
                     <div className='row uk-padding-small uk-margin-remove-bottom' >
                        <div className='col-6'>
                          <h5 className='uk-text-left uk-text-bold'>Your Posting</h5>
                        </div>

                        <div className='col-6'>
                          <p className='uk-text-right uk-text-small green'>See all postings</p>
                        </div>
                   </div>

                         <div style={{textAlign:'center',padding:'20px',height:'auto'}}>
                        <h4> No active job posts </h4>
                          <p>Post a job to the marketplace and let talent come to you. </p>

                         <div className='uk-margin-medium-top'> <Link to="/" className='button' style={{backgroundColor:'#9CCF31', }}>Post a job</Link></div>
                                
                         </div>
 </div>


                              {/**How to work with clients***/}
                              <div className='cLient_draft'>
                                 <div className='uk-margin-top uk-padding uk-text-left'>
                                 <h3>How to work with talent </h3>
                                   <p>Connect with a talent community that numbers 
                                   in the millions, fast and at no cost. </p>
                                  </div>


                               
                              </div>







                           </div>

                              {/****Right Side bar****/}
                           <div className='uk-width-1-4@s'>
                               <div style={{border:'1px solid #f4f4f4', borderRadius:'5px',padding:'15px'}}>
                                   <div className='uk-flex' style={{border:'1px solid #f4f4f4', borderRadius:'5px'}}>
                                       <div><img src={P1} style={{width:'60px'}}/></div>
                                       <div className='uk-margin-small-top'>Post a Job</div>
                                   </div>

                                   <div className='uk-flex uk-margin-medium-top' style={{border:'1px solid #f4f4f4', borderRadius:'5px'}}>
                                       <div><img src={P2} style={{width:'60px'}}/></div>
                                       <div className='uk-margin-small-top'>Edit your job post</div>
                                   </div>
                               </div>
                           </div>
                       </div>



                 </div>
          </Layout>
          )
           
}


export default Client_dashboard;