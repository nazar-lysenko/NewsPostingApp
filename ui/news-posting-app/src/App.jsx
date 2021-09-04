import React, { useState } from 'react'
import Navigation from './components/navigation/Navigation'
import './app.scss'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import PostsPage from './components/postsPage/PostsPage'
import ContactPage from './components/contactPage/ContactPage'
import SignInPage from './components/authPage/SignInPage'
import AuthPage from './components/authPage/AuthPage'

const themes = {
    light: 'light-theme',
    dark: 'dark-theme',
}

export const ThemeContext = React.createContext(themes.light)

const App = () => {
    const [theme, setTheme] = useState(themes.dark)

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
                        <Route path="/profile">
                            <SignInPage />
                        </Route>
                        <Route path="/signIn">
                            <AuthPage isSignedUpProp={true} />
                        </Route>
                        <Route path="/signUp">
                            <AuthPage isSignedUpProp={false} />
                        </Route>
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
