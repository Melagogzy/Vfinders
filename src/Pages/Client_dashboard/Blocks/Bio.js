import { useSelector } from 'react-redux'

function Bio() {
    const user = useSelector(state => state.user.value)
  return (
    <div className='row uk-padding-small@s'>
    

    <div className='col-sm-6  '>
        <h5 className='uk-text-bold uk-margin-remove-bottom'>{user.firstName} {user.lastName}</h5>
       
    </div>
</div>
  )
}
export default Bio