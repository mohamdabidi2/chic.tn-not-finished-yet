import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './slidshow.css'
 
const slideImages = [
  'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/896291/pexels-photo-896291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
 
}
 
class SlidShow extends Component {
    
    render() { 
        return (  
            <div className='classs'>
            <Slide className='c1c' {...properties}>
        <div className="each-slide">
          <div className="each-slide1" style={{'backgroundImage': `url(${slideImages[0]})` }}>
            <span className="each-slide1"></span>
          </div>
        </div>
        <div className="each-slide">
          <div className="each-slide1" style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span ></span>
          </div>
        </div>
        <div className="each-slide">
          <div className="each-slide1" style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span className="each-slide1"></span>
          </div>
          
    
          
        </div>
      </Slide>
      </div>
        );
    }
}
 
export default SlidShow;