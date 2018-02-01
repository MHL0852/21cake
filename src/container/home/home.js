import React from 'react';
import Header from "../../component/Header";
import {Link} from "react-router-dom";
import HomeSlider from "./HomeSlider";
import {connect} from "react-redux";
import actions from "../../store/actions/home";
import "./home.less";
import "../../common/LIstCommon.less";
import HomeFocus from "./HomeFocus";
import HomeNav from "./HomeNav";
import HomeList from "./HomeList";
import HomeActive from "./HomeActive";
import Swiper from "swiper";
import City from "./City";

@connect(state => ({...state.home}), actions)
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            cityName: "北京"
        }
    }

    componentWillMount() {
        this.props.getHomeAPI();
    }

    changePosition = () => {
        let mySwiper = new Swiper('.swiper-container', {
            loop: false,
            slidesPerView: 'auto',
            freeMode: true,
            freeModeMomentum: false,
        });
        let mySwiper1 = new Swiper('.swiper-container', {
            loop: false,
            slidesPerView: 'auto',
            freeMode: true,
            freeModeMomentum: false,
        });
        let mySwiper2 = new Swiper('.swiper-container', {
            loop: false,
            slidesPerView: 'auto',
            freeMode: true,
            freeModeMomentum: false,
        });
    };
    changeCityStyle = e => {
        if (e.target.classList.contains('city-box') || e.target.nodeName==="BUTTON") {
            this.$city.style.display = 'none';
        }
    };
    cityName = (name) => {
        this.setState({cityName:name});
    };

    componentDidUpdate() {
        this.changePosition();
        this.$city = this.city.refs.cityBox;
    }


    render() {
        let {sliders, navList, activity, bangdan, newProduct, renqi} = this.props;
        return <div>
            <Header>
                <button className='city' onClick={() => {
                    this.$city.style.display = 'block';
                }}><i></i>{this.state.cityName}
                </button>
            </Header>
            <City ref={x => this.city = x} changeCityStyle={this.changeCityStyle} cityName={this.cityName}/>
            <div className='content'>
                {sliders.length ? <HomeSlider sliders={sliders}/> : null}
                <HomeNav navList={navList}/>
                <HomeFocus bangdan={bangdan}/>
                <HomeList list={newProduct}>
                    <h3>廿一客·<span>新品</span></h3>
                </HomeList>
                <HomeList list={renqi}>
                    <h3>廿一客·<span>推荐</span></h3>
                </HomeList>
                <HomeActive activity={activity}/>
                <div className="lastList">没有了。</div>
            </div>
        </div>
    }
}