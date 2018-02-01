import React from 'react';
import './detail.less';
import ajax from "axios";
export default class DetailCake extends React.Component {
  componentDidMount(){
    ajax.get("http://localhost:10086/detail?id=1"
    ).then(res=>{
      console.log(res);
    }).catch(res=>{
      console.log(res);
    });
  }
    render() {
        return <div className="detailCake">
          <h1></h1>
        </div>
    }
}