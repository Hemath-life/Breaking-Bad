
/* ------------------------ [ Modules ] -------------------------------*/
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
/* ------------------------ [ Styled ] ---------------------------------*/
import './App.css'

/* ------------------------ [ Components ] ---------------------------------*/
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";





const App = () => {
    return (
        <BrowserRouter>  // Accessing the browser URL section
            <div >
                <h1>How are you</h1>
            </div>

            <Switch> // here we can use a tag but while use a tag its refresh the page that's the dis advantage so the switch and route came .
                <Route path="/" component={Home} />
                <Route path="/about" component={Profile} />
                <Route path="/profile" component={About} />
            </Switch>

        </BrowserRouter>
    );
}





export default App;
