import React from 'react';
import ajax from "axios";
import "../types.less";
import "../../../common/NavCommon.less";
export default class Cake extends React.Component {
    constructor(){
        super();
        this.state={cakeList:[]}
    }
  componentDidMount(){
    ajax({
      url:"http://localhost:10086/list/cake",
      method:"GET"
    }).then((res)=>{
      this.setState({
        cakeList:res.data.data
      })
    }).catch((val)=>{
      console.log(val);
    });
  }
    render() {
      console.log(this.state.cakeList);
      return(
      <div className="listCommon">
        <ul className="clearfix">
          {this.state.cakeList.map((item,index)=>(
            <li id={`list-goods-${item.cake_goods_id}`} key={index}>
              <a href={`http://www.21cake.com/goods-${item.site_goods_id}.html`} className="list-item-link">
                <div className="item-link-img">
                  <img src={`http://static.21cake.com/${item.img_url}`} alt=""/>
                </div>
                <h3>
                  {item.en_name}
                  <span>{item.name}</span>
                </h3>
                <span className="title">
                  
                </span>
                <span className="price">
            ¥ {item.price}/{item.spec}磅
          </span>
              </a>
              <a href="#" className="list-item-cart">
                <i className='iconfont icon-gouwuche-copy'></i>
              </a>
            </li>
          ))}
          <li className="lastList">没了</li>
        </ul>

      </div>
      )
    }
}