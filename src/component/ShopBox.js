import React from 'react';
import "../common/ShopBox.less";
export default class ShopBox extends React.Component {
    render() {
        return <div className="shopBoxBob">
            <div className="shopBox">
                <i className="close-icon"></i>
                <div className="details-suspension-content">
                    <p className="details-price">￥{this.state}</p>
                </div>
            </div>
        </div>
    }
}