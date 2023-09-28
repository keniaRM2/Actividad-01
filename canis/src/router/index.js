/**
 * @author Kenia Reyes
 */

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomeView from '../views/home/HomeView';
import OnboardingView from "../views/onboarding/onboardingView";

var router = () => {


    return (<BrowserRouter>
        <Routes>
            <Route exact path="/" key="home" Component={HomeView}/>
            <Route exact path="/comments" key="onboarding" Component={OnboardingView}/>
        </Routes>
    </BrowserRouter>)
};

export default router;
