import React from 'react';
import ajax from "axios";
import {Link} from "react-router-dom";
import "./detail.less";
import DetailSlider from "./DetailSlider";
import DetailCake from "./DetailCake";
import DetailFooter from "./DetailFooter";
import ShopBox from "../../component/ShopBox";
import Header from "../../component/Header";
import '../../common/index.less';
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
      return <div className="detail">
        <Header>
          <div className='focus-header detailHeader'>
            <span><Link to={"/type"}>&lt;</Link></span>
            <p>{this.state.name}</p>
            <span></span>
          </div>
        </Header>

        <DetailSlider/>
        <DetailCake detailData={this.state}/>
        <DetailFooter/>
        <ShopBox detailData={this.state}/>
        </div>
    }
}