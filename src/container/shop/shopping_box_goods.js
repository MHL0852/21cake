import React from 'react';
import {withRouter, Link} from 'react-router-dom'

@withRouter
class shopping_box_goods extends React.Component {
    render() {
        return <div className="shopping_box_goods_">
            <Link to="/">
                <img
                    src="https://raw.githubusercontent.com/MHL0852/21cake/21cake/server/dist/themes/wap/img/1.00P-full-13.00.jpg"
                    alt="图片" className="shopping_box_goods_img"/>
                <h2 className="shopping_box_goods_name">
                <p className="shopping_box_en_name">
                     英文名字
                </p>
                    <p className="shopping_box_name">
                    中文名字
                </p>
                    <p className="shopping_box_size">
                        规格：个
                    </p>
                </h2>
                <span className="shopping_cart_price">
商品价格
            </span>
            </Link>
        </div>
    }
}

export default shopping_box_goods