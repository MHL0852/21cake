import React from 'react';
import ReactSwipe from 'react-swipe';
import {Link} from "react-router-dom";

export default class HomeSlider extends React.Component {
  constructor() {
    super();
    this.state = {index: 0};
  }

  componentWillMount() {
  }

  render() {
    let opts = {
      continuous: true,
      auto: 3000,
      callback: (index) => {
        this.setState({index});
      }
    };
    return <div className='slider'>
      <ReactSwipe className="carousel" swipeOptions={opts}>
        {this.props.sliders.map((item, index) => (

            <div key={index}>
              <Link to={`/detail?id=${item.id}`}>
                <img src={`https://raw.githubusercontent.com/MHL0852/21cake/21cake/server/dist${item.img_url}`} alt=""/>
              </Link>
            </div>
        ))}
      </ReactSwipe>
      <div className='dots'>
        {this.props.sliders.map((item, index) => (
            <span key={index} className={index === this.state.index ? "active" : ""}></span>
        ))}
      </div>
    </div>
  }
}
