import React from 'react';
import Login from './login/Login';
import Register from './register/Register';
import Agreement from './agreement/Agreement'
import {HashRouter,withRouter,Route,Switch,} from 'react-router-dom'
export default class index extends React.Component {
  render(){
    return <HashRouter>
        <Switch>
            <Route path="/user" exact={true} component={Login}/>
            <Route path="/user/login" component={Login}/>
            <Route path="/user/register" component={Register}/>
            <Route path="/user/agreement" component={Agreement}/>
        </Switch>
    </HashRouter>
  }
}