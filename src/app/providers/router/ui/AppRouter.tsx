import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";

import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        path={path}
                        element={(
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        )}
                        key={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
