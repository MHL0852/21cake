import React from 'react';
import ReactSwipe from 'react-swipe';
import a from "../../common/images/detailBanner1.jpg";
import b from "../../common/images/detailBanner2.jpg";
import c from "../../common/images/detailBanner3.jpg";
import d from "../../common/images/detailBanner4.jpg";
import e from "../../common/images/detailBanner5.jpg";
export default class DetailSlider extends React.Component {
  constructor() {
    super();
    this.state = {
        index: 0,
      listImg : [
        {src: a},
        {src: b},
        {src: c},
        {src: d},
        {src: e}
      ]
    };

  }
    render() {
      let opts = {
        continuous: false,
        callback: (index) => {
          this.setState({index});
        }
      };
        return (
          <div className='detailSlider'>
            <ReactSwipe className="carousel" swipeOptions={opts}>
              {this.state.listImg.map((item, index) => (
                <div  key={index}><img src={item.src}/></div>
              ))}
            </ReactSwipe>
            <div className='dots'>
              {this.state.listImg.map((item, index) => (
                <span key={index} className={index === this.state.index ? "active" : ""}></span>
              ))}
            </div>
          </div>
        )
    }
}