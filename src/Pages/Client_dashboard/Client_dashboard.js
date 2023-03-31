import react from 'react'
import Search_filter from '../../Components/Search-filter/Search_filter';
import Layout from '../../Layout/Layout';
import { Link } from 'react-router-dom';
import './styles.css'

// import free_img from './../../images/Freelancer.png'
import Job_post from '../Freelance_dashboard/Blocks/Job_post';
import Client_job_post from './Blocks/Client_job_post';
import Bio from './Blocks/Bio';


const Client_dashboard = ( ) => {

          return(
            <Layout>
        <div className='uk-container uk-margin-large-top'>
        <div className='row'>

        {/*Left Side bar*/}
        <div className='col-sm-4  leftSidebar uk-margin-large-top' >
             <div className=''>
                 <h3 className='uk-text-left uk-margin-remove-bottom'>My Dashboard</h3>
                 <Bio/>
             </div>

                  {/**Client Draft**/}
             <div className='cLient_draft uk-margin-large-top uk-margin-bottom'>
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

             </div>


                    {/**Client Postings**/}
             <div className='cLient_post uk-margin-small-top uk-margin-bottom'>
                   <div className='row uk-padding-small uk-margin-remove-bottom' >
                        <div className='col-6'>
                          <h5 className='uk-text-left uk-text-bold'>My Postings</h5>
                        </div>

                        <div className='col-6'>
                          <p className='uk-text-right uk-text-small green'>See all posts</p>
                        </div>
                   </div>

                   <div className='uk-margin-remove-top' style={{borderBottom:'2px solid #f4f4f4', marginTop:'0px'}}> </div>

                    <div className='uk-margin-top uk-padding-small'>
                        <h6 className='uk-text-left'>Copywriter needed</h6>
                         <p className='uk-text-left uk-text-small'>Saved 23 days ago</p>
                    </div>

             </div>

        </div>





        {/*Right  Main Content*/}
        <div className='col-sm-8 uk-margin-large-top'>


        <div className=''>
         <Search_filter />
      
       </div>

       <div className='box-shadow  uk-margin-medium-top'>
           <Client_job_post />
       </div>


         



        </div>


        </div>

        </div>
          </Layout>
          )
           
}


export default Client_dashboard;