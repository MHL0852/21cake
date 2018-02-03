import React from 'react';
import Shopping_box from './shopping_box_goods';
import TypeCommon from "../../component/TypeCommon";
import './index.less'

export default class Shop extends React.Component {
    render() {
      console.log(this.props);
      return <div className="shopping_container">
<h5 className="shopping_title">·满150免配送服务费·</h5>
            <ul className= 'shopping_box_all'>
                <li className="shopping_box_goods">
                    <Shopping_box/>
                    <div className="shopping_box_number">
                        <a className="shopping_box_minus">
                            <img src="" alt="减少"/>
                        </a>
                        <span>
                            个数
                        </span>
                        <a className="shopping_box_add">
                            <img src="" alt="增加"/>
                        </a>
                    </div>
                </li>
                <li className="shopping_box_recommend">
                    <span className="shopping_recommend_text">搭配商品</span>
<TypeCommon urlAdrs="list/recommend" location={{pathname:"recommend"}}/>
                </li>
            </ul>
        </div>
    }
}