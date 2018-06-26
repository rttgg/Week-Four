import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Vocabulary from "./Vocabulary";
import Example from "./Example";
import Link from "./Link";
import Alphvoc from "./Alphvoc";
import styled from "styled-components";


const Headerstyle = styled.ul`
  background-color: #111;
  padding: 0;
`
const Headerli = styled.li`
  display: inline;
  list-style-type: none;
  margin: 0;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 20px;
  display: inline-block
`

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
            <h1>My Vocabulary List</h1>
            <Headerstyle>
                <Headerli><NavLink exact to="/">Vocabulary</NavLink></Headerli>
                <Headerli><NavLink to="/example">Example</NavLink></Headerli>
                <Headerli><NavLink to="/link">Link</NavLink></Headerli>
                <Headerli><NavLink to="/alphvoc">Alphvoc</NavLink></Headerli>   
            </Headerstyle>
            <div className="content">
                <Route exact path="/" component={Vocabulary}/>
                <Route path="/example" component={Example}/>
                <Route path="/link" component={Link}/>
                <Route path="/alphvoc" component={Alphvoc}/>
            </div>
         </div>
         </HashRouter>
        );
    }
}


export default Main;