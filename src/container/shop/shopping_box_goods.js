import React from 'react';
import {withRouter, Link} from 'react-router-dom'

@withRouter
class shopping_box_goods extends React.Component {
    render() {
        console.log(this.props.data,"aaaaaaaaaaaaaaaa");
        let data=this.props.data;


        if(this.props.data){
            console.log(this.props.data);
            console.log(this.props.data.img_url);
        }
        return <div className="shopping_box_goods_">
            <Link to="/">
                <img src={`../../../server/dist${data.img_url}`}
                    alt="图片" className="shopping_box_goods_img"/>
                <h2 className="shopping_box_goods_name">
                <p className="shopping_box_en_name">
                    {data.en_name}
                </p>
                    <p className="shopping_box_name">
                        {data.name}
                </p>
                    <p className="shopping_box_size">
                        规格：{this.props.num}个
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