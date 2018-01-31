import React from 'react';
import "../common/LIstCommon.less";

export default class ListCommon extends React.Component {
  render() {
    return (
      <div className="listCommon">
        <ul className="clearfix">
          <li>
            <a href="#" className="list-item-link">
              <div className="item-link-img">
                <img src="" alt=""/>
              </div>
              <h3>
                Blue Monday
                <span>黑越橘</span>
              </h3>

              <span className="price">
                ¥ 268.00/2.0磅
              </span>
            </a>
            <a href="#" className="list-item-cart">
              <i className='iconfont icon-gouwuche-copy'></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}