import React from 'react';
import {Link} from "react-router-dom";

export default class HomeFocus extends React.Component {
  render() {
    return <div>
      <div className='h7'></div>
      <div className=' box focus'>
        <h3>廿一客·<span>榜单</span></h3>
        <div className='focus-list'>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {this.props.bangdan.length ? this.props.bangdan.map((item, index) => (
                  <div key={index} className="swiper-slide">
                    <Link to={{
                      pathname: '/focus-detail',
                      state: {name: item.name, enName: item.en_name}
                    }}>
                      <img src={item.imageUrl} alt="" onClick={() => {

                      }}/>
                    </Link>
                  </div>
              )) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
