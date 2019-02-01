import React, { Component } from 'react';
import './Number.css'
class Ragam extends Component {
    state = {  }
    render() { 
        return (  
            <div className='apercy-menu'>
                <input type='text' placeholder='write a Name'/>
                <input type='text' placeholder='write a Number'/>
                <input type='button' value='send'/>
            </div>
        );
    }
}
 
export default Ragam;