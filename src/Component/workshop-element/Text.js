import React, { Component } from 'react';
import './text.css'
class Text extends Component {

    render() { 
        return ( 
            <div className='apercy-menu'>
            <div className='text-dec-workshop'>
                <input className='Text-input-workshop' type='text' placeholder='Enter text here'/>
                <div className='Font-input-workshop'>
                    <p className='Text-Font-input-workshop'>Change Font</p>
                    <select className='select-input-workshop'>
                  
                        <option className='font-familly-input-workshop2'>Oswald</option>
                        <option className='font-familly-input-workshop3'>Raleway</option>
                        <option className='font-familly-input-workshop4'>Merriweather</option>
                        <option className='font-familly-input-workshop5'>Noto Sans</option>
                        <option className='font-familly-input-workshop6'>Poppins</option>
                        <option className='font-familly-input-workshop7'>Ubuntu</option>
                        <option className='font-familly-input-workshop8'>Open Sans Condensed</option>
                        <option className='font-familly-input-workshop9'>Roboto Mono</option>
                        <option className='font-familly-input-workshop10'>Playfair Display</option>
                        <option className='font-familly-input-workshop11'>ZCOOL KuaiLe</option>
                    </select>
                </div>
                <div className='color-input-workshop'>
                    <p className='color-Font-input-workshop'>Change color</p>
                    <select className='select-input-workshop'>

                        <option className='option-input-workshop2' >#01c4a9</option>
                        <option className='option-input-workshop3' >#016ac2</option>
                        <option className='option-input-workshop4' >#3700c0</option>
                        <option className='option-input-workshop5' >#8300c2</option>
                        <option className='option-input-workshop6' >#be0517</option>
                        <option className='option-input-workshop7' >#c60051</option>
                        <option className='option-input-workshop8' >#d1b30c</option>
                        <option className='option-input-workshop9' >#d13f0c</option>
                        <option className='option-input-workshop10' >#d1690c</option>
                        <option className='option-input-workshop11' >#ffffff</option>
                    </select>
                </div>
                <button className='button-input-workshop' >Add To Design</button>
                
            </div>
            </div>
         );
    }
}
 
export default Text;