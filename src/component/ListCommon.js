import React from 'react';
import "../../common/LIstCommon.less";
import a from "../../common/14593363138999.jpg";
import b from "../../common/list-cart.png";

export default class ListCommon extends React.Component {
  render() {
    return (
      <div className="listCommon">
        <ul className="clearfix">
          <li>
            <a href="#" className="list-item-link">
              <div className="item-link-img">
                <img src={a} alt=""/>
              </div>
              <h3>
                Blue Monday
                <span>黑越橘</span>
              </h3>
              <span className="title">
                数据拟调整黑越橘蛋糕自2011年起使用造型版本
              </span>
              <span className="price">
                ¥ 268.00/2.0磅
              </span>
            </a>
            <a href="#" className="list-item-cart">
              <img src={b} alt=""/>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}