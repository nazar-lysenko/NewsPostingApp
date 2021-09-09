import { createNewPost, fetchAllPosts } from '../../services/postsService'
import { FETCH_ALL_POSTS } from '../actionTypes/postsActionTypes'

export const fetchAllPostsAction = () => dispatch => {
    return fetchAllPosts()
        .then(postsData => {
            console.log(postsData)
            dispatch({ type: FETCH_ALL_POSTS, payload: postsData.data })
        })
        .catch(() => {
            console.log('error')
        })
}

export const createNewPostAction = post => dispatch => {
    return createNewPost(post)
        .then(() => dispatch(fetchAllPosts()))
        .catch(() => {
            console.log('error creating new post')
        })
}
