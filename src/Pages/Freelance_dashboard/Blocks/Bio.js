import React from 'react'
import free_img from './../../../images/Freelancer.png'
import { useSelector } from 'react-redux'

function Bio() {
    const user = useSelector(state => state.user.value)
  return (
    <div className='row uk-padding-small@s'>
    <div className='col-sm-6'>
        <img src={free_img} className="freelancer_img"/>
    </div>

    <div className='col-sm-6 uk-margin-top '>
        <h5 className='uk-text-bold uk-margin-remove-bottom'>{user.firstName} {user.lastName}</h5>
        <p className='uk-margin-small-top '>Freelance Profile</p>
    </div>
</div>
  )
}
export default Bio