import React from 'react';
import './user.less'

export default class User extends React.Component {
    constructor() {
        super();
        this.state = {
            loginFrom: 'account'
        }
    }

    render() {
        return <div className="user_container">
            <div className="mainBox">
                <div className="loginBox">
                    <ul className="login_header">
                        <li className="active">账号密码登录</li>
                        <li>手机验证码登录</li>
                    </ul>
                    <ul className="login_body">
                        <li className='account'>
                            <ul>
                                <li>
                                    <input type="text" placeholder="用户名/邮箱地址"/>
                                </li>
                                <li>
                                    <input type="password" placeholder="填写密码"/>
                                </li>
                                <li></li>
                            </ul>
                        </li>
                        <li className="phone">
                            <ul>
                                <li>
                                    <input type="text" placeholder="手机号" className="phoneNumber"/>
                                </li>
                                <li>
                                    <input type="text" placeholder="请输入图片字符" className="imgText"/>
                                    <span><img src="" alt=""/></span><i></i>
                                </li>
                                <li>
                                    <input type="text" placeholder="输入手机验证码" className="phoneCode"/><button>发送验证码</button>
                                </li>
                            </ul>



                        </li>
                    </ul>
                    <button className="login_footer">登录</button>
                </div>
                <div className="remember">

                </div>
            </div>
        </div>
    }
}