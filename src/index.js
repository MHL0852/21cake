import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import App from "./container/App";
import {Link, Route, Switch, Redirect, withRouter, HashRouter, Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import Home from "./container/home/Home";
import Type from "./container/type/Type";
import Shop from "./container/shop/Shop";
import User from "./container/user";
import Detail from "./container/detail/Detail";
import "./common/reset.min.css";
import Community from './container/community/Magazine';

render(<Provider store={store}>
    <HashRouter>
        <App>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/type' component={Type}/>
                <Route path='/shop' component={Shop}/>
                <Route path='/community' component={Community}/>
                <Route path='/user' component={User}/>
                <Route path='/detail' component={Detail}/>
                <Redirect to='/home'/>
            </Switch>
        </App>
    </HashRouter>
</Provider>, window.root);