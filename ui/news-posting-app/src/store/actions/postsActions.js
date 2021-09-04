import PostsService from '../../services/postsService'
import { FETCH_ALL_POSTS } from '../actionTypes/postsActionTypes'

export const fetchAllPosts = payload => dispatch => {
    return PostsService.fetchAllPosts(payload)
        .then(postsData => {
            console.log(postsData)
            dispatch({ type: FETCH_ALL_POSTS, payload: postsData.data })
        })
        .catch(() => {
            console.log('error')
        })
}
