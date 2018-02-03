import React from 'react';
import "../common/ShopBox.less";
import "../common/index.less";
import {connect} from "react-redux";
import actions from "../store/actions/detail";
@connect(state=>({...state.detail}),actions)
export default class ShopBox extends React.Component {
  constructor(props){
    super();
    this.state={selectId:0};
  }
  handleClickShopBox=(e)=>{
    if(e.target===this.shopBox||e.target===this.closeIcon||this.props.boxFlag){
      this.props.changeShopFlag({top:"100%"});
      this.props.tabShopTab({tab:true});
    }
  };
  changeId=(e)=>{
    console.log(this.props.flag);
    e.target.parentNode.childNodes.forEach((item,index)=>{
      if(item.innerText==e.target.dataset.spec){
        this.props.changeShopData({flag:index});
        item.className="active";
      }else{
        item.className="";
      }
    })
  };
  render() {

    let arr=[];
    for (let key in this.props.detailData.productsArr) {
      if(this.props.detailData.productsArr.hasOwnProperty(key)){
        arr.push(this.props.detailData.productsArr[key]);
      }
    }
    let {catId,en_name,goodsId,name,productsArr,saleTime,tags}=this.props.detailData;
    let {selectId}=this.state;
    return <div className={"shopBoxBob"} style={{top:this.props.top}}  ref={x=>this.shopBox=x} onClick={this.handleClickShopBox}>
      <div className="shopBox" >
        <i className="close-icon" ref={x=>this.closeIcon=x}></i>
        <div className="details-suspension-content">
          <p className="details-price">￥{(arr[this.props.flag]||{}).price}</p>
          <div className="details-options">
            <ul className="details-options-r clearfix">
              <li>{(arr[this.props.flag]||{}).size}</li>
              <li>{(arr[this.props.flag]||{}).suite_amount}</li>
              <li>{(arr[this.props.flag]||{}).cutlery_content}</li>
              <li>最晚明早09:30送达</li>
            </ul>
            <img src={"https://raw.githubusercontent.com/MHL0852/21cake/21cake/server/dist"+(arr[this.props.flag]||{}).img_url} alt=""/>
            <div className="normal-box">
              <p>商品规格</p>
              <div className="details-suspension-size">
                <ul onClick={this.changePorcs}>
                  <li>
                    {arr.map((item,index)=>(
                      <span key={index}  data-specid={index}  data-spec={item.spec} className={this.props.flag==index ? 'active' : ''} onClick={this.changeId}>{item.spec}</span>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}