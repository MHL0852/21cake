import React from 'react';
import ListCommon from "../../component/ListCommon";
import {connect} from "react-redux";
import actions from "../../store/actions/detail";
import ShopBox from "../../component/ShopBox";
import TypeCommon from "../../component/TypeCommon";
import a from "../../common/images/detailShow1.jpg";
import b from "../../common/images/detailShow2.jpg";
import c from "../../common/images/detailShow3.jpg";
import d from "../../common/images/detailShow4.jpg";
import e from "../../common/images/detailShow5.jpg";
import f from "../../common/images/detailShow6.jpg";
@connect(state=>({...state.detail}),actions)
export default class DetailCake extends React.Component {
  constructor(){
    super();
    this.state={
      showImg : [
        {src: a},
        {src: b},
        {src: c},
        {src: d},
        {src: e},
        {src: f}
      ]
    }
  }

  handleClickOpenBox=(e)=>{
    if(e.target===this.openBox){
      this.props.changeShopFlag({top:"0"});
      this.props.tabShopTab({tab:true});
      this.props.changeShopData({flag:0});
    }
  };
  render() {
    let arr=[];
    for (let key in this.props.detailData.productsArr) {
      if(this.props.detailData.productsArr.hasOwnProperty(key)){
        arr=[...arr,this.props.detailData.productsArr[key]];
      }
    }
    let {catId,en_name,goodsId,name,productsArr,saleTime,tags}=this.props.detailData;
    return<div>
      <div className="detailCake">
        <div className="details-data">
          <div className="pro-title">
            <h3>{en_name}</h3>
            <p>{name}</p>
          </div>
          <div className="pro-price">
            ￥ {(arr[this.props.flag]||{}).price}
          </div>
          <div className="pro-action">
            {tags.map((item,index)=>(
              <a href="javascript:;" key={index}>{item.content} ›</a>
            ))}
          </div>
          <div className="pro-details-taste clearfix">
            <i className="details-taste-icon"></i><span>红颜草莓，糖度>8% </span>
          </div>
          <div className="pro-select">
            <div className="pro-select-card"  onClick={this.handleClickOpenBox}>
              <div className="card-title clearfix">
                <span>已选择{(arr[this.props.flag]||{}).spec}<span ref={x=>this.openBox=x}>></span></span>
              </div>
              <div className="details-options-card">
                <ul className="details-options clearfix">
                  <li><i></i> <span>{(arr[this.props.flag]||{}).size}</span></li>
                  <li><i></i> <span>{(arr[this.props.flag]||{}).cutlery_content}</span></li>
                  <li><i></i> <span>{(arr[this.props.flag]||{}).suite_amount}</span></li>
                  <li><i></i> <span>最晚明早09:30送达</span></li>
                </ul>
              </div>
              <ul className="store-info">
                <li>
                  <i></i>
                  <span>保鲜条件</span>
                  <p className="spandd">0－4℃保藏12小时，5℃食用为佳11111111</p>
                </li>
                <li>
                  <i></i>
                  <span>参考甜度</span>
                  <p className="sweet-list">
                    <i className="active"></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="detailes-intro">
          /红枣奶油戚风，与姜撞奶慕斯/<br/>
          /温暖、绵延，日常题材的一闪灵感/<br/>
        </div>
        <div className="details-img">
          {this.state.showImg.map((item, index) => (
            <img key={index} src={item.src}/>
          ))}
          <span>以上图片仅供参考，请以收到实物为准。</span>
        </div>
        <div className="recommend-list">
          <p className="recommend-list-p">· 推荐商品 ·</p>
          <TypeCommon urlAdrs="list/recommend" location={{pathname:"recommend"}}/>
        </div>
      </div>
    </div>

  }
}