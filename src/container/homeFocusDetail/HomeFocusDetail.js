import React from 'react';
import {connect} from "react-redux";
import Header from "../../component/Header";
import {Link} from "react-router-dom";
import fn from '../../common/computed';

@connect(state => ({...state.home.focus}))
export default class HomeFocusDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      enName: '',
      data: [],
      page: '',
      top: "500",
    }
  }

  componentWillMount() {
    let {location} = this.props;
    let {name, enName} = location.state || {name: '', enName: ''};
    let data = this.props[enName] || [];
    let page = data[0];
    data.splice(0, 1);
    this.setState({
      name, enName, page, data
    })
  }

  componentDidMount() {
    let timer = setInterval(() => {
      this.setState({top: this.state.top - 500});
      if (this.state.top <= 0) {
        clearInterval(timer);
      }
    }, 0);
  }

  render() {
    let {name, data, page} = this.state;
    return <div>
      <Header>
        <div className='focus-header'>
          <span><Link to='/home'></Link></span>
          <p>{name}</p>
          <span></span>
        </div>
      </Header>
      <div className='focus-detail' ref='div' style={{top: `${this.state.top}px`}}>
        <div className='focus-content'>
          {page ? <img src={`https://raw.githubusercontent.com/MHL0852/21cake/21cake/server/dist${page.url}`}
                       alt=""/> : null}
          {data.map((item, index) => {
            let arr = fn(item.data);
            console.log(arr);
            return (
                <div key={index}>
                  <Link to={`/detail?id=${item.id}`}>
                    <img src={`https://raw.githubusercontent.com/MHL0852/21cake/21cake/server/dist${item.url}`}
                         alt=""/>
                  </Link>
                  <div className='focus-shop'>
                    <p>售价：￥{arr.min}-{arr.max}</p>
                    <i className='iconfont icon-gouwuche-copy'></i>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
      <div className='focus-footer'></div>
    </div>
  }
}