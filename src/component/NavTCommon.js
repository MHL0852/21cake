import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import Swiper from 'swiper';
import "../common/NavCommon.less";
class NavTCommon extends React.Component {
  handleClick=(e)=>{
    if(document.documentElement.scrollWidth>=760) return;
    let hrefVal=e.target.parentNode.getAttribute("datat-index");
    if(hrefVal==="right"){
      e.target.parentNode.parentNode.className="swiper-wrapper";
      e.target.parentNode.parentNode.className="swiper-wrapper right";
    }else{
      e.target.parentNode.parentNode.className="swiper-wrapper";
      e.target.parentNode.parentNode.className="swiper-wrapper left";
    }
  };

  componentDidMount(){
    let mySwiper = new Swiper('.swiper-container', {
      loop: false,
      slidesPerView: 'auto',
      freeMode : true,
      freeModeMomentum : false,
    });
    this.ul=this.refs.ul;
    this.ul.addEventListener("touchmove",(e)=>{
      this.ul.className="swiper-wrapper";
    })
  }
  render() {
    return (
      <div className="nav-box">
        <div className="swiper-container">
          <ul className="swiper-wrapper" onClick={this.handleClick} ref={"ul"}>
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