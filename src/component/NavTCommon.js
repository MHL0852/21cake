import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import "../common/NavCommon.less";
class NavTCommon extends React.Component {
  handleTouch=(e)=>{
    console.log(e.target);
    let hrefVal=e.target.getAttribute("href");
    console.log(hrefVal);
  };
  render() {
    return (
      <div className="nav-box">
        <ul className="clearfix" onTouchEnd={this.handleTouch}>
          <li><NavLink to="/type/cake" className={this.props.location.pathname==="/type"?"active":""}>蛋糕</NavLink></li>
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
export default withRouter(NavTCommon);