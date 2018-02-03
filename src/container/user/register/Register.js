import React from 'react';
import './register.less';
import {Link,withRouter} from 'react-router-dom';
import './register.less';
import axios from 'axios';

@withRouter
export default class Regist extends React.Component {
  constructor(){
    super();
    this.state={
      tip:'密码由8-20位字符组成，需要同时包含英文和数字'
    }
  }

  register=()=>{
      let reg=/^[a-zA-Z][a-zA-Z0-9]{7,19}&/;
      if(!this.agree.checked){
          this.setState({
              tip:"请先同意会员协议与隐私保护政策!"
          })
      }else if(!this._username.value){
          this.setState({
              tip:"请先输入用户名!"
          })
      }else if(!this._password.value){
          this.setState({
              tip:"请输入密码!"
          })
      }else if(!(this._password.value===this._beSure.value)){
          this.setState({
              tip:"两次输入密码必须一致!"
          })
      }else if(this._imgTest.value!=7482){
          this.setState({
              tip:"验证码错误!"
          })
      }else if(!this._birthday.value){
          this.setState({
              tip:"请填写生日!"
          })
      }else{
          axios.post('http://localhost:10086/register',{
              username:this._username.value,
              password:this._password.value,
              birthday:this._birthday.value
          }).then(res=>{
              if(res.err===0){
                  this.setState({
                      tip:'注册成功，即将跳转到主页'
                  });
                  localStorage.setItem('user',JSON.stringify({user:this._username.value,isLogin:true}));
                  setTimeout(()=>{
                      this.props.history.push('/home')
                  },2000);
              }else if(res.msg==="用户已存在"){
                this.setState({
                    tip:'用户名已存在，请重新申请'
                });
              }
              this._username.value='';
              this._birthday.value='';
              this._password.value='';
              this._imgTest.value='';
              this._beSure.value='';
          })
      }

  };

  render(){
    return <div className="register_user_container">
        <div className="register_mainBox">
          <h4>用户注册</h4>
            <ul className='clearfix'>
            <li className='form'>
                <input type="text" placeholder="输入用户名" ref={x=>this._username=x}/>
            </li>
            <li  className='form'>
                <input type="password" placeholder="密码：8-20位字符，需同时包含英文和数字" ref={x=>this._password=x}/>
            </li>
            <li className='form'>
                <input type="password" placeholder="确认密码" ref={x=>this._beSure=x}/>
            </li>
            <li className="imgTest form">
                <input type="text" placeholder="请输入图片字符" ref={x=>this._imgTest=x}/>
                <img
                src="http://img1.imgtn.bdimg.com/it/u=926558781,3026102434&fm=27&gp=0.jpg"
                alt="" className="verification "/>
                <span className="refresh">
                    <img src="http://static.21cake.com//themes/wap/img/renovate.png" alt=""/>
                </span>
            </li>
            <li className="phoneCode form">
                <input type="text" placeholder="就是个摆设，没做短信验证"/> <span></span>
            </li>
            <li className='form'>
                <input type="text" placeholder="请选择生日" ref={x=>this._birthday=x}/>
            </li>
            <li style={{fontSize:'0.22rem',color:'red'}}>
                {this.state.tip}
            </li>
            <li className="register">
                <button onClick={this.register}>注册</button>
            </li>
            </ul>
            <div className="agree">
                <label>
                    <input type="checkbox" ref={x=>this.agree=x}/>已阅读并同意
                </label>
                <Link to='/user/agreement'>21客会员协议</Link>和
                <Link to='/user/privacy'>隐私保护政策</Link>
            </div>
        </div>
    </div>
  }
}