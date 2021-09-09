import React from 'react'
import useInput from 'hooks/useInput'
import { useSelector, useDispatch } from 'react-redux'
import { signUpUserAction } from '../../store/actions/userActions'
import { useHistory } from 'react-router-dom'

const SignUpPage = () => {
    const [login, loginInput] = useInput({ name: 'login', label: 'Login' })
    const [email, emailInput] = useInput({ name: 'email', label: 'Email' })
    const [password, passwordInput] = useInput({ type: 'password', name: 'password', label: 'Password' })
    const [passwordRepeat, passwordRepeatInput] = useInput({
        type: 'password',
        name: 'passwordRepeat',
        label: 'Repeat your Password',
    })

    const { errors } = useSelector(state => state.user)
    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmitFormHandler = event => {
        event.preventDefault()

        const newUser = {
            login,
            email,
            password,
            passwordRepeat,
        }

        console.log('handler')

        dispatch(signUpUserAction(newUser, history))
    }

    return (
        <div className="sign-up-component">
            <p>{JSON.stringify(errors)}</p>
            <form onSubmit={onSubmitFormHandler} className="sign-up-component_form">
                <div className="sign-up-component_fields">
                    <div className="sign-up-component_fields_item">{loginInput}</div>
                    <div className="sign-up-component_fields_item">{emailInput}</div>
                    <div className="sign-up-component_fields_item">{passwordInput}</div>
                    <div className="sign-up-component_fields_item">{passwordRepeatInput}</div>
                </div>
                <div className="sign-up-component_submit">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default SignUpPage
