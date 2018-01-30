import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import App from "./container/App";
import {Link, Route, Switch, Redirect, withRouter, HashRouter} from "react-router-dom";
import Home from "./container/home/Home";
import Type from "./container/type/Type";
import Shop from "./container/shop/Shop";
import Community from "./container/community/Community";
import User from "./container/user/User";
import Detail from "./container/detail/Detail";
import "./common/reset.min.css";

render(<HashRouter>
    <App>
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/type' component={Type}/>
            <Route path='/shop' component={Shop}/>
            <Route path='/community' component={Community}/>
            <Route path='/user' component={User}/>
            <Route path='/detail' component={Detail}/>
            <Redirect to='/home'/>
        </Switch>
    </App>
</HashRouter>, window.root);