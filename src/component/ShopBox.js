import React from 'react';
import axios from 'axios';
import "../common/ShopBox.less";
import a from  "../common/images/2.00P-full-17.00.jpg";
export default class ShopBox extends React.Component {
    conponentWillMount(){
      axios.get({url:"http://localhost:10086/detail?id=6"})
        .then(res=>{})
        .catch(res=>{console.log(res);});
    }
    render() {
        return <div className="shopBoxBob">
            <div className="shopBox">
                <i className="close-icon"></i>
                <div className="details-suspension-content">
                    <p className="details-price">￥1280</p>
                    <div className="details-options">
                      <ul className="details-options-r clearfix">
                        <li>17*17</li>
                        <li>17*17</li>
                        <li>17*17</li>
                        <li>22222222</li>
                      </ul>
                      <img src={a} alt=""/>
                      <div className="normal-box">
                        <p>商品规格</p>
                        <ul className="details-suspension-size">
                          <li id="1">1.0磅</li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    }
}