import React from 'react';
import {connect} from "react-redux";
import actions from "../../store/actions/detail";
@connect(state=>({...state.detail}),actions)
export default class DetailFooter extends React.Component {
  handlShoping=(e)=>{

  };
  render() {
    return <div className="detailFooter" ref={x => this.shopingBox = x} onClick={this.handlShoping}>
      <div className="detailFooter-left">立即购买</div>
      <div className="detailFooter-right">加入购物车</div>
    </div>
  }
}