import React from 'react';
import logo from '../../Assets/logo.svg'
import '../Header/Header.css'
import { NavLink } from 'react-router-dom'

/**
    * Component for navigation bar
    * @component 
    * @return {component}
 */
class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <img src={logo} className='logo' alt='logo SportSee' />
                <nav className='navbar'>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/Profil">profil</NavLink>
                    <NavLink to="/Reglage">Réglage</NavLink>
                    <NavLink to="/Communaute">Communauté</NavLink>
                </nav>
            </div>
        )
    }
}
export default Header