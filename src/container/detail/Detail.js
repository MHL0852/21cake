import React from 'react';
import ajax from "axios";
import DetailSlider from "./DetailSlider";
import "./detail.less";
import DetailCake from "./DetailCake";
export default class Detail extends React.Component {

    render() {
        return <div className="detail">
            <DetailSlider/>
            <DetailCake/>
        </div>
    }
}