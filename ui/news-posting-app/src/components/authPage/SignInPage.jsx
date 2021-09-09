import React from 'react'
import './signInPage.scss'
import useInput from 'hooks/useInput'
import { signInUserAction } from 'store/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const SignInPage = props => {
    const [email, emailInput, setEmail] = useInput({ type: 'email', name: 'email', label: 'Email' })
    const [password, passwordInput, setPassword] = useInput({ type: 'password', name: 'password', label: 'Password' })

    const dispatch = useDispatch()
    const history = useHistory()
    const { errors } = useSelector(state => state.user)

    const onFormSubmitHandler = event => {
        event.preventDefault()
        const user = { email, password }
        setEmail('')
        setPassword('')

        dispatch(signInUserAction(user))
        history.push('/')
    }

    return (
        <div className="sign-in-component">
            <form onSubmit={onFormSubmitHandler} className="sign-in-component_form">
                <div className="sign-in-component_fields">
                    <div className="sign-in-component_fields_item">{emailInput}</div>
                    <div className="sign-in-component_fields_item">{passwordInput}</div>
                </div>
                <div className="sign-in-component_submit-button">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default SignInPage
