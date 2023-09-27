/**
 * @author Kenia Reyes
 */

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomeView from '../views/home/HomeView';
import View404 from '../views/errors/View404';
import AboutUsView from '../views/aboutUs/AboutUsView'
import News from '../views/news/NewsScreen';

import ContactsView from '../views/home/ContactsView';

var router = () => {


    return (<BrowserRouter>
        <Routes>
            <Route exact path="/" key="home" Component={HomeView}/>
            <Route exact path="/home" key="home" Component={HomeView}/>          
            <Route exact path="/aboutus" key="aboutus" Component={AboutUsView}/>
            <Route exact path="/noticias" key = "noticias" Component={ News }/>
            <Route exact path="/contacts" key="contacts"  Component={ContactsView}/>
            <Route exact path="/*" key="404" Component={View404}/>
          
        </Routes>
    </BrowserRouter>)
};

export default router;
