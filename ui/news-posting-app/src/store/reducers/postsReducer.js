import { FETCH_ALL_POSTS } from '../actionTypes/postsActionTypes'

const initialState = {
    posts: [],
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_POSTS: {
            return { ...state, posts: action.payload }
        }
        default:
            return state
    }
}
