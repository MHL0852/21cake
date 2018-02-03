import React from 'react';
import Shopping_box from './shopping_box_goods';
import TypeCommon from "../../component/TypeCommon";
import './index.less';
import axios from 'axios';

export default class Shop extends React.Component {
    constructor() {
        super();
        this.state = {
            userGoods: [{id:'1',num:1},{id:'2',num:1}],
            goodsData:[]

        }
    }

    componentDidMount() {
        let dataArr = [];
        if (this.state.userGoods) {
            let arr = [...this.state.userGoods];
            arr.forEach((item,index) => {
                axios.get(`http://localhost:10086/detail?id=${item.id}`).then(
                    res => {
                        dataArr.push(res.data);
                      item.data=res.data;
                        this.setState({
                            goodsData:[...this.state.goodsData,item]
                        })
                    }
                ).catch((err) => {
                    console.log(err);
                })

            });
            this.setState({
                userGoods:arr
            })
        }

    }

    changeNum=(index,changed)=>{
        let data=this.state.goodsData;
        data[index].num+=changed;
        this.setState({
            goodsData:data
        })
    };

    render() {
        return <div className="shopping_container">
            <h5 className="shopping_title">·满150免配送服务费·</h5>
            <ul className='shopping_box_all'>
                {this.state.goodsData.map((item, index) => {
                    if(item.num==0)return;
                    return <li className="shopping_box_goods" key={index}>
                        <Shopping_box data={item.data} num={item.num}/>
                        <div className="shopping_box_number">
                            <a className="shopping_box_minus" onClick={this.changeNum.bind(this,index,-1)}>
                                <img src={`../../server/dist/upload/images/${item.num==1?"delete":"-"}.png`} alt="减少" style={{marginBottom: item.num==1?'0':'5px'}}/>
                            </a>
                            {item.num}
                            <a className="shopping_box_add">
                                <img src={"../../server/dist/upload/images/+.png"} alt="增加" onClick={this.changeNum.bind(this,index,1)}/>
                            </a>
                        </div>
                    </li>
                })}
                <li className="shopping_box_recommend">
                    <span className="shopping_recommend_text">搭配商品</span>
                    <TypeCommon urlAdrs="list/recommend" location={{pathname: "recommend"}}/>
                </li>
            </ul>
        </div>
    }
}