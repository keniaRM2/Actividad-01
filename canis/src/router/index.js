/**
 * @author Kenia Reyes
 */

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomeView from '../views/home/HomeView';

import ContactsView from '../views/home/ContactsView';

var router = () => {


    return (<BrowserRouter>
        <Routes>
            <Route exact path="/" key="home" Component={HomeView}/>
            <Route exact path="/contacts" key="contacts"  Component={ContactsView}/>
        </Routes>
    </BrowserRouter>)
};

export default router;
