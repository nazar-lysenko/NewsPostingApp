import axios from 'axios'

const PostsService = {
    fetchAllPosts: payload => {
        console.log(payload)
        return axios.get('/api/posts')
    },
}

export default PostsService
