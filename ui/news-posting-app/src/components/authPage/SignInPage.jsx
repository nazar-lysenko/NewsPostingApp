import React from 'react'
import './signInPage.scss'
import useInput from 'hooks/useInput'
import { signInUserAction } from 'store/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'

const SignInPage = props => {
    const [email, emailInput, setEmail] = useInput({ name: 'email', label: 'Email' })
    const [password, passwordInput, setPassword] = useInput({ type: 'password', name: 'password', label: 'Password' })

    const dispatch = useDispatch()
    const { errors } = useSelector(state => state.auth)

    const onFormSubmitHandler = event => {
        event.preventDefault()
        const user = { email, password }
        setEmail('')
        setPassword('')

        dispatch(signInUserAction(user))
    }

    return (
        <div className="sign-in-component">
            <p>{JSON.stringify(errors)}</p>
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
