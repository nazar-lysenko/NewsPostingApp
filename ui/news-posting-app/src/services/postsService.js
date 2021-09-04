import axios from 'axios'

const PostsService = {
    fetchAllPosts: () => {
        return axios.get('/api/posts')
    },
}

export default PostsService
