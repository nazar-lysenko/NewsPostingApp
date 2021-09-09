import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = props => {
    const { component: Component, componentProps, ...options } = props

    const { isAuthenticated } = useSelector(state => state.user)

    return (
        <Route {...options}>
            {isAuthenticated === true ? <Component {...componentProps} /> : <Redirect to="/signIn" />}
        </Route>
    )
}

export default PrivateRoute
