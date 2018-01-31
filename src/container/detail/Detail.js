import React from 'react';
import ajax from "axios";
export default class Detail extends React.Component {
    componentDidMount(){
        ajax({
          url:`http://localhost:10086/detail/`
        })
    }
    render() {
        return <div>Detail</div>
    }
}