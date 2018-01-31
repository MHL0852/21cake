import React from 'react';
import {Link} from "react-router-dom";

export default class HomeActive extends React.Component {
    render() {
        let {img_url,remain,name,description,href} = this.props.activity[0];
        img_url = img_url ? `http://static.21cake.com/${img_url}` : '';
        return <div className='box activity'>
            <h3>廿一客·<span>活动</span></h3>
            <div className="act-list">
                <Link to={href}>
                    <div className='act-left'>
                        <div className='act-text'>
                            <h6>{name}</h6>
                            <p>{description}</p>
                            <span>{remain}</span>
                        </div>
                    </div>
                    <div className='act-right'>
                        <img src={img_url} alt=""/>
                    </div>
                </Link>
            </div>
        </div>
    }
}