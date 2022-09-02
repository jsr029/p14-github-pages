import React from 'react';
import './styles/main.css';
import {
    HashRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/Home';
import ViewCurrentEmployees from './pages/ViewCurrentEmployees';
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

function App() {
    return ( 
        <HashRouter history = { history } >
        {
                /* A <Routes> looks through its children <Route>s and
                            renders the first one that matches the current URL. */
            } 
            <Routes >
                <Route path = "/viewcurrentemployees" element = { < ViewCurrentEmployees / > } /> 
                <Route path = "/" element = { < Home / > } /> 
            </Routes> 
        </HashRouter>
    );
}


export default App;