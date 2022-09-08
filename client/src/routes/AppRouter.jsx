import React from 'react'
import { Routes, Route, } from "react-router-dom"
import { authRoutes, publicRoutes } from "./routes";
import HomePage from '../pages/HomePage';

const AppRouter = () => {
    return (
        <Routes>
            {authRoutes.map(({ path, element }, i) =>
                <Route key={i} path={path} element={element} />
            )}
            {publicRoutes.map(({ path, element }, i) =>
                <Route key={i} path={path} element={element} />
            )}
            <Route path='*' element={<HomePage />} />
        </Routes>
    )
}

export default AppRouter