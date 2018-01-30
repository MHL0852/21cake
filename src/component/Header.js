import React from 'react';
import "../common/index.less";
export default class Header extends React.Component {
    render() {
        return <div className='header'><i className='logo'></i>{this.props.children}</div>
    }
}