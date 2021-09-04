import { signUpUser, signInUser, setAuthToken } from 'services/authService'
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from '../actionTypes/authActionTypes'
import jwtDecode from 'jwt-decode'

export const signUpUserAction = (userData, history) => dispatch => {
    signUpUser(userData)
        .then(() => history.push('/signIn'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        })
}

export const signInUserAction = userData => dispatch => {
    signInUser(userData)
        .then(res => {
            const { token } = res.data
            localStorage.setItem('jwtToken', token)
            setAuthToken(token)
            const decoded = jwtDecode(token)
            dispatch(setCurrentUser(decoded))
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        })
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    }
}

export const setUserLoading = () => {
    return { type: USER_LOADING }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken')
    setAuthToken('')
    dispatch(setCurrentUser({}))
}
