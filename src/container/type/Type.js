import React from 'react';
import {Route,Router, Switch, Redirect, withRouter} from "react-router-dom";
import ajax from "axios";
import "../../common/LIstCommon.less";
import a from "../../common/images/14593363138999.jpg";
import b from "../../common/images/list-cart.png";
import "./types.less";
import "../../common/NavCommon.less";
// import NavTCommon from "../../component/NavTCommon";
// import Cake from "./class/Cake";
// import Ice from "./class/Ice";
// import Patch from "./class/Patch";
// import Coffee from "./class/Coffee";
// import Normal from "./class/Normal";
// import Gift from "./class/Gift";
export default class Type extends React.Component {
  componentWillMount(){
    ajax({
      url:"http://localhost:10086/list/cake",
      match:"GET"
    }).then((val)=>{
      console.log(val);
    }).catch((val)=>{});

  }
  render() {
    return (
     <div>
       {/*<div className="nav-box" onTouchMove={()=>{}} onTouchStart={()=>{}}>*/}
         {/*<ul className="clearfix">*/}
           {/*<li className="active"><NavLink to="/cake">蛋糕</NavLink></li>*/}
           {/*<li><NavLink to="/ice">冰激凌</NavLink></li>*/}
           {/*<li><NavLink to="/patch">小快切</NavLink></li>*/}
           {/*<li><NavLink to="/coffee">咖啡</NavLink></li>*/}
           {/*<li><NavLink to="/normal">常温蛋糕</NavLink></li>*/}
           {/*<li><NavLink to="/gift">设计师礼品</NavLink></li>*/}
         {/*</ul>*/}
       {/*</div>*/}
       <div className="types">
           <div className="listCommon">
             <ul className="clearfix">
               <li>
                 <a href="#" className="list-item-link">
                   <div className="item-link-img">
                     <img src={a} alt=""/>
                   </div>
                   <h3>
                     Blue Monday
                     <span>黑越橘</span>
                   </h3>
                   <span className="title">
              数据拟调整黑越橘蛋糕自2011年起使用造型版本
            </span>
                   <span className="price">
              ¥ 268.00/2.0磅
            </span>
                 </a>
                 <a href="#" className="list-item-cart">
                   <img src={b} alt=""/>
                 </a>
               </li>
             </ul>
           </div>
         </div>
     </div>
    )
  }
}