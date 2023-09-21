/**
 * @author Kenia Reyes
 */

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomeView from '../views/home/HomeView';

var router = () => {


    return (<BrowserRouter>
        <Routes>
            <Route exact path="/" key="home" Component={HomeView}/>
        </Routes>
    </BrowserRouter>)
};

export default router;
