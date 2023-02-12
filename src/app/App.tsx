import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

import './styles/index.scss';
import {AboutPage} from "pages/AboutPage";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>

            <Suspense fallback={<div>Загрузка</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
