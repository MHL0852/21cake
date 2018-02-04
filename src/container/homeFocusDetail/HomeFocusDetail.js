import React from 'react';
import {connect} from "react-redux";
import Header from "../../component/Header";
import {Link} from "react-router-dom";
import fn from '../../common/computed';
import ShopBox from "../../component/ShopBox";
import action from "../../store/actions"
@connect(state => ({...state.home.focus, ...state.detail}), action.detail)
export default class HomeFocusDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      enName: '',
      data: [],
      page: '',
      top: "500",
      proData: {}
    }
  }

  handleClickOpenBox = (e) => {
    if (e.target.nodeName === 'I') {
      this.setState({proData: this.props[e.target.dataset.name][e.target.dataset.index].data});
      this.props.changeShopFlag({top: "0"});
      this.props.tabShopTab({tab: true});
      this.props.changeShopData({flag: 0});
    }

  };

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
    let {name, data, enName, page} = this.state;
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
            return (
                <div key={index}>
                  <Link to={`/detail?id=${item.id}`}>
                    <img src={`https://raw.githubusercontent.com/MHL0852/21cake/21cake/server/dist${item.url}`}
                         alt=""/>
                  </Link>
                  <div className='focus-shop'>
                    <p>售价：￥{arr.min}-{arr.max}</p>
                    <i className='iconfont icon-gouwuche-copy' data-name={enName} data-index={index}
                       onClick={this.handleClickOpenBox}></i>
                  </div>
                </div>
            )
          })}
          <ShopBox detailData={this.state.proData} sure={true}/>
        </div>
      </div>
      <div className='focus-footer'></div>
    </div>
  }
}
