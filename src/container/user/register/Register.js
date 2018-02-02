import React from 'react';
import './register.less';
import {Link} from 'react-router-dom';
import './register.less'

export default class Regist extends React.Component {
  constructor(){
    super();
    this.state={
      tip:'密码由8-20位字符组成，需要同时包含英文和数字'
    }
  }
  render(){
    return <div className="user_container">
        <div className="mainBox">
          <h4>用户注册</h4>
            <ul>
            <li className='form'>
                <input type="text" placeholder="输入用户名"/>
            </li>
            <li  className='form'>
                <input type="text" placeholder="密码：8-20位字符，需同时包含英文和数字"/>
            </li>
            <li className='form'>
                <input type="text" placeholder="确认密码"/>
            </li>
            <li className="imgTest form">
                <input type="text" placeholder="请输入图片字符"/>
                <img
                src="http://img1.imgtn.bdimg.com/it/u=926558781,3026102434&fm=27&gp=0.jpg"
                alt="" className="verification "/>
                <span className="refresh">
                    <img src="http://static.21cake.com//themes/wap/img/renovate.png" alt=""/>
                </span>
            </li>
            <li className="phoneCode form">
                <input type="text" placeholder="这个还是别填了，我真不想做短信验证了"/> <span></span>
            </li>
            <li className='form'>
                <input type="text" placeholder="请选择生日"/>
            </li>
            <li></li>
            <li className="register">
                <button>注册</button>
            </li>
            <li>
                <input type="checkbox"/>已阅读并同意
                <Link to=''>21客会员协议</Link>和
                <Link to=''>隐私保护政策</Link>
            </li>
            </ul>
        </div>
    </div>
  }
}