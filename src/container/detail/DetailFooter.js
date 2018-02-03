import React from 'react';
import {connect} from "react-redux";
import actions from "../../store/actions/detail";
import {Link} from "react-router-dom";
@connect(state=>({...state.detail}),actions)
export default class DetailFooter extends React.Component {
  handlShoping=(e)=>{
    if(this.props.top=="100%"){
      this.props.changeShopFlag({top:'0'})
    }else{

    }
  };
  render() {
    return <div className="detailFooter" onClick={this.handlShoping}>
      <div className="detailFooter-left" style={{display:"none"}} ref={x => this.shopingBox1 = x}>立即购买</div>
      <Link to={"/type"} className="detailFooter-left" style={{display:'black'}} ref={x => this.shopingBox1 = x}>立即购买</Link>
      <div className="detailFooter-right" ref={x => this.shopingBox2 = x}>加入购物车</div>
    </div>
  }
}