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
import {connect} from "react-redux";
import actions from "../../store/actions/detail";
@connect(state=>({...state.detail}),actions)
export default class Detail extends React.Component {
  constructor(props){
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
  closeShopBox=(e)=>{
    this.props.changeShopFlag({top:"100%"});
    this.props.tabShopTab({tab:true});
  }
  componentWillMount(){
    let adrs=this.state.adrs;
    let utlA=this.props.location.search;
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
          <div className='focus-header detailHeader' onClick={this.closeShopBox}>
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