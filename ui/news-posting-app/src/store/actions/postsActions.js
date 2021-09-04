import PostsService from '../../services/postsService'
import { FETCH_ALL_POSTS } from '../actionTypes/postsActionTypes'

export const fetchAllPosts = () => dispatch => {
    return PostsService.fetchAllPosts()
        .then(postsData => {
            console.log(postsData)
            dispatch({ type: FETCH_ALL_POSTS, payload: postsData.data })
        })
        .catch(() => {
            console.log('error')
        })
}
