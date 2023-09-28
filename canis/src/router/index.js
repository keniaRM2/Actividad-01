/**
 * @author Kenia Reyes
 */

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import routerConstans from "./routerConstans";
import HomeView from '../views/home/HomeView';
import View404 from '../views/errors/View404';
import AboutUsView from '../views/aboutUs/AboutUsView'
import News from '../views/news/NewsScreen';
import ContactsView from '../views/contacts/ContactsView';
import CommentsView from '../views/comments/CommentsView';
import OnboardingView from "../views/onboarding/onboardingView";

var router = () => {


    return (<BrowserRouter>
        <Routes>
            <Route exact path="/" key="home" Component={HomeView}/>
            <Route exact path={routerConstans.HOME}  key="home" Component={HomeView}/>          
            <Route exact path={routerConstans.ABOUTUS}key="aboutus" Component={AboutUsView}/>
            <Route exact path={routerConstans.NEWS}key = "noticias" Component={ News }/>
            <Route exact path={routerConstans.COMMENT} key="comments" Component={CommentsView}/>
            <Route exact path={routerConstans.CONTACTS} key="contacts"  Component={ContactsView}/>
            <Route exact path={routerConstans.ONBOARDING} key="contacts"  Component={OnboardingView}/>
         
            <Route exact path="/*" key="404" Component={View404}/>
          
           
        </Routes>
    </BrowserRouter>)
};

export default router;
