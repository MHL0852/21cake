import React from 'react';
import Header from "../../component/Header";
import {Link} from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return <div><Header><Link to='' className='city'><i></i>北京</Link></Header></div>
    }
}