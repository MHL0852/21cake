import React from 'react';

export default class HomeList extends React.Component {
    render() {
        return <div className='box list'>
            {this.props.children}
        </div>
    }
}