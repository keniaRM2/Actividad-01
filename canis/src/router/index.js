/**
 * @author Kenia Reyes
 */

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomeView from '../views/home/HomeView';
import News from '../views/news/NewsScreen';

var router = () => {


    return (<BrowserRouter>
        <Routes>
            <Route exact path="/" key="home" Component={HomeView}/>
            <Route exact path="/noticias" key = "noticias" Component={ News }/>
        </Routes>
    </BrowserRouter>)
};

export default router;
