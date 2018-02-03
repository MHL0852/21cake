import React from 'react';
import ajax from "axios";
import "./detail.less";
import DetailSlider from "./DetailSlider";
import DetailCake from "./DetailCake";
import DetailFooter from "./DetailFooter";
import ShopBox from "../../component/ShopBox";
export default class Detail extends React.Component {
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
      flag:0,
      adrs:''
    }
  }
  componentWillMount(){
    let adrs=this.state.adrs;
    let utlA=this.props.location.pathname;
    let urlTest=/[0-9]+$/;
    adrs=urlTest.exec(utlA)[0];
    ajax.get(`http://localhost:10086/detail?id=${adrs}`
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
      // console.log(this.state);
      return <div className="detail">
        <DetailSlider/>
        <DetailCake detailData={this.state}/>
        <DetailFooter/>
        <ShopBox detailData={this.state}/>
        </div>
    }
}