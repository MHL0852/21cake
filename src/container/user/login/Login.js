import React from 'react';
import './login.less';
import {Link} from 'react-router-dom';
import com from '../../../common/computed';

export default class User extends React.Component {
    constructor() {
        super();
        this.state = {
            loginFrom: 'account',
            tip:'',
            username:'',
            password:''
        };
        let data={
            "productsArr": {
                "1394461414.07419": {
                    "id": "99",
                    "size": "13x13cm",
                    "suite_amount": "适合3-4人分享",
                    "booking_hour_limited": "8",
                    "cutlery_content": "含5套餐具",
                    "price": "198.00",
                    "spec": "1.0磅",
                    "pound": "1.00",
                    "has_spec_img": 1,
                    "img_url": "/themes/wap/img/1.00P-full-13.00.jpg",
                    "is_default": "false",
                    "has_stock": 100536,
                    "cat_id": "3",
                    "bn": "201404-10"
                },
                "1394461415.461121": {
                    "id": "111",
                    "size": "17x17cm",
                    "suite_amount": "适合7-8人分享",
                    "booking_hour_limited": "8",
                    "cutlery_content": "含10套餐具",
                    "price": "298.00",
                    "spec": "2.0磅",
                    "pound": "2.00",
                    "has_spec_img": 1,
                    "img_url": "/themes/wap/img/2.00P-full-17.00.jpg",
                    "is_default": "true",
                    "has_stock": 100399,
                    "cat_id": "3",
                    "bn": "201404-20"
                },
                "1394461415.938122": {
                    "id": "117",
                    "size": "23x23cm",
                    "suite_amount": "适合11-12人分享",
                    "booking_hour_limited": "8",
                    "cutlery_content": "含15套餐具",
                    "price": "458.00",
                    "spec": "3.0磅",
                    "pound": "3.00",
                    "has_spec_img": 1,
                    "img_url": "/themes/wap/img/3.00P-full-23.00.jpg",
                    "is_default": "false",
                    "has_stock": 100045,
                    "cat_id": "3",
                    "bn": "201404-30"
                },
                "1394461416.45323": {
                    "id": "123",
                    "size": "26x26cm",
                    "suite_amount": "适合15-20人分享",
                    "booking_hour_limited": "8",
                    "cutlery_content": "含20套餐具",
                    "price": "750.00",
                    "spec": "5.0磅",
                    "pound": "5.00",
                    "has_spec_img": 1,
                    "img_url": "/themes/wap/img/5.00P-full-26.00.jpg",
                    "is_default": "false",
                    "has_stock": 100015,
                    "cat_id": "3",
                    "bn": "201404-50"
                }
            },
            "saleTime": {
                "date": "明天",
                "start_time": "10:00",
                "end_time": "18:30"
            },
            "catId": "3",
            "goodsId": "4",
            "type": "normal"
        };
       let res = com(data);
        console.log(res);
    }

    login(){

    }

    changeValue(val){

    }

    render() {
        return <div className="user_container">
            <div className="mainBox">
                <div className="loginBox">
                    <ul className="login_header clearfix">
                        <li className={this.state.loginFrom === "account" ? 'active' : null} onClick={() => {
                            this.setState({
                                loginFrom: 'account'
                            })
                        }}>账号密码登录
                        </li>
                        <li className={this.state.loginFrom === "phone" ? 'active' : null} onClick={() => {
                            this.setState({
                                loginFrom: 'phone'
                            })
                        }}>手机验证码登录
                        </li>
                    </ul>
                    <ul className="login_body clearfix">
                        <li className={'account' + ' ' + (this.state.loginFrom === "account" ? 'show' : '')}>
                            <ul className="clearfix">
                                <li>
                                    <input type="text" placeholder="用户名/邮箱地址" ref={x=>this._username=x} value={this.state.username} onChange={(value)=>{
                                        this.changeValue(value)
                                    }}/>
                                </li>
                                <li>
                                    <input type="password" placeholder="填写密码" ref={x=>{this._password=x}} value={this.state.username} onChange={(value)=>{
                                        this.changeValue(value)
                                    }}/>
                                </li>
                                <li></li>
                            </ul>
                        </li>
                        <li className={"phone" + ' ' + (this.state.loginFrom === "phone" ? 'show' : '')}>
                            <ul className="clearfix">
                                <li>
                                    <input type="text" placeholder="手机号" className="phoneNumber"/>
                                </li>
                                <li>
                                    <input type="text" placeholder="请输入图片字符" className="imgText"/>
                                    <img
                                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517484889497&di=fbf30f9436bd94d6c8f7fe50030fe48e&imgtype=0&src=http%3A%2F%2Fs10.sinaimg.cn%2Fsmall%2F003cvAxDzy6QKzjj289b9%26690"
                                        alt="" className="verification "/><span className="refresh"><img
                                    src="http://static.21cake.com//themes/wap/img/renovate.png" alt=""/></span>
                                </li>
                                <li>
                                    <input type="text" placeholder="输入手机验证码" className="phoneCode"/>
                                    <button className="sendCode">发送验证码</button>
                                </li>
                                <li>
                                    {this.state.tip}
                                </li>
                            </ul>


                        </li>
                    </ul>
                    <button className="login_footer" onClick={this.login}>登录</button>
                </div>
                <div className={"remember" + ' ' + (this.state.loginFrom === "phone" ? 'pho' : '')}>
                    <input type="checkbox"/>记住账号
                    <Link style={{
                        display: 'inline-block',
                        float: 'right',
                        marginLeft: '18px',
                        fontSize:'0.22rem',
                        lineHeight: '18px'
                    }} to='/user/register' className="forget">忘记密码</Link>
                    <Link style={{
                        display: 'inline-block',
                        float: 'right',
                        marginLeft: '18px',
                        fontSize:'0.22rem',
                        lineHeight: '18px'
                    }} to='/user/register' className="toRegister">去注册</Link>
                </div>
            </div>
        </div>
    }
}