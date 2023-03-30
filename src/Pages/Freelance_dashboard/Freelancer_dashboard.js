import react from 'react'
import Layout from '../../Layout/Layout'
import free_img from './../../images/Freelancer.png'
import {Link } from 'react-router-dom'
import './styles.css'
import Job_post from './Blocks/Job_post'
import Search_filter from '../../Components/Search-filter/Search_filter'


const Freelancer_dashboard = () =>(
    
       <Layout>
<div className='uk-container uk-margin-large-top'>
        <div className='row'>

        {/*Left Side bar*/}
        <div className='col-sm-4  leftSidebar uk-margin-large-top' >
             <div className='row uk-padding-small@s'>
                   <div className='col-sm-6'>
                       <img src={free_img} className="freelancer_img"/>
                   </div>

                   <div className='col-sm-6 uk-margin-top '>
                       <h6 className='uk-text-bold uk-margin-remove-bottom'>Jayone Mighty</h6>
                       <p className='uk-margin-small-top '>Freelance Profile</p>
                   </div>
             </div>


             <div className='row uk-margin-top uk-margin-bottom'>
                 <div className='col-5'>
                    <p className=' uk-text-medium'>Available Connects</p>
                 </div>

                 <div className='col-3'>
                    <p className=' uk-text-medium'>120</p>
                 </div>

                 <div className='col-4'>
                    <Link to="/" class="uk-margin-left button  uk-text-medium" 
                    style={{
                      backgroundColor:"#9CCF31",
                      paddingTop:"10px",
                      paddingBottom:"10px",
                      paddingLeft:"20px",
                      paddingRight:"20px",
                      borderRadius:"4px",
                      color:"#fff"
                    }}>  Buy</Link>


                 </div>
             </div>
             
           
           <div>
        <div class="sidebar">
            <a href="#home"><i class="fa fa-fw fa-envelope"></i> Find Work</a>
            <a href="#services"><i class="fa fa-fw fa-clipboard"></i> My Projects</a>
            <a href="#clients"><i class="fa fa-fw fa-file"></i> Reports</a>
            <a href="#contact"><i class="fa fa-fw fa-book"></i> Messages</a>
            <a href="#clients"><i class="fa fa-fw fa-life-ring uk-margin-top"></i> Help & Support</a>
            <a href="#contact"><i class="fa fa-fw fa-arrow-up-left-from-circle"></i> Logout</a>

            
       </div>
           </div>



        </div>




        {/*Right  Main Content*/}
     
        <div className='col-sm-8 uk-margin-large-top'>
        <div className='right_main_container'>
            <div className='free_menu_container'>

            <div class="topnav uk-visible@s">
                <a class="active" href="#home">My Feed</a>
                <a href="#news">Saved Jobs</a>
                <a href="#contact">Submitted Proposals</a>
                <a href="#about">Active Contract</a>
            </div> 


            <div class="scrollmenu uk-hidden@s">
                <a href="#home">My Feed</a>
                <a href="#news">Saved Jobs</a>
                <a href="#contact">Submitted Proposals</a>
                <a href="#about">Active Contract</a>
             </div> 

       </div>


        <div>
        <Search_filter />
        </div>

             {/*Job Post*/}
             <div className='job_post_container'>
                <Job_post />
            </div>

     
          </div>
        </div>


        </div>

        </div>
 
      </Layout>




    
)


export default Freelancer_dashboard

