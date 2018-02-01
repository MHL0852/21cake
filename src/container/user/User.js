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
                        <li className={this.state.loginFrom === "account"?'active':null} onClick={()=>{
                            this.setState({
                                loginFrom: 'account'
                            })
                        }}>账号密码登录</li>
                        <li className={this.state.loginFrom === "phone"?'active':null} onClick={()=>{
                            this.setState({
                                loginFrom: 'phone'
                            })
                        }}>手机验证码登录</li>
                    </ul>
                    <ul className="login_body">
                        <li className={'account'+' '+(this.state.loginFrom === "account"?'show':'')}>
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
                        <li className={"phone"+' '+(this.state.loginFrom === "phone"?'show':'')}>
                            <ul>
                                <li>
                                    <input type="text" placeholder="手机号" className="phoneNumber"/>
                                </li>
                                <li>
                                    <input type="text" placeholder="请输入图片字符" className="imgText"/>
                                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517484889497&di=fbf30f9436bd94d6c8f7fe50030fe48e&imgtype=0&src=http%3A%2F%2Fs10.sinaimg.cn%2Fsmall%2F003cvAxDzy6QKzjj289b9%26690" alt="" className="verification "/><span className="refresh"><img src="http://static.21cake.com//themes/wap/img/renovate.png" alt="" /></span>
                                </li>
                                <li>
                                    <input type="text" placeholder="输入手机验证码" className="phoneCode"/><button className="sendCode">发送验证码</button>
                                </li>
                                <li>
                                    
                                </li>
                            </ul>



                        </li>
                    </ul>
                    <button className="login_footer">登录</button>
                </div>
                <div className="remember">
                    <input type="checkbox"/>记住账号
                    <span className="forget">忘记密码</span>
                    <span className="toRegister">去注册</span>
                </div>
            </div>
        </div>
    }
}