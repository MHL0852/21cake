import React from 'react';
import "../common/ShopBox.less";
import "../common/index.less";
import {connect} from "react-redux";
import action from "../store/actions";
import {Link} from "react-router-dom";

@connect(state => ({...state.detail, ...state.shopList}), {...action.detail, ...action.shopList})
export default class ShopBox extends React.Component {
  constructor(props) {
    super();
    this.state = {selectId: 0};
  }

  handleClickShopBox = (e) => {
    if (e.target === this.shopBox || e.target === this.closeIcon || this.props.boxFlag) {
      this.props.changeShopFlag({top: "100%"});
      this.props.tabShopTab({tab: true});
      this.props.changeShopData({flag: 0});
    }
  };
  changeId=(e)=>{
    e.target.parentNode.childNodes.forEach((item,index)=>{
      if(item.innerText==e.target.dataset.spec){
        this.props.changeShopData({flag:index});
        this.props.pushGoodsDetail({...this.props,goodsSizeId:JSON.stringify(index)});
        item.className="active";
      }else{
        item.className="";
      }
    })
  };

  render() {
    let arr = [];
    for (let key in this.props.detailData.productsArr) {
      if (this.props.detailData.productsArr.hasOwnProperty(key)) {
        arr.push(this.props.detailData.productsArr[key]);
      }
    }

    let {catId, en_name, goodsId, name, productsArr, saleTime, tags} = this.props.detailData;
    let {selectId} = this.state;
    return <div className={"shopBoxBob"} style={{top: this.props.top}} ref={x => this.shopBox = x}
                onClick={this.handleClickShopBox}>
      <div className="shopBox" style={this.props.sure ? {bottom: '0'} : {}}>
        <i className="close-icon" ref={x => this.closeIcon = x}></i>
        <div className="details-suspension-content">
          <p className="details-price">￥{(arr[this.props.flag] || {}).price}</p>
          <div className="details-options">
            <ul className="details-options-r clearfix">
              <li>{(arr[this.props.flag] || {}).size}</li>
              <li>{(arr[this.props.flag] || {}).suite_amount}</li>
              <li>{(arr[this.props.flag] || {}).cutlery_content}</li>
              <li>最晚明早09:30送达</li>
            </ul>
            <img
                src={"https://raw.githubusercontent.com/MHL0852/21cake/21cake/server/dist" + (arr[this.props.flag] || {}).img_url}
                alt=""/>
            <div className="normal-box">
              <p>商品规格</p>
              <div className="details-suspension-size">
                <ul onClick={this.changePorcs}>
                  <li>
                    {arr.map((item, index) => (
                        <span key={index} data-specid={index} data-spec={item.spec}
                              className={this.props.flag == index ? 'active' : ''}
                              onClick={this.changeId}>{item.spec}</span>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {this.props.sure ?
              <Link to='/shop' className='sure-btn-box'><button className='sure-btn' onClick={() => {
                this.props.changeList(this.props.detailData.goodsId, 1);
                this.props.changeShopFlag({top: "100%"});
                this.props.tabShopTab({tab: true});
                this.props.changeShopData({flag: 0});
              }} style={{color:"white",fontSize:"0.25rem"}}>确定</button></Link> : null}
        </div>
      </div>
    </div>
  }
}