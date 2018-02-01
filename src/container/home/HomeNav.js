import React from 'react';
import {Link} from "react-router-dom";

export default class HomeNav extends React.Component {
    render() {
        return <div className='nav'>
            <ul>
                {this.props.navList.map((item,index)=>(
                    <li key={index}><Link to='/'><img src={`http://static.21cake.com/${item.img_url}`} alt=""/><span>{item.name}</span></Link></li>
                ))}
            </ul>
        </div>
    }
}

