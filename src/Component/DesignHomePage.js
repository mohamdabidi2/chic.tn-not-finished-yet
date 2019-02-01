import React, { Component } from 'react';
import './DesignHomePage.css'
import WorkShop from './workshop'
class DesignHomePage extends Component {
   
    render() { 
        return (  
            <div>
                <section className='Design-Section-one-Design'>
                <div className='design-div'>
                    <img  className='image-to-design1' src='https://i.imgur.com/R9TZv4g.png' alt=''/>
                    <h1 className='title-Design-Section-one-Design'>The Best Way To Look <span>Stylish</span></h1>
                    <div className='p-elemntet'>
                        <p className='list-Design-Section-one-Design'>Easy Usage</p>
                        <p className='list-Design-Section-one-Design'>Gain Time</p>
                        <p className='list-Design-Section-one-Design'>Anywhere and Any Time Access</p>
                    </div>
                    <div className='design-div-for-button'>
<a  className='color-button' href='/download'>Download</a>
<a  className='color-button'  href='/gallery'>View Gallery</a>
                    </div>
                    
                    </div>
                </section>
                <section className="dezzyem">
                    <div>
                        <h1 className='espace-between-espaces'>Design Your Clothes</h1>
                        <div >
                        <WorkShop/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default DesignHomePage;