import React from 'react';

export default class City extends React.Component {
    constructor() {
        super();
        this.state = {city: 'beijing', name: "北京"};
    }

    changeCity = (el) => {
        let city = el.dataset.city,
            name = el.innerHTML;
        this.setState({city, name});
    };

    render() {
        let {city, name} = this.state;
        return <div className='city-box' onClick={(e) => {
            this.props.changeCityStyle(e);
        }} ref='cityBox'>
            <div className='city-content'>
                <h3>城市选择</h3>
                <ul onClick={e => {
                    if (e.target.nodeName === 'SPAN') {
                        this.changeCity(e.target);
                    }
                }}>
                    <li>
                        <span data-city='shanghai' className={city == 'shanghai' ? 'active' : ''}>上海</span>
                        <span data-city='beijing' className={city == 'beijing' ? 'active' : ''}>北京</span>
                        <span data-city='tianjin' className={city == 'tianjin' ? 'active' : ''}>天津</span>
                        <span data-city='hangzhou' className={city == 'hangzhou' ? 'active' : ''}>杭州</span>
                    </li>
                    <li>
                        <span data-city='wuxi' className={city == 'wuxi' ? 'active' : ''}>无锡</span>
                        <span data-city='suzhou' className={city == 'suzhou' ? 'active' : ''}>苏州</span>
                        <span data-city='guangzhou' className={city == 'guangzhou' ? 'active' : ''}>广州</span>
                        <span data-city='shenzhen' className={city == 'shenzhen' ? 'active' : ''}>深圳</span></li>
                </ul>
                <p>*切换城市将清空购物车</p>
                <button onClick={e => {
                    this.props.cityName(name);
                    this.props.changeCityStyle(e);
                }}>确定
                </button>
            </div>
        </div>
    }
}