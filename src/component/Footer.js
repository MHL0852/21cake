import React from 'react';
import {Link} from "react-router-dom";
import "../common/index.less";


export default class Footer extends React.Component {
    render() {
        return <ul className="footer">
            <li><Link to='/home'><i className='iconfont icon-home'></i><span>首页</span></Link></li>
            <li><Link to='/type'><i className='iconfont icon-weibiaoti1'></i><span>分类</span></Link></li>
            <li><Link to='/shop'><i className='iconfont icon-xiazai1'></i><span>购物车</span></Link></li>
            <li><Link to='/community'><i className='iconfont icon-shequ'></i><span>社区</span></Link></li>
            <li><Link to='/user'><i className='iconfont icon-gerenzhongxin'></i><span>我</span></Link></li>
        </ul>
    }
}