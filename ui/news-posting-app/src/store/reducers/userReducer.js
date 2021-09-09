import { SET_CURRENT_USER, GET_ERRORS } from '../actionTypes/userActionTypes'
import isEmpty from 'is-empty'

const initialState = {
    isAuthenticated: false,
    user: {},
    errors: {},
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: {
            return { ...state, isAuthenticated: !isEmpty(action.payload), user: action.payload }
        }
        case GET_ERRORS: {
            return { ...state, errors: action.payload }
        }
        default: {
            return state
        }
    }
}

export default userReducer
