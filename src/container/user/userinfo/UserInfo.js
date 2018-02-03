import React from 'react';
import "./userinfo.less";
import a from "../../../common/images/ico_member.png";
import b from "../../../common/images/member0.png";
import c from "../../../common/images/member1.png";
import d from "../../../common/images/member2.png";

export default class UserInfo extends React.Component {
  checkout = () => {
    let info = JSON.parse(localStorage.getItem('user'));
    if(!info.isLogin){
      console.log(this.props);
    }
  };

  render() {
    this.checkout();
    return <div className='userInfo'>
      <h3>我的廿一客</h3>
      <div className='user-content'>
        <img src={a}/>
        <p>21cake</p>
        <button>修改个人信息 &gt;</button>
      </div>
      <ul className='youhui'>
        <li>
          <span>￥0.0</span>
          <span>果实币余额</span>
        </li>
        <li>
          <span>0张</span>
          <span>优惠券</span>
        </li>
      </ul>
      <ul className='dingdan'>
        <li><img src={b} alt=""/><p><span>待付订单</span><i></i></p></li>
        <li><img src={c} alt=""/><p><span>全部订单</span><i></i></p></li>
        <li><img src={d} alt=""/><p><span>地址管理</span><i></i></p></li>
      </ul>
      <button className='zhuxiao'>退出登录</button>
    </div>
  }
}