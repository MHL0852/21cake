import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import Swiper from 'swiper';
import "../common/NavCommon.less";
class NavTCommon extends React.Component {
  handleTouch=(e)=>{
    let hrefVal=e.target.parentNode.getAttribute("datat-index");
    if(hrefVal==="right"){
      e.target.parentNode.parentNode.className="";
      e.target.parentNode.parentNode.className="right";
    }else{
      e.target.parentNode.parentNode.className="";
      e.target.parentNode.parentNode.className="left";
    }
  };
  componentDidMount(){
    let mySwiper = new Swiper('.swiper-container', {
      loop: false,
      slidesPerView: 'auto',
      freeMode : true,
      freeModeMomentum : false,
    });
  }
  render() {
    return (
      <div className="nav-box">
        <div className="swiper-container">
          <ul className="swiper-wrapper" onClick={this.handleTouch}>
            <li className="swiper-slide" datat-index="left"><NavLink to="/type/cake" className={this.props.location.pathname==="/type"?"active":""}>蛋糕</NavLink></li>
            <li className="swiper-slide" datat-index="left"><NavLink to="/type/ice">冰激凌</NavLink></li>
            <li className="swiper-slide" datat-index="left"><NavLink to="/type/patch">小快切</NavLink></li>
            <li className="swiper-slide" datat-index="right"><NavLink to="/type/coffee">咖啡</NavLink></li>
            <li className="swiper-slide" datat-index="right"><NavLink to="/type/normal">常温蛋糕</NavLink></li>
            <li className="swiper-slide" datat-index="right"><NavLink to="/type/gift">设计师礼品</NavLink></li>
          </ul>
        </div>

      </div>
    )
  }
}
export default withRouter(NavTCommon);