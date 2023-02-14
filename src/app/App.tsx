import React from 'react';

import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

import './styles/index.scss';

import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>

            <AppRouter/>
        </div>
    );
};

export default App;
