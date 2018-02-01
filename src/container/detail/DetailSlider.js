import React from 'react';
import ReactSwipe from 'react-swipe';
export default class DetailSlider extends React.Component {
  constructor() {
    super();
    this.state = {
        index: 0,
      listImg : [
        {src: "http://static.21cake.com//upload/images/ac9a54aed43bd245aa2185e8a92add46.jpg"},
        {src: "http://static.21cake.com//upload/images/51e20a0f2674b91ca8ab604fa6a1c413.jpg"},
        {src: "http://static.21cake.com//upload/images/4cbebda248e1e7a935d626eb26819d4c.jpg"},
        {src: "http://static.21cake.com//upload/images/bd95523b2f7858f0baaeaba3ae5996ac.jpg"},
        {src: "http://static.21cake.com//upload/images/b624c85c2354d06d61875d014956f332.jpg"}
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