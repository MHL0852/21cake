import React from 'react';
import axios from 'axios';
import './magazine.less'
export default class magazine extends React.Component {
    constructor(){
        super();
        this.state={
            magazine:[]
        };
        let desW = 640,
            devW = document.documentElement.clientWidth;
        if (devW >= desW) {
            document.documentElement.style.fontSize = '100px';
            return;
        }
        document.documentElement.style.fontSize = devW / desW * 100 + 'px';
    }
    componentDidMount(){
        axios({
            url:'/magazine',
            methods:'GET'
        }).then(res=>{
            this.setState({
                magazine:res.data
            })
        })
    }
  render(){
        let item = this.state.magazine[0];
    return <div className="container">
        <ul>
            {this.state.magazine?this.state.magazine.map((item,index)=>{
                return(
                    <li key={index}>
                        <p className="timestamp"><time>{item?item.pubtime:''}</time></p>
                        <div className="stage">
                            <a className='article' href={`http://www.21cake.com/magazine/detail/${item.article_id||'1'}.html`}>
                                <h3 className="title"><span>
                        {item?item.title:''}
                    </span>
                                    <time>{item?item.pubtime:''}</time>
                                </h3>

                                <img src={item?`http://static.21cake.com/${item.image}`:''} alt=""/>
                                <p>21cake会员杂志-每月更新</p>
                                <h3 className="readAll" >阅读全文</h3>
                            </a>
                        </div>

                    </li>
                )
            }):''}
        </ul>
    </div>
  }
}