import React from 'react';
import {Route,Redirect} from "react-router-dom";
import "../../common/LIstCommon.less";
import "./types.less";
import "../../common/NavCommon.less";
import "../../common/index.less";
import NavTCommon from "../../component/NavTCommon";
import TypeCommon from "../../component/TypeCommon";
// import Home from "../home/home";
export default class Type extends React.Component {
  render() {
    return (
      <div>
        <NavTCommon/>
        <div className="types">
          <Route path='/type' exact={true} component={TypeCommon}/>
          <Route path='/type/cake' component={TypeCommon}/>
          <Route path='/type/ice'  component={TypeCommon}/>
          <Route path='/type/patch'  component={TypeCommon}/>
          <Route path='/type/coffee'  component={TypeCommon}/>
          <Route path='/type/normal'  component={TypeCommon}/>
          <Route path='/type/gift' component={TypeCommon}/>
          {/*<Route path='/type*' component={Home}/>*/}
          {/*<Redirect to='/type'/>*/}
        </div>
      </div>
    )
  }
}