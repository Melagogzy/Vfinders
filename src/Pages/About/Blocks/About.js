import react from 'react';
import {FacebookBtn,SignUp, GoogleBtn} from '../../../Layout/Blocks/Widgets';
import Layout from '../../../Layout/Layout';





const About = () =>(
    <div className='uk-container'>
       <Layout>
                  <h1>we dey try this thing</h1> 
      <FacebookBtn /> 
      <GoogleBtn />
    
      <SignUp />

      </Layout>

</div>


    
)


export default About