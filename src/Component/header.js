import React, { Component } from 'react';
import './header.css'



class Header extends Component {
    
    render() { 
        return ( 
            <div className='header'>
            <img  className='imaggs' src='https://i.imgur.com/6YQ2SUm.png' alt=''/>
            <div className='searchh'>
            <div className="wrap">
   <div className="search">
      <input type="text" className="searchTerm" placeholder="Search"/>
      <button type="submit" className="searchButton">
        <i className="fa fa-search"></i>
     </button>
   </div>
</div>
            </div>
            <span><i className="fas fa-shopping-cart"></i></span>
            <span className='logiiiin'><i className="far fa-user"></i> Login</span>
            </div>
         );
    }
}
 
export default Header;