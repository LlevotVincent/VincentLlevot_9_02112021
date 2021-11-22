import React from 'react';
import iconyoga from '../../Assets/yoga-icon.svg'
import iconswimming from '../../Assets/swimming-icon.svg'
import iconcycling from '../../Assets/cycling-icon.svg'
import iconbodybuilding from '../../Assets/bodybuilding-icon.svg'
import '../Navleft/Navleft.css'
import { NavLink } from 'react-router-dom'

/**
 * Component for navigation bar on left side
 * @component 
 * @return {component}
 */
class Navleft extends React.Component {
    render() {
        return (
            <nav className='navleft'>
                <NavLink to='/'>
                    <img className='sporticon' src={iconyoga} alt="icône de Yoga"></img>
                </NavLink>
                <NavLink to='/'>
                    <img className='sporticon' src={iconswimming} alt="icône de natation"></img>
                </NavLink>
                <NavLink to='/'>
                    <img className='sporticon' src={iconcycling} alt="icône de vélo"></img>
                </NavLink>
                <NavLink to='/'>
                    <img className='sporticon' src={iconbodybuilding} alt="icône d'altère"></img>
                </NavLink>
                <p className='copyright'>copyright, SportSee 2020</p>
            </nav>
        )
    }
}
export default Navleft