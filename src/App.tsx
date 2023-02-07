import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Counter from "./components/Counter";
import './styles/index.scss';
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Routes>
                <Route path={'/'} element={<Counter/>}/>
            </Routes>
        </div>
    );
};

export default App;
