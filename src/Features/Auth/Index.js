import axios from '../../lib/config';


export const Signup = async (payload) => {
    await axios.post('/users/signup', payload).then((res) => {
        return res
    }).catch((err) => {
        console.log(err)
    })
}