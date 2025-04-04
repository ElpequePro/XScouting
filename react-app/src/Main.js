import { Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Content from './Content';

const Main = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/dashboard" element={<Content />} />
            </Routes>
        </>
    );
}

export default Main;