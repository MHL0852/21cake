import React from 'react';
import './detail.less';
import ajax from "axios";
import TypeCommon from "../../component/TypeCommon";
import ListCommon from "../../component/ListCommon";
export default class DetailCake extends React.Component {
  constructor(){
    super();
    this.state={
      catId:'',
      name:'',
      en_name:'',
      goodsId:'',
      productsArr:{},
      saleTime:'',
      tags:[],
      flag:0
    }
  }
  componentWillMount(){
    ajax.get("http://localhost:10086/detail?id=6"
    ).then(res=>{
      this.setState(() =>{
        let  {catId,name,en_name,goodsId,saleTime,tags,productsArr}=JSON.parse(JSON.stringify(res.data));
        return{catId,name,en_name,goodsId,saleTime,tags,productsArr};
      })
    }).catch(res=>{
      console.log(res);
    });
  }
    render() {
      let arr=[];
      for (let key in this.state.productsArr) {
        if(this.state.productsArr.hasOwnProperty(key)){
          console.log(this.state.productsArr[key]);
          arr.push(this.state.productsArr[key]);
        }
      }
      arr.pop();
      console.log(arr);
      console.log(this.state);
      return <div className="detailCake">
          <div className="details-data">
            <div className="pro-title">
              <h3>{this.state.en_name}</h3>
              <p>{this.state.name}</p>
            </div>
            <div className="pro-price">
              ￥ {(arr[this.state.flag]||{}).price}
            </div>
            <div className="pro-action">
              {this.state.tags.map((item,index)=>(
                <a href="" key={index}>{item.content} ›</a>
              ))}
            </div>
            <div className="pro-detail"></div>
          </div>
          <div className="detailes-intro">
            /红枣奶油戚风，与姜撞奶慕斯/<br/>
            /温暖、绵延，日常题材的一闪灵感/<br/>
          </div>
          <div className="details-img">
            <img src="http://static.21cake.com/public/images/ba/90/3a/6c3e24d18f5e96b22cf81081b8e5909d.jpg?1516843014#w" alt=""/>
            <img src="http://static.21cake.com/public/images/3b/25/a3/fd79841480c665cbe24140d0ecf06b06.jpg?1516843019#h" alt=""/>
            <img src="http://static.21cake.com/public/images/b3/06/5d/10242fd31658dcf020d4564260dfcbc5.jpg?1516843037#h" alt=""/>
            <img src="http://static.21cake.com/public/images/74/c3/bf/22eb18f37e4724f666962753a8be9e2e.jpg?1516843048#h" alt=""/>
            <img src="http://static.21cake.com/public/images/3b/aa/8c/28183c8dfb88f28a4d79cf058ccd25fe.jpg?1516843053#h" alt=""/>
            <img src="http://static.21cake.com/public/images/af/b0/a9/17209e7010249c250653edd183cf8692.jpg?1516843062#h" alt=""/>
            <span>以上图片仅供参考，请以收到实物为准。</span>
          </div>
          <div className="recommend-list">
            <p className="recommend-list-p">· 推荐商品 ·</p>
            <ListCommon/>
          </div>
        </div>
    }
}