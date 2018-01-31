import React from 'react';
import ajax from "axios";
import "../types.less";
import "../../../common/NavCommon.less";
export default class Gift extends React.Component {
  constructor(){
    super();
    this.state={cakeList:[]}
  }
  componentWillMount(){
    let cakeList={};
    ajax({
      url:"http://localhost:10086/list/gift",
      method:"GET"
    }).then((res)=>{
      cakeList=JSON.parse(res.data);
      this.setState({
        cakeList:JSON.parse(res.data).goodsArr[1].goods
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
              <a href="#" className="list-item-link">
                <div className="item-link-img">
                  <img src={`http://static.21cake.com/${item.img_url}`} alt=""/>
                </div>
                <h3>
                  {item.en_name}
                  <span>{item.name}</span>
                </h3>
                <span className="title">
            数据拟调整黑越橘蛋糕自2011年起使用造型版本
          </span>
                <span className="price">
            ¥ {item.price}/{item.spec}磅
          </span>
              </a>
              <a href="#" className="list-item-cart">
                <img src="" alt=""/>
              </a>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}