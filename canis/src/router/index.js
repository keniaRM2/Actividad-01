/**
 * @author Kenia Reyes
 */

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomeView from '../views/home/HomeView';
import View404 from '../views/errors/View404';
import AboutUsView from '../views/aboutUs/AboutUsView'

var router = () => {


    return (<BrowserRouter>
        <Routes>
            <Route exact path="/" key="home" Component={HomeView}/>
            <Route exact path="/home" key="home" Component={HomeView}/>          
            <Route exact path="/aboutus" key="aboutus" Component={AboutUsView}/>


            <Route exact path="/*" key="404" Component={View404}/>
        </Routes>
    </BrowserRouter>)
};

export default router;
