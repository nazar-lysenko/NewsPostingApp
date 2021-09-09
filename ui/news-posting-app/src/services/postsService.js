import axios from 'axios'

export const fetchAllPosts = () => {
    return axios.get('/api/posts')
}

export const createNewPost = payload => {
    return axios.post('/api/posts/create', payload)
}
