/* ------------------------ [ Import modules ] ---------------------------------*/
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


/* ------------------------ [ Import Components ] ---------------------------------*/
import Header from './components/Header';
import Character from './components/Character';
import Details from './components/Details'
import './App.css'


function App() {
       return (
              <Router>
                     <div className="container">
                            <Header />
                            <Switch>
                                   <Route path="/" exact component={Home} />
                                   <Route path="/details/:ids" component={Details} />

                            </Switch>
                     </div>
              </Router>
       );
}





function Home() {
       const [items, setItems] = useState([]);
       const [isLoading, setIsLoading] = useState(true);


       useEffect(() => {
              const fetchItem = async () => {
                     const result = await axios(`https://www.breakingbadapi.com/api/characters`)
                     console.log(result.data)
                     setItems(result.data)
                     setIsLoading(false)
              }
              fetchItem()
       }, []);



       return (
              <Character isLoading={isLoading} items={items} />
       );
}

export default App;
