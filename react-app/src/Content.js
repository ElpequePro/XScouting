import React from 'react';
import { useLocation } from 'react-router-dom';

import Home from './Home';
import Dashboard from './Dashboard';

const Content = () => {
    const location = useLocation();

    switch (location.pathname) {
        case '/':
            return <Home />;
        case '/dashboard':
            return <Dashboard />;
        default:
            return <Home />;
    }
};

export default Content;