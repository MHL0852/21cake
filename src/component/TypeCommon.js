import React from 'react';
import ajax from "axios/index";
import {Link} from "react-router-dom";
import "../common/NavCommon.less";
export default class TypeCommon extends React.Component {
  constructor(){
    super();
    this.state={cakeList:[],urlAdrs:'',isActive:false}
  }
  componentDidMount(){
    let urlAdrs=this.state.urlAdrs;
    let utlA=this.props.location.pathname;
    let urlTest=/[a-z]+$/;
    urlAdrs=urlTest.exec(utlA)[0];
    if(urlAdrs==='type'){
      urlAdrs="cake";
    }
    ajax({
      url:`http://localhost:10086/list/${urlAdrs}`,
      method:"GET"
    }).then((res)=>{
      this.setState({
        cakeList:res.data,
        urlAdrs
      })
    }).catch((val)=>{
      console.log(val);
    });
  }
  render() {
    return(
      <div className="listCommon">
        <ul className="clearfix">
          {this.state.cakeList.map((item,index)=>(
            <li key={index}>
              <Link to={`/detail/?id=${item.cake_goods_id}`} className="list-item-link">
                <div className="item-link-img">
                  <img src={`https://raw.githubusercontent.com/MHL0852/21cake/21cake/server/dist${item.img_url}`} alt=""/>
                </div>
                <h3>
                  {item.en_name}
                  <span>{item.name}</span>
                </h3>
                <span className="title">
            数据拟调整黑越橘蛋糕自2011年起使用造型版本
          </span>
                <span className="price">
            ¥ {item.price}/{item.spec}
          </span>
              </Link>
              <Link to={"/shop"} className="list-item-cart">
                <i className='iconfont icon-gouwuche-copy'></i>
              </Link>
            </li>
          ))}
        </ul>
        <div className="lastList">没有了。</div>
      </div>
    )
  }
}