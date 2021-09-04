import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignInPage from './SignInPage'
import SignUpPage from './SignUpPage'

const AuthPage = ({ isSignedUpProp }) => {
    const dontHaveAccountText = <Link to="/signUp">Do not have account yet?</Link>
    const alreadyHaveAccountText = <Link to="/signIn">Already have an account?</Link>

    return (
        <div className="auth-page">
            <h1>Authentication Page</h1>
            {isSignedUpProp ? <SignInPage /> : <SignUpPage />}
            <div>{isSignedUpProp ? dontHaveAccountText : alreadyHaveAccountText}</div>
        </div>
    )
}

export default AuthPage
