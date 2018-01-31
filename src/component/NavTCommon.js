import React from 'react';
import {NavLink} from 'react-router-dom';
import "../common/NavCommon.less";
export default class NavTCommon extends React.Component {
  render() {
    return (
      <div className="nav-box">
        <ul className="clearfix">
          <li><NavLink to="/type/cake" exact={true}>蛋糕</NavLink></li>
          <li><NavLink to="/type/ice">冰激凌</NavLink></li>
          <li><NavLink to="/type/patch">小快切</NavLink></li>
          <li><NavLink to="/type/coffee">咖啡</NavLink></li>
          <li><NavLink to="/type/normal">常温蛋糕</NavLink></li>
          <li><NavLink to="/type/gift">设计师礼品</NavLink></li>
        </ul>
      </div>
    )
  }
}