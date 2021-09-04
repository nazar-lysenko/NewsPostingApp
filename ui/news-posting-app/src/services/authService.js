import axios from 'axios'

export const setAuthToken = token => {
    if (token) {
        console.log('setting token', token)
        axios.defaults.headers.common['Authorization'] = token
        console.log(axios.defaults.headers.common['Authorization'])
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export const signUpUser = userData => {
    return axios.post('/api/users/register', userData)
}

export const signInUser = userData => {
    return axios.post('/api/users/login', userData)
}
