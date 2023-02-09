import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

import Counter from "./components/Counter";
import './styles/index.scss';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Routes>
                <Route path={'/'} element={<Counter/>}/>
            </Routes>
        </div>
    );
};

export default App;
