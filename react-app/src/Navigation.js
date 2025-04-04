import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './logo.png';

const Navigation = () => {

    return (
        <nav>
            <div>
                <div>
                    <img src={logo} alt='logo' />
                </div>
                <ul>
                    <li><NavLink to='/dashboard' >Dashboard</NavLink></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li></li>
                </ul>
                <div>

                </div>
            </div>
        </nav>
    )
}

export default Navigation;