import React, { useEffect, useState } from 'react'
import Navigation from './components/navigation/Navigation'
import './app.scss'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import PostsPage from './components/postsPage/PostsPage'
import ContactPage from './components/contactPage/ContactPage'
import AuthPage from './components/authPage/AuthPage'
import ProfilePage from 'components/profilePage/ProfilePage'
import { setAuthToken } from 'services/authService'
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { logoutUser, setCurrentUser } from 'store/actions/authActions'
import PrivateRoute from 'components/privateRoute/PrivateRoute'

const themes = {
    light: 'light-theme',
    dark: 'dark-theme',
}

export const ThemeContext = React.createContext(themes.light)

const App = () => {
    const [theme, setTheme] = useState(themes.dark)
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('jwtToken')) {
            const token = localStorage.getItem('jwtToken')
            setAuthToken(token)
            const decoded = jwtDecode(token)

            dispatch(setCurrentUser(decoded))

            const currentTime = Date.now() / 1000
            if (decoded.exp < currentTime) {
                dispatch(logoutUser())
                window.location.replace('/signIn')
            }
        }
    })

    const onThemeButtonClickHandler = () => {
        theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
    }

    const links = [<Link to="/">Home</Link>, <Link to="/contact">Contact</Link>, <Link to="/profile">Profile</Link>]

    return (
        <div className={`root-container ${theme}`}>
            <ThemeContext.Provider value={theme}>
                <Router>
                    <Navigation onThemeButtonClickHandler={onThemeButtonClickHandler} links={links} />
                    <Switch>
                        <Route path="/contact">
                            <ContactPage />
                        </Route>
                        <Route path="/signIn">
                            <AuthPage isSignedUpProp={true} />
                        </Route>
                        <Route path="/signUp">
                            <AuthPage isSignedUpProp={false} />
                        </Route>
                        <PrivateRoute path="/profile" component={ProfilePage} />
                        <Route path="/">
                            <PostsPage />
                        </Route>
                    </Switch>
                </Router>
            </ThemeContext.Provider>
        </div>
    )
}

export default App
