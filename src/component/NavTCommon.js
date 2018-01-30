import React from 'react';
import {NavLink} from 'react-router-dom';
import "../common/NavCommon.less";
export default class NavTCommon extends React.Component {
  render() {
    return (
      <div className="nav-box" onTouchMove={()=>{}} onTouchStart={()=>{}}>
        <ul className="clearfix">
          <li className="active"><NavLink to="/cake">蛋糕</NavLink></li>
          <li><NavLink to="/ice">冰激凌</NavLink></li>
          <li><NavLink to="/patch">小快切</NavLink></li>
          <li><NavLink to="/coffee">咖啡</NavLink></li>
          <li><NavLink to="/normal">常温蛋糕</NavLink></li>
          <li><NavLink to="/gift">设计师礼品</NavLink></li>
        </ul>
      </div>
    )
  }
}