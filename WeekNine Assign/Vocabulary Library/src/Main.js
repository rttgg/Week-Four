import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Vocabulary from "./Vocabulary";
import Example from "./Example";
import Link from "./Link";



class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
            <h1>My Vocabulary List</h1>
            <ul className="header">
                <li><NavLink exact to="/">Vocabulary</NavLink></li>
                <li><NavLink to="/example">Example</NavLink></li>
                <li><NavLink to="/link">Link</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Vocabulary}/>
                <Route path="/example" component={Example}/>
                <Route path="/link" component={Link}/>
            </div>
         </div>
         </HashRouter>
        );
    }
}


export default Main;