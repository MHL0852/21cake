import React from 'react';

export default class HomeList extends React.Component {
    render() {
        let {href,banner,contents}=this.props.list;
        return <div className='box list'>
            {this.props.children}
            <div>
                <img src={`http://static.21cake.com/${banner}`} alt=""/>
                {/*<ul></ul>*/}
            </div>
        </div>
    }
}