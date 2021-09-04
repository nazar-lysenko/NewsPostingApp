import { SET_CURRENT_USER, USER_LOADING, GET_ERRORS } from '../actionTypes/authActionTypes'
import isEmpty from 'is-empty'

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    errors: {},
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: {
            return { ...state, isAuthenticated: !isEmpty(action.payload), user: action.payload }
        }
        case USER_LOADING: {
            return { ...state, loading: true }
        }
        case GET_ERRORS: {
            return { ...state, errors: action.payload }
        }
        default: {
            return state
        }
    }
}

export default authReducer
