import React from 'react';

export default class HomeFocus extends React.Component {
    render() {
        return <div className='box focus'>
            <h3>廿一客·<span>榜单</span></h3>
            <ul>
                {this.props.bangdan.length ? this.props.bangdan.map((item, index) => (
                    <li key={index}><img src={item.imageUrl} alt=""/></li>
                )) : null}
            </ul>
        </div>
    }
}