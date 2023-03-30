import react from 'react';
import './styles.css'
import { Link } from 'react-router-dom'


const Search_filter = () => {
      
    return(
        <div>


<div className='uk-grid uk-grid-collapse uk-margin-top' data-uk-grid>
               <div className='uk-width-3-5@s'>
               <div className="search_container">
                                 <form className=" uk-padding-small">
                                 <div class="wrap">
                                <div class="search">
                                    <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                                    <button type="submit" class="searchButton">
                                    <span uk-icon="icon: search"></span>
                                    </button>
                                </div>
                                </div>
                                 </form> 
                           </div>
               </div>

               <div className='uk-width-2-5@s uk-margin-top'>
                    <div className='uk-grid uk-grid-collapse' data-uk-grid>
                           <div className='uk-width-1-2'>
                           <Link to="/" class="uk-margin-left button  uk-text-medium"
                           style={{backgroundColor:'#9CCF31'}}
                           >  10 Filters</Link>
                           </div>


                           <div className='uk-width-1-2'>
                                 
                                <Link to="/" class="uk-margin-left button  uk-text-medium"
                                style={{
                                backgroundColor:"#9CCF31",
                               
                                }}>  Saved Search</Link>
                           </div>
                    </div>
            
               </div>
        </div>






        </div>
    )
       
}



export default Search_filter