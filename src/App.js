import React from 'react';
import './styles/index.scss';

import {HintPopup} from "./components/HintPopup/HintPopup";
import {HintSystemProvider} from "./provider/HintSystemProvider";

import { Home } from './pages/Home/Home';
import {Redirect, Route, Switch} from "react-router-dom";

function App() {
    return (
        <>
            <HintSystemProvider>
                <Switch>
                    <Route path="/home" exact component={Home}/>
                    <Redirect to="/home" />
                </Switch>
            </HintSystemProvider>
        </>
    );
}

export default App;
