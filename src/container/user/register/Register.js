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
          <h5>用户注册</h5>
            <ul>
            <li>
                <input type="text" placeholder="输入用户名"/>
            </li>
            <li>
                <input type="text" placeholder="密码：8-20位字符，需同时包含英文和数字"/>
            </li>
            <li>
                <input type="text" placeholder="确认密码"/>
            </li>
            <li>
                <input type="text" placeholder="请输入图片字符"/>
            </li>
            <li>
                <input type="text" placeholder="这个还是别填了，我真不想做短信验证了"/>
            </li>
            <li>
                <input type="text" placeholder="请选择生日"/>
            </li>
            <li></li>
            <li>
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