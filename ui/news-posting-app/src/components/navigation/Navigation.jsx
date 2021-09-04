import React, { useContext, useEffect, useState } from 'react'
import './navigation.scss'
import { icons } from '../../constants/globalConstants'
import { ThemeContext } from '../../App'
import { Link } from 'react-router-dom'

const Navigation = props => {
    const { onThemeButtonClickHandler, links } = props
    const [scrollPosition, setScrollPosition] = useState(0)

    const onScrollHandler = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScrollHandler, { passive: true })

        return () => {
            window.removeEventListener('scroll', onScrollHandler)
        }
    }, [])

    const theme = useContext(ThemeContext)

    return (
        <div className={`navigation ${theme} ${scrollPosition > 30 ? 'navigation-shrink' : ''}`}>
            <div className="navigation_site-title">
                <div className="navigation_site-title_logo">
                    <img src={icons.site.navigation} alt="" />
                </div>
                <div className="navigation_site-title_title">
                    <h4>TECH NEWS</h4>
                </div>
            </div>
            <div className="navigation_navigation-items">
                {links.map(item => {
                    return <div className="navigation_navigation-items_item">{item}</div>
                })}
            </div>
            <div className="navigation_sign-in">
                <Link to="/signIn">
                    <button className="navigation_sign-in_button">
                        <span>Sign In</span>
                    </button>
                </Link>
            </div>
            <div className="navigation_theme-switcher">
                <div className="navigation_theme-switcher_image__wrapper" onClick={onThemeButtonClickHandler}>
                    <img src={icons.site.themeSwitcher} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navigation
