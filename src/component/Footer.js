import React from 'react';
import {NavLink} from "react-router-dom";
import "../common/index.less";

export default class Footer extends React.Component {
    render() {
        return <ul className="footer">
            <li><NavLink to='/home'><i className='iconfont icon-iconfonthome0'></i><span>首页</span></NavLink></li>
            <li><NavLink to='/type'><i className='iconfont icon-weibiaoti1'></i><span>分类</span></NavLink></li>
            <li><NavLink to='/shop'><i className='iconfont icon-gouwuche-copy'></i><span>购物车</span></NavLink></li>
            <li><NavLink to='/community'><i className='iconfont icon-shequ'></i><span>社区</span></NavLink></li>
            <li><NavLink to='/user'><i className='iconfont icon-wode2'></i><span>我</span></NavLink></li>
        </ul>
    }
}