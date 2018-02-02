import React from 'react';
import {Link} from "react-router-dom";

export default class HomeList extends React.Component {
    render() {
        let {href, banner, contents} = this.props.list;
        return <div>
            <div className='h7'></div>
            <div className='box list'>
                {this.props.children}
                <div>
                    <a href={href}><img src={banner} alt=""/></a>
                    <div className='product-list'>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {contents.length ? contents.map((item, index) => (
                                    <div key={index} className="swiper-slide">
                                        <img src={`https://raw.githubusercontent.com/MHL0852/21cake/21cake/server/dist${item.imageUrl}`} alt=""/>
                                        <span>{item.name}</span>
                                    </div>
                                )) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}