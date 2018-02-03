import React from 'react';
import "../common/ShopBox.less";
import "../common/index.less";
import a from "../common/images/2.00P-full-17.00.jpg";
import {connect} from "react-redux";
import actions from "../store/actions/detail";
@connect(state=>{
    console.log(state);
    return {...state.detail}
}
  ,actions)
export default class ShopBox extends React.Component {
  constructor(props){
    super();
    this.state={flagOpen:props.boxFlag,selectId:0,top:"100%"};
  }
  handleClickShopBox=(e)=>{
    if(e.target===this.shopBox||e.target===this.closeIcon||this.props.boxFlag){
      this.props.changeShopFlag("false");
      this.setState({flagOpen:this.props.boxFlag});
      this.setState({
        top:'100%'
      })
    }
  };

  componentDidMount(){
    console.log(this.props.boxFlag,111111);
    console.log(1);
    if(this.props.boxFlag){
      this.setState({
        top:"0"
      })
    }
    this.changePorcs=(e)=>{
      let indexData=e.target.dataset.poric;
      e.target.className="active";
    };
  }
  render() {
    console.log(this.state);
    let x=this.props.boxFlag?'0':'-100px';
    let arr=[];
    for (let key in this.props.detailData.productsArr) {
      if(this.props.detailData.productsArr.hasOwnProperty(key)){
        arr.push(this.props.detailData.productsArr[key]);
      }
    }
    arr.pop();
    let {catId,en_name,flag,goodsId,name,productsArr,saleTime,tags}=this.props.detailData;//////////////////////////////////////
    // console.log(arr);
    // console.log(this.props.detailData);
    return <div className={"shopBoxBob"}  ref={x=>this.shopBox=x} onClick={this.handleClickShopBox}>
      <div className="shopBox" >
        <i className="close-icon" ref={x=>this.closeIcon=x}></i>
        <div className="details-suspension-content">
          <p className="details-price">￥{(arr[flag]||{}).price}</p>
          <div className="details-options">
            <ul className="details-options-r clearfix">
              <li>{(arr[flag]||{}).size}</li>
              <li>{(arr[flag]||{}).suite_amount}</li>
              <li>{(arr[flag]||{}).cutlery_content}</li>
              <li>最晚明早09:30送达</li>
            </ul>
            <img src={(arr[flag]||{}).img_url} alt=""/>
            <div className="normal-box">
              <p>商品规格</p>
              <div className="details-suspension-size">
                <ul onClick={this.changePorcs}>
                  <li>
                    {arr.map((item,index)=>(
                      <span key={index} data-poric={item.id} className={this.state.selectId == item ? 'active' : ''}>{item.spec}</span>
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