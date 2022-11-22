import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {MainLayout} from "../layouts";
import {Context} from "../index";
import {SHOP_ROUTE} from "../utils";

const AppRouter = () => {
    const {user} = useContext(Context);

    return (
        <Routes>
            <Route path={SHOP_ROUTE} element={<MainLayout/>}>
                {user.isAuth && authRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
                )}
                {publicRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
                )}
            </Route>
        </Routes>
    );
};

export {AppRouter};