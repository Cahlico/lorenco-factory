import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Header';
import Home from '../pages/Home';

export default function App() {

    return (
        <>
            <Header />
            <Home />
        </>
    );
}