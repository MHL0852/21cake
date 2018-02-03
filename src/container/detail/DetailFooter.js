import React from 'react';
import {connect} from "react-redux";
import actions from "../../store/actions/detail";
import {Link} from "react-router-dom";
@connect(state=>({...state.detail}),actions)
export default class DetailFooter extends React.Component {
  handlShoping=(e)=>{
    if(this.props.top=="100%"){
      this.props.changeShopFlag({top:'0'});
      this.props.tabShopTab({tab:false});
    }else{
      this.props.changeShopFlag({top:'100%'});
      this.props.tabShopTab({tab:true});
    }
  };
  render() {
    return <div onClick={this.handlShoping}>
      <div className="detailFooter" style={{display:this.props.tab?'block':'none'}} ref={x => this.shopingBox1 = x}>
        <div className="detailFooter-left">立即购买</div>
        <div className="detailFooter-right">加入购物车</div>
      </div>
      <div className="detailFooter" style={{display:this.props.tab?'none':'block'}} ref={x => this.shopingBox2 = x}>
        <Link to={
          { pathname:"/shop",state:{id:0,goodsId:0,num:1}}
        } className="detailFooter-left" >立即购买</Link>
        <div className="detailFooter-right" >加入购物车</div>
      </div>
    </div>
  }

}