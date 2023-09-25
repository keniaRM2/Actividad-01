/**
 * @author Kenia Reyes
 */

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomeView from '../views/home/HomeView';
import CommentsView from '../views/home/CommentsView';

var router = () => {


    return (<BrowserRouter>
        <Routes>
            <Route exact path="/" key="home" Component={HomeView}/>
            <Route exact path="/comments" key="comments" Component={CommentsView}/>
        </Routes>
    </BrowserRouter>)
};

export default router;
